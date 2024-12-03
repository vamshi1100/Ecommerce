class Controller {
  constructor(viewInstance) {
    this.view = viewInstance;
    this.data = [];
  }

  fetchData() {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((responsedata) => {
        this.data = responsedata.slice(0, 20);
        this.view.displayData(this.data);
      })
      .catch((error) => console.error("Error:", error));
  }
}

class Filter extends Controller {
  constructor(viewInstance) {
    super(viewInstance);
  }

  initializeFilters() {
    const setupFilter = (buttonId, filterLogic) => {
      document.getElementById(buttonId).addEventListener("click", () => {
        const filteredData = this.data.filter(filterLogic);
        this.view.displayData(filteredData);
      });
    };

    setupFilter("filterg50", (item) => item.price > 50);

    setupFilter("filterl50", (item) => item.price < 1000);

    setupFilter("filterbtw", (item) => item.price > 50 && item.price < 1000);
  }
}

class Search extends Controller {
  constructor(viewInstance) {
    super(viewInstance);
    this.initializeSearch();
  }

  initializeSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filteredData = this.data.filter((item) => {
        return item.title.toLowerCase().includes(query);
      });

      this.view.displayData(filteredData);
    });
  }
}

class Filterpopularity extends Controller {
  constructor(viewInstance) {
    super(viewInstance);
  }

  Filtersonpopularity() {
    const setupFilter = (buttonId, sortOrder) => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener("click", () => {
          let sortedData;

          if (sortOrder === "most") {
            sortedData = this.data.sort(
              (a, b) => b.rating.count - a.rating.count
            );
          } else if (sortOrder === "less") {
            sortedData = this.data.sort(
              (a, b) => a.rating.count - b.rating.count
            );
          }

          this.view.displayData(sortedData);
        });
      } else {
        console.error(`Button with ID "${buttonId}" not found.`);
      }
    };

    setupFilter("mostpopular", "most");
    setupFilter("lesspopular", "less");
  }
}

const viewInstance = new view();
const filterController = new Filter(viewInstance);
const searchInstance = new Search(viewInstance);

const popularityInstance = new Filterpopularity(viewInstance);

popularityInstance.fetchData().then(() => {
  popularityInstance.Filtersonpopularity();
});

searchInstance.fetchData().then(() => {
  searchInstance.initializeSearch();
});

filterController.fetchData().then(() => {
  filterController.initializeFilters();
});
