import { productview } from "../view/productview.js";
import { ProductCartModel } from "../model/productmodel.js";
export class productcontroller {
  constructor() {
    this.ProductCartModel = new ProductCartModel();
  }
  async fetchproductdata() {
    let productviewobj = new productview();
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const productId = new URLSearchParams(url.search).get("id");
    if (productId) {
      await fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((resp) => resp.json())
        .then((data) => {
          productviewobj.displayproduct(data);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    } else {
      console.log("Product ID not found in the query string");
    }
  }

  /**************/
  saveproductdata(title, image, price) {
    let productCartModelObj = new ProductCartModel();
    console.log(productCartModelObj.data);
    let data = { title: title, image: image, price: price };
    productCartModelObj.data = data;
  }

  cartproduct() {
    let productviewobj = new productview();
    let productCartModelObj = new ProductCartModel();
    productviewobj.displaycartproduct(productCartModelObj.data);
  }

  /**************/
  cartamount() {
    let carttotal = document.getElementById("carttotal");
    let sum = 0;
    this.ProductCartModel.data.forEach((element) => {
      sum = sum + element.price;
    });
    try {
      carttotal.innerText = `Total : ${sum}`;
      console.log(sum);
    } catch (err) {
      console.log(err);
    }
  }
}

const currentUrl = window.location.href;
const url = new URL(currentUrl);
const productId = new URLSearchParams(url.search).get("id");
let productcontrollerobj = new productcontroller();
productcontrollerobj.cartamount();
if (productId) {
  productcontrollerobj.fetchproductdata();
} else {
  productcontrollerobj.cartproduct();
}
