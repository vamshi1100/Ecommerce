export class view {
  constructor() {}
  displayData(data) {
    let container = document.getElementById("sub1");
    container.innerHTML = "";

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

      let a = document.createElement("a");
      a.href = `product.html?id=${elem.id}`;

      a.appendChild(img);

      // Append the anchor to the imgDiv
      imgDiv.appendChild(a);

      const priceDiv = document.createElement("div");
      priceDiv.id = "price";
      priceDiv.textContent = `price: ${elem.price}`;

      const ratingDiv = document.createElement("div");
      ratingDiv.id = "rating";
      ratingDiv.textContent = `rating: ${elem.rating.rate} count: ${elem.rating.count}`;

      item.append(idDiv, titleDiv, imgDiv, priceDiv, ratingDiv);

      container.appendChild(item);
    });
  }
}
