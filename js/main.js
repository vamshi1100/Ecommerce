import { UnifiedFilter } from "./controller/Filter.js";
import { view } from "./view/Filterview.js";

async function call() {
  try {
    const viewInstance = new view();
    const unifiedFilter = new UnifiedFilter(viewInstance);

    await unifiedFilter.fetchData("https://fakestoreapi.com/products");

    unifiedFilter.initializeFilters();
    unifiedFilter.initializeSearch();
    unifiedFilter.initializePopularityFilters();
  } catch (error) {
    console.error("Error during filter setup:", error);
  }
}

call();
