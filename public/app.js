import Product from "../src/product.js";
import Inventory from "../src/inventory.js";

let inventory = new Inventory();

//  DOM EVENTS
let actions = document.getElementById("actionsAndSearchesList");

//  Add Product
document.getElementById("btnAddElement").addEventListener("click", () => {
  let productName = document.getElementById("productName").value;
  let productQuantity = document.getElementById("productQuantity").value;
  let productCost = document.getElementById("productCost").value;

  if (productName == "" || productQuantity == "" || productCost == "") {
    Swal.fire({
      customClass: {
        confirmButton: "swalBtnColor",
      },
      title: "ERROR",
      text: "Ingresa los campos correctamente",
      icon: "error",
    });
  } else {
    let product = new Product(productName, productQuantity, productCost);

    inventory.addProduct(product);

    actions.innerHTML += `
      <div class="card">
        <p>Se ha <b>AGREGADO</b> un producto</p>
      </div>
    `;

    document.getElementById("formAdd").reset();
  }
});

//  Modify Product

//  Delete Product
document.getElementById("btnDelElement").addEventListener("click", () => {
  let productList = document.getElementById("productList");
  let productCodeToDelete = document.getElementById(
    "productCodeToDelete"
  ).value;

  if (productCodeToDelete == "" || productList.innerHTML == "") {
    Swal.fire({
      customClass: {
        confirmButton: "swalBtnColor",
      },
      title: "ERROR",
      text: "Ingresa los campos correctamente",
      icon: "error",
    });
  } else {
    actions.innerHTML += `
      <div class="card">
        <p>Se ha <b>ELIMINADO</b> un producto</p>
      </div>
    `;

    inventory.deleteProduct(productCodeToDelete);

    document.getElementById("formDelete").reset();
  }
});

//  Search Product
document.getElementById("btnSearchElement").addEventListener("click", () => {
  let productList = document.getElementById("productList");
  let productCodeToSearch = document.getElementById(
    "productCodeToSearch"
  ).value;

  if (productCodeToSearch == "" || productList.innerHTML == "") {
    Swal.fire({
      customClass: {
        confirmButton: "swalBtnColor",
      },
      title: "ERROR",
      text: "Ingresa los campos correctamente",
      icon: "error",
    });
  } else {
    actions.innerHTML += `
    <div class="card">
      <p>Se ha <b>BUSCADO</b> un producto</p>
    </div>
  `;

    inventory.searchProduct(productCodeToSearch);

    document.getElementById("formSearch").reset();
  }
});

//  Show Normal List
document.getElementById("btnNormalList").addEventListener("click", () => {
  let productList = document.getElementById("productList");

  productList.innerHTML = inventory.showNormalList();

  if (productList.innerHTML == "") {
    Swal.fire({
      customClass: {
        confirmButton: "swalBtnColor",
      },
      title: "OJO!",
      text: "La lista de productos esta vacia",
      icon: "warning",
    });
  }

  actions.innerHTML += `
      <div class="card">
        <p>Se han <b>LISTADO</b> los productos del Inventario</p>
      </div>
    `;
});

//  Show Inverse List
document.getElementById("btnReverseList").addEventListener("click", () => {
  let productList = document.getElementById("productList");

  productList.innerHTML = inventory.showInverseList();

  if (productList.innerHTML == "") {
    Swal.fire({
      customClass: {
        confirmButton: "swalBtnColor",
      },
      title: "OJO!",
      text: "La lista de productos esta vacia o necesita mas de 1 elemento",
      icon: "warning",
    });
  }

  actions.innerHTML += `
      <div class="card">
        <p>Se han <b>LISTADO de forma INVERSA</b> los productos del Inventario</p>
      </div>
    `;
});
