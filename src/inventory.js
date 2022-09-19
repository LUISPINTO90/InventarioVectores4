export default class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    Swal.fire({
      customClass: {
        confirmButton: "swalBtnColor",
      },
      title: "AGREGADO CORRECTAMENTE",
      icon: "success",
    });
  }

  showNormalList() {
    let component = "";

    for (let i = 0; i <= this.products.length - 1; i++) {
      component += `
        <section class="cardProduct">
          <p>C&oacute;digo: ${this.products[i].code}<br>
          Nombre: ${this.products[i].name}<br>
          Cantidad: ${this.products[i].quantity}<br>
          Costo: $${this.products[i].cost}</p>
        </section>
      `;
    }

    return component;
  }

  showInverseList() {
    let component = "";
    let inverseProducts = [];

    for (let i = this.products.length - 1; i >= 0; i--) {
      inverseProducts.push(this.products[i]);
    }

    if (inverseProducts.length > 1) {
      for (let i = 0; i <= inverseProducts.length - 1; i++) {
        component += `
          <section class="cardProduct">
            <p>C&oacute;digo: ${inverseProducts[i].code}<br>
            Nombre: ${inverseProducts[i].name}<br>
            Cantidad: ${inverseProducts[i].quantity}<br>
            Costo: $${inverseProducts[i].cost}</p>
          </section>
        `;
      }
    }

    return component;
  }

  deleteProduct(productCode) {
    for (let i = 0; i <= this.products.length; i++) {
      if (productCode === this.products[i].code) {
        for (let j = i; j < this.products.length - 1; j++) {
          this.products[j] = this.products[j + 1];
        }

        this.products.pop();
        Swal.fire({
          customClass: {
            confirmButton: "swalBtnColor",
          },
          title: "ELIMINADO CORRECTAMENTE",
          icon: "success",
        });
      }
    }
  }

  searchProduct(productCode) {
    for (let i = 0; i <= this.products.length; i++) {
      if (productCode === this.products[i].code) {
        Swal.fire({
          customClass: {
            confirmButton: "swalBtnColor",
          },
          title: "Producto",
          text: `CODIGO: ${this.products[i].code}, PRODUCTO: ${this.products[i].name}, CANTIDAD: ${this.products[i].quantity}, COSTO: ${this.products[i].cost} `,
          icon: "info",
        });
      }
    }
  }
}
