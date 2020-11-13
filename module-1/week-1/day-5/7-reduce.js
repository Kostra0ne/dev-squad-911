const numbers = [1, 1, 1, 10, 20];

const products = [
  { name: "smartphone", price: 400 },
  { name: "computer", price: 1000 },
  { name: "gps", price: 100 },
];

// HOF : reduce !
// swiss army knife of the HOFs

const sum = numbers.reduce(function (acc, currentValue) {
  acc += currentValue;
  return acc;
}, 0);

console.log("sum : ", sum);


const startingArray = ["tablet"];

function keepOnlyProductName(acc, product) {
  acc.push(product.name);
  return acc;
}

// const keepOnlyProductName = (acc, product) => {
//   acc.push(product.name);
//   return acc;
// }

const prodNames = products.reduce(keepOnlyProductName, startingArray);

console.log("sum : ", prodNames);
