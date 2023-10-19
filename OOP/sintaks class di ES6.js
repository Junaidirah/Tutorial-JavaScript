class Laptop {
  constructor(brand, color, prosesor) {
    this.brand = brand;
    this.color = color;
    this.prosesor = prosesor;
  }

  user() {
    console.log(`${this.brand}${this.color} ${this.prosesor} that user`);
  }
  buy() {
    console.log(`${this.brand}${this.color} ${this.prosesor} is buy`);
  }
}

//membuat iobjek Laptop dengan constuctor function Laptop

const Laptop1 = new Laptop(`samsung\t:`, `silver`, `AMD ryzen 5`);
const Laptop2 = new Laptop(`lenovo \t:`, `black`, `AMD ryzen 7`);
const Laptop3 = new Laptop(`Asus \t:`, `white`, `AMD ryzen 3`);

console.log(Laptop1);
console.log(Laptop2);
console.log(Laptop3);

Laptop1.user();
Laptop2.user();
Laptop3.user();
