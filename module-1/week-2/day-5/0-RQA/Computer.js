class Computer {
  constructor(brand, price) {
    this.brand = brand || "fake brand";
    this.price = price;
    this.stock = 0;
  }

  addToStock(amount) {
    this.stock += amount;
  }
}

const laptop = new Computer("alienware", 2000);
const desktop = new Computer("dell", 3000);
const defaultComputer = new Computer(null, 3000);

console.log(laptop);
// console.log(desktop);
console.log(defaultComputer);

laptop.addToStock(0);
defaultComputer.addToStock(1000);

console.log(laptop);
console.log(defaultComputer);