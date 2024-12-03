export class ProductCartModel {
  constructor() {
    this.productarr = [];
  }
  get data() {
    return JSON.parse(localStorage.getItem("product") || "[]");
  }
  set data(value) {
    this.productarr = this.data;
    this.productarr.push(value);
    localStorage.setItem("product", JSON.stringify(this.productarr));
  }
}
