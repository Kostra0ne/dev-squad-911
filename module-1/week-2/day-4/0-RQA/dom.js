const parentEl = document.getElementById("target");

const childObject1 = document.createElement("p");
const childObject2 = document.createElement("p");

childObject1.innerHTML = "<span>hello, world</span>";
childObject2.textContent = "child 2";
childObject2.innerHTML += "... ohhoo child";

document.querySelector("body").appendChild(childObject1);
document.getElementById("target").appendChild(childObject2);
// document.querySelector("body").appendChild(document.createElement("p"));

// setTimeout(() => {
//     parentEl.removeChild(childObject2);
//     childObject1.remove();
//     parentEl.remove()
//     // parentEl.parentElement.removeChild(parentEl);
// }, 2000);

const cssCheck = childObject2.classList.contains("is-active"); // true or false

if (cssCheck === true) {
  // childObject2 has the css class is active
  childObject2.classList.remove("is-active");
} else {
  childObject2.classList.add("is-active");
}

const goods = [
  { name: "pan", price: 20 },
  { name: "seat", price: 300000 },
  { name: "seat", price: 30 },
  { name: "car", price: 10000 },
];

function getHighestPrice(products) {
  // sort the products by price descending and return the most expensive price
  return products.sort((pa, pb) => pb.price - pa.price)[0].price;
}

document.querySelector("#price span").textContent = getHighestPrice(goods);
