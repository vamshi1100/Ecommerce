import { ProductCartModel } from "../model/productmodel.js";

export class UnifiedFilter {
  constructor(viewInstance) {
    this.view = viewInstance;
    this.data = [];
    this.productCartModelObj = new ProductCartModel();
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

  initializeRateFilter() {
    const rateFilter = document.getElementById("rateFilter");
    rateFilter.addEventListener("change", () => {
      const selectedOption = rateFilter.value;
      let filteredData;

      switch (selectedOption) {
        case "g50":
          filteredData = this.data.filter((item) => item.price > 50);
          break;
        case "l100":
          filteredData = this.data.filter((item) => item.price < 100);
          break;
        case "btw50_500":
          filteredData = this.data.filter(
            (item) => item.price > 50 && item.price < 500
          );
          break;
        default:
          filteredData = this.data;
      }

      this.view.displayData(filteredData);
    });
  }

  initializePopularityFilter() {
    const popularityFilter = document.getElementById("popularityFilter");
    popularityFilter.addEventListener("change", () => {
      const selectedOption = popularityFilter.value;
      let sortedData;

      if (selectedOption === "mostpopular") {
        sortedData = [...this.data].sort(
          (a, b) => b.rating.count - a.rating.count
        );
      } else if (selectedOption === "lesspopular") {
        sortedData = [...this.data].sort(
          (a, b) => a.rating.count - b.rating.count
        );
      } else {
        sortedData = this.data;
      }

      this.view.displayData(sortedData);
    });
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

  initializeFilters() {
    this.initializeRateFilter();
    this.initializePopularityFilter();
  }

  addToLocalStorage(product) {
    this.productCartModelObj.data = product;
    console.log("Product added to local storage:", product);
    this.count();
  }

  addtocart = (elem) => {
    this.addToLocalStorage(elem);
    alert(`${elem.title} has been added to your cart!`);
  };

  count() {
    let cartcount = document.getElementById("cartcount");
    let elems = this.productCartModelObj.data;
    let countnos = 0;

    elems.forEach(() => {
      countnos++;
    });

    cartcount.innerText = `Go To Cart (${countnos})`;
  }
}
