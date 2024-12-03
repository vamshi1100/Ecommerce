export class Model {
  constructor() {}

  get data() {
    return JSON.parse(localStorage.getItem("formDataArray")) || [];
  }

  set data(value) {
    localStorage.setItem("formDataArray", JSON.stringify(value));
  }

  saveData(username, password, email, phone) {
    const formData = { username, password, email, phone };

    this.data = [...this.data, formData];
  }
}
