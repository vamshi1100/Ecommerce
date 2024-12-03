import { productcontroller } from "../controller/product.js";

export class productview {
  displayproduct(data) {
    console.log(data);

    let idelem = document.getElementById("productid");
    let idh1 = document.createElement("h1");
    idh1.innerText = `Product ID: ${data.id}`;
    idelem.appendChild(idh1);

    let titleelem = document.getElementById("title");
    let titleh1 = document.createElement("h1");
    titleh1.innerText = `Title: ${data.title}`;
    titleelem.appendChild(titleh1);

    let imageElem = document.getElementById("image");
    const img = document.createElement("img");
    img.src = data.image;
    img.alt = data.title;
    img.style.maxWidth = "200px";
    imageElem.appendChild(img);

    let cart = document.getElementById("cart");
    let carta = document.createElement("a");
    carta.id = "carta";
    let cartbtn = document.createElement("button");
    cartbtn.innerText = "ADD TO CART";
    cartbtn.id = "cartbtn";
    carta.appendChild(cartbtn);
    cart.appendChild(carta);

    let cart1 = document.getElementById("cart");
    let carta1 = document.createElement("a");
    carta1.id = "carta1";
    carta1.href = "../html/cart.html";
    let cartbtn1 = document.createElement("button");
    cartbtn1.innerText = "GO TO CART";
    cartbtn1.id = "cartbtn1";
    carta1.appendChild(cartbtn1);
    cart1.appendChild(carta1);

    let pobj = new productcontroller();
    cartbtn.addEventListener("click", () => {
      console.log(`Product added to cart: ${data.id}`);
      pobj.saveproductdata(data.title, data.image);
    });

    let priceElem = document.getElementById("price");
    let priceh1 = document.createElement("h1");
    priceh1.innerText = `Price: $${data.price}`;
    priceElem.appendChild(priceh1);

    let ratingElem = document.getElementById("rating");
    let ratingh1 = document.createElement("h1");
    ratingh1.innerText = `Rating: ${data.rating.rate}`;
    ratingElem.appendChild(ratingh1);

    let countElem = document.getElementById("count");
    let counth1 = document.createElement("h1");
    counth1.innerText = `Count: ${data.rating.count}`;
    countElem.appendChild(counth1);

    let descriptionElem = document.getElementById("description");
    let descriptionh1 = document.createElement("p");
    descriptionh1.innerText = `Description: ${data.description}`;
    descriptionElem.appendChild(descriptionh1);
  }

  displaycartproduct(data) {
    console.log(data);

    data.forEach((item) => {
      let titleElem = document.getElementById("title1");
      let titleh1 = document.createElement("h1");
      titleh1.innerText = `Title: ${item.title}`;
      titleElem.appendChild(titleh1);

      let imageElem = document.getElementById("image2");
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
      img.style.maxWidth = "200px";
      imageElem.appendChild(img);

      let itemContainer = document.getElementById("item");
      let itemDiv = document.createElement("div");
      itemDiv.appendChild(img);
      itemDiv.appendChild(titleh1);
      itemContainer.appendChild(itemDiv);
    });
  }
}
