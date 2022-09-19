import randomProductCode from "./productCode.js";

export default class Product {
  constructor(name, quantity, cost) {
    this.code = randomProductCode();
    this.name = name;
    this.quantity = quantity;
    this.cost = cost;
  }
}
