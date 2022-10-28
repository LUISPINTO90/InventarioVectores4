export default class Inventory {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  searchProduct(code) {
    let current = this.head;

    while (current) {
      if (current.code == code) {
        return current;
      }
      current = current.next;
    }

    return false;
  }

  addProduct(product) {
    if (this.searchProduct(product.code)) {
      return false;
    } else {
      if (!this.head) {
        this.head = product;
        this.tail = product;
      } else {
        let current = this.head;

        while (current) {
          if (current.code > product.code) {
            if (current.previous) {
              current.previous.next = product;
              product.previous = current.previous;
              current.previous = product;
              product.next = current;
            } else {
              current.previous = product;
              product.next = current;
              this.head = product;
            }
            break;
          } else if (current === this.tail) {
            current.next = product;
            product.previous = current;
            this.tail = product;
            break;
          }

          current = current.next;
        }
      }

      return true;
    }
  }

  deleteProduct(code) {
    if (this.searchProduct(code)) {
      let current = this.head;

      while (current) {
        if (current.code == code) {
          if (current.previous) {
            current.previous.next = current.next;
          } else {
            this.head = current.next;
          }

          if (current.next) {
            current.next.previous = current.previous;
          } else {
            this.tail = current.previous;
          }
          break;
        }

        current = current.next;
      }
      return true;
    } else {
      return false;
    }
  }

  showNormalList() {
    let current = this.head;
    let list = "";

    if (this.head != null) {
      while (current) {
        list += current.getDetails();
        current = current.next;
      }
      return list;
    } else {
      return false;
    }
  }

  showInverseList() {
    let current = this.tail;
    let list = "";

    if (this.head != null) {
      while (current) {
        list += current.getDetails();
        current = current.previous;
      }
      return list;
    } else {
      return false;
    }
  }
}
