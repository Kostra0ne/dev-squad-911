const pet = {
  name: "kitty",
  species: "cat",
  age: 8,
};

// for...in is designed to loop through pobject literals

// for (let key in pet) {
//   console.log("key =>", key);
//   console.log("value =>", pet[key]);
//   console.log("-----");
// }

const product = {
  type: "computer",
  brand: "dell",
  price: 1399,
  formFactor: "laptop",
};

// console.log(product.brand);
// console.log(product["brand"]);

// for (let property in product) {
//   console.log(product[property]);
//   console.log("---");
// }

const receipe = {
  name: "houmous",
  ingredients: ["chick peas", "olive oil", "zatar", "garlic", "salt", "tahini"],
  origin: "levant",
};

for (let key in receipe) {
  console.log(receipe[key]);
}
