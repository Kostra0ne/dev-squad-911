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


// HTMLCollection
const firstButtonRow = document.getElementById("first-buttons-row");
const allButtons = document.getElementsByTagName("button");
const firstRowButtons =  firstButtonRow.getElementsByTagName("button");
const btnCollection = document.getElementsByClassName("btn");

console.log("all buttons >", allButtons);
console.log("btnCollection >", btnCollection);



const firstHacker = document.getElementById("first-hacker");
const lastHacker = document.getElementById("last-hacker");

console.log(firstHacker.nextElementSibling.nextElementSibling);
console.log(lastHacker.previousElementSibling);




// console.log(lastHacker.parentElement.parentElement);

// NodeList

// document.querySelector
