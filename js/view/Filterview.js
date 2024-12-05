import { UnifiedFilter } from "../controller/Filter.js";
import { ProductCartModel } from "../model/productmodel.js";

export class view {
  constructor() {
    this.UnifiedFilter = new UnifiedFilter();
    this.ProductCartModel = new ProductCartModel();
    this.cartCountButton = document.getElementById("cartcount");
  }

  displayData(data) {
    let container = document.getElementById("sub1");
    container.innerHTML = "";

    let items = this.ProductCartModel.data;
    const itemCount = {};
    items.forEach((item) => {
      if (itemCount[item.id]) {
        itemCount[item.id]++;
      } else {
        itemCount[item.id] = 1;
      }
    });

    data.slice(0, 10).forEach((elem) => {
      const item = document.createElement("div");
      item.id = "elems";

      const idDiv = document.createElement("div");
      idDiv.id = "userid";
      idDiv.textContent = `id: ${elem.id}`;

      const titleDiv = document.createElement("div");
      titleDiv.id = "title";
      titleDiv.textContent = `title: ${elem.title}`;

      const imgDiv = document.createElement("div");
      imgDiv.id = "img";

      const img = document.createElement("img");
      img.src = elem.image;
      img.alt = elem.title;
      img.style.maxWidth = "200px";

      const a = document.createElement("a");
      a.href = `product.html?id=${elem.id}`;
      a.appendChild(img);
      imgDiv.appendChild(a);

      const priceDiv = document.createElement("div");
      priceDiv.id = "price";
      priceDiv.textContent = `price: ${elem.price}`;

      const ratingDiv = document.createElement("div");
      ratingDiv.id = "rating";
      ratingDiv.textContent = `rating: ${elem.rating.rate} count: ${elem.rating.count}`;

      const buttonDiv = document.createElement("div");
      const btn = document.createElement("button");
      btn.id = "cartbtn";

      const individualCount = itemCount[elem.id] || 0;
      btn.textContent = `Add to Cart : ${individualCount}`;

      buttonDiv.appendChild(btn);

      btn.addEventListener("click", () => {
        this.UnifiedFilter.addtocart(elem);
        itemCount[elem.id] = (itemCount[elem.id] || 0) + 1;
        btn.textContent = `Add to Cart : ${itemCount[elem.id]}`;
        this.updateCartButton();
      });

      item.append(idDiv, titleDiv, imgDiv, priceDiv, ratingDiv, buttonDiv);
      container.appendChild(item);
    });

    this.updateCartButton();
  }

  updateCartButton() {
    const totalItems = this.ProductCartModel.data.length;
    this.cartCountButton.textContent = `Go To Cart (${totalItems})`;
  }
}
