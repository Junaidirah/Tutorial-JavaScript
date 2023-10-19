function Laptop(brand, color, prosesor, keyboard) {
  this.brand = brand;
  this.color = color;
  this.prosesor = prosesor;
  this.keyboard = keyboard;
}

Laptop.prototype.user = function () {
  console.log(
    ` ${this.brand} ${this.color}  ${this.prosesor}  ini spesifikasinya`
  );
};

Laptop.prototype.reverse = function () {
  console.log(` ${this.brand} ${this.color}  ${this.prosesor}  di reverse`);
};

const Laptop1 = new Laptop("macbook", "Silver", "m1pro", "to-1");
const Laptop2 = new Laptop("lenovo", "Black", "AMD", "ho-1");
const Laptop3 = new Laptop("samsung", "Red", "intel", "su-1");

console.log(Laptop1);
console.log(Laptop2);
console.log(Laptop3);

Laptop1.drive();
Laptop2.drive();
Laptop3.drive();
