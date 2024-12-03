export class UnifiedFilter {
  constructor(viewInstance) {
    this.view = viewInstance;
    this.data = [];
  }

  fetchData(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((responsedata) => {
        this.data = responsedata.slice(0, 10);
        this.view.displayData(this.data);
      })
      .catch((error) => console.error("Error:", error));
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

  initializeSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filteredData = this.data.filter((item) =>
        item.title.toLowerCase().includes(query)
      );

      this.view.displayData(filteredData);
    });
  }

  initializePopularityFilters() {
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
