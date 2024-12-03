import { Model } from "../model/signupmodel.js";

class Login {
  constructor() {
    // Create an instance of Model to access the data
    this.model = new Model();

    document.getElementById("loginForm").addEventListener("submit", (event) => {
      event.preventDefault();
      this.verifyLogin();
    });
  }

  getelem(id) {
    return document.getElementById(id).value;
  }

  verifyLogin() {
    const username = this.getelem("username");
    const password = this.getelem("password");

    const users = this.model.data;
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
}

// Instantiate the Login class
new Login();
