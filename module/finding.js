// const coffeeStock = require("./state");

// console.log(coffeeStock);

const StockBook = require("./index");

const pinjam = (type, satuan) => {
  if (StockBook[type] >= satuan) {
    console.log("buku dapat dipinjam");
  } else {
    console.log("buku telah dipinjam!");
  }
};

pinjam("social", 200);
