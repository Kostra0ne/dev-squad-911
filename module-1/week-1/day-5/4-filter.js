const fruits = ["apple", "apple", "banana", "peach", "pear"];

// HOF => Higher Order Function
// will loop through all the array's values
// return a brand new array, containing only the values that  passed the provided test
// the test you provide in the callback function should return a boolean

const filteredFruits = fruits.filter(function (fruit) {
  return fruit !== "apple"; // keep any fruit that's not an apple
});

const onlyApples = fruits.filter(function (fruit, index, allFruits) {
  //   return fruit === "apple";
  // console.log(allFruits.indexOf(fruit));
  //   return allFruits.indexOf(fruit) !== -1
});

const noApplesThere = fruits.filter((fruit) => fruit !== "apple");

console.log("onlyApples : ", onlyApples);

console.log("noApplesThere : ", noApplesThere);

const numbers = [1, 20, 50, 100, 1000, -50];

// filter this array to keep only the values that >= 100

const filteredNumbers = numbers.filter(function (nb) {
  return nb >= 100;
});

const filteredNumbers2 = numbers.filter((nb) => nb >= 100);

console.log(filteredNumbers2);

const equation = 1000 >= 100;

const products = [
  { name: "pan", price: 20 },
  { name: "seat", price: 30 },
  { name: "car", price: 20000 },
];

// keep only the products with a price less than 1000

const cheapProducts = products.filter(function (prod) {
  return prod.price > 1000;
});


console.log("cheapProducts > ", cheapProducts);