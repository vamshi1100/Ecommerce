// signupview.js
export class SignupView {
  constructor() {
    this.username = "";
    this.password = "";
    this.email = "";
    this.phone = "";
  }

  captureFormValues() {
    this.username = document.getElementById("username").value;
    this.password = document.getElementById("password").value;
    this.email = document.getElementById("email").value;
    this.phone = document.getElementById("phone").value;

    return {
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone,
    };
  }
}
