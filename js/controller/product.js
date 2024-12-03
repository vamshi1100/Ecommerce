import { productview } from "../view/productview.js";
import { ProductCartModel } from "../model/productmodel.js";
export class productcontroller {
  constructor() {}
  fetchproductdata() {
    let productviewobj = new productview();
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const productId = new URLSearchParams(url.search).get("id");
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
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

  saveproductdata(title, image) {
    let productCartModelObj = new ProductCartModel();
    console.log(productCartModelObj.data);
    let data = { title: title, image: image };
    productCartModelObj.data = data;
  }

  cartproduct() {
    let productviewobj = new productview();
    let productCartModelObj = new ProductCartModel();
    productviewobj.displaycartproduct(productCartModelObj.data);
  }
}

const currentUrl = window.location.href;
const url = new URL(currentUrl);
const productId = new URLSearchParams(url.search).get("id");
let productcontrollerobj = new productcontroller();
if (productId) {
  productcontrollerobj.fetchproductdata();
} else {
  productcontrollerobj.cartproduct();
}
