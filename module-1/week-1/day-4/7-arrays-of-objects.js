const sneaker1 = {
  name: "Jordan 4",
  price: 220,
  colors: ["black", "red"],
  ref: "JODKBQDNKNALDJO",
  brand: "Nike",
};

const sneaker2 = {
  name: "Superstar",
  price: 100,
  colors: ["white", "black"],
  ref: "JQDUGUBZDODNONX",
  brand: "Adidas",
};

const sneakers3 = {
  name: "Clyde",
  price: 80,
  colors: ["green", "black"],
  ref: "LSKSZASB01010E",
  brand: "Puma",
};

const sneakers4 = {
  name: "Foo",
  price: 80,
  colors: ["grey", "black"],
  ref: "HSK2?SS29Z9D9",
  brand: "Bar",
};

const sneakers = [sneaker1, sneaker2, sneakers3, sneakers4];

// console.log(sneakers);

// console.log( sneakers[1].price, sneakers[2].brand )

// console.log(  sneakers[ sneakers.length - 1 ].price  );

for (let i = 0; i < sneakers.length; i++) {
  console.log(`--${i}--`);
  console.log("brand : ", sneakers[i].brand);
  console.log("name : ", sneakers[i].name);
  console.log("price : ", sneakers[i].price);
  // const copy = { ...sneakers[i] };
  // copy.price = -1;
}

// console.log(sneakers);
