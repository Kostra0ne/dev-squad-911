// const collection = document.getElementsByClassName("price");
const productsPrices = document.querySelectorAll("#products .price");

// console.log([...collection].forEach);

// console.log(productsPrices.reduce);

// productsPrices.forEach((el) => {
//   console.log(el);
// });

const prices = [...productsPrices].map((el) => {
  return Number(el.textContent);
});

const sum = prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

const sum2 = [...productsPrices]
  .map((el) => Number(el.textContent))
  .reduce((acc, currentValue) => acc + currentValue);

console.log("sum of products prices > ", sum2);
