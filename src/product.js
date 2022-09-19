import randomProductCode from "./productCode.js";

export default class Product {
  constructor(name, quantity, cost) {
    this.code = randomProductCode();
    this.name = name;
    this.quantity = quantity;
    this.cost = cost;
  }

  getCode() {
    return this.code;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getQuantity() {
    return this.quantity;
  }
  setQuantity(quantity) {
    this.quantity = quantity;
  }

  getCost() {
    return this.cost;
  }
  setCost(cost) {
    this.cost = cost;
  }
}
