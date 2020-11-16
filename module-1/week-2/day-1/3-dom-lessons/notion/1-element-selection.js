// Element
// document.getElementById

const titleOne = document.getElementById("title-one");

console.log(typeof titleOne, titleOne);
console.log(titleOne.id);

titleOne.style.color = "dodgerblue";
titleOne.textContent = "DOM is awesome !";

const user = {
  name: "Bill",
};

titleOne.innerHTML = `<span>User name</span> : <b>${user.name}</b>`;

// document.querySelector

const btn1 = document.querySelector(".btn"); // try to find the first tag matching this selector (the first element with class btn)
const btn2 = document.querySelector(".btn:nth-child(2)"); // try to find the first tag matching this selector (the second element with class btn)

console.log(btn1);

const allBtns = document.querySelectorAll(".btn"); // fetch all the elements matching this select (all element with hacker)

console.log("-------");
console.log(allBtns);

allBtns.forEach((btn, index) => {
  console.log("--->", index);
  console.log(btn);
});

// fetch all hackers
// loop throug the list with a foreach OR for loop
// display each element's textContent (Liz, Bill, Joe)

const hackers = document.getElementById("ironhackers");
const allHackers = document.querySelectorAll("#ironhackers .hacker");

console.log(allHackers); // all : the full list

for (let i = 0; i < allHackers.length; i++) {
  console.log(allHackers[i].textContent); // each element in the allHackers list
}

console.log("-----");

allHackers.forEach(function (hacker) {
  // console.log(typeof hacker);
  console.log(hacker.textContent);
});

console.log(hackers.children);

Array.from(hackers.children).forEach((hacker) => {
  console.log(hacker);
});

[...hackers.children].forEach((hacker) => {
  console.log(hacker);
});

// console.log(hackers.children);

// HTMLCollection
const firstButtonRow = document.getElementById("first-buttons-row");
const allButtons = document.getElementsByTagName("button");
const firstRowButtons =  firstButtonRow.getElementsByTagName("button");
console.log("all buttons >", allButtons);
// document.getElementsByClassName
// document.getElementsByTagName


const firstHacker = document.getElementById("first-hacker");
const lastHacker = document.getElementById("last-hacker");

console.log(firstHacker.nextElementSibling.nextElementSibling);
console.log(lastHacker.previousElementSibling);




// console.log(lastHacker.parentElement.parentElement);

// NodeList

// document.querySelector
