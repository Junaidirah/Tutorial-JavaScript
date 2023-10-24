/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Tulis kode di bawah ini
class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}
class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true);
  }
  eat() {
    console.log(`${this.name} sedang makan!`);
  }
}

class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false);
  }
  fly() {
    console.log(`"${this.name} sedang terbang!"`);
  }
}
console.log("\n Rabbit ");
const myRabbit = new Rabbit("Labi", 2);
console.log("Nama:", myRabbit.name);
console.log("Usia:", myRabbit.age);
console.log("Is Mammal:", myRabbit.isMammal);
console.log(myRabbit.eat()); // Memanggil method eat

console.log("\n Eangle ");
const myEagle = new Eagle("Elo", 4);
console.log("Nama:", myEagle.name);
console.log("Usia:", myEagle.age);
console.log("Is Mammal:", myEagle.isMammal);
console.log(myEagle.fly());
