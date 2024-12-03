import { SignupView } from "../view/signupview.js";
import { Model } from "../model/signupmodel.js";

const signupViewInstance = new SignupView();
const modelInstance = new Model();

export class Signup {
  constructor() {
    document.getElementById("formdata").addEventListener("submit", (event) => {
      event.preventDefault();
      this.storeFormData();
    });
  }

  storeFormData() {
    const { username, password, email, phone } =
      signupViewInstance.captureFormValues();

    modelInstance.saveData(username, password, email, phone);

    alert("Data stored successfully in localStorage!");
  }
}

// Instantiate the Signup class
new Signup();
