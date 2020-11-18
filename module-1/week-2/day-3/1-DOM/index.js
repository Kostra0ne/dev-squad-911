console.log("hello");

// DOM ELEMENTS
const widget = document.getElementById("code-along-2");
const btn = widget.querySelector(".btn");
const input = widget.querySelector(".input");
const list = widget.querySelector(".list");

// VALUES STORE
const stringValues = ["foo", "bar", "baz", "toto", "tutu", "tata"];

// READ INPUT VALUE
function readInput() {
  return input.value;
}

// CHECK IF VALUE IS TRUTHY
function checkValue(val) {
  return Boolean(val);
}

// PUSH VALUE IN ARRAY
function pushValue(str) {
  stringValues.push(str);
}

// DRAW FULL LIST
function drawFullList() {
  stringValues.forEach((str) => {
    appendLi(str);
  });
}

function handleItemRemove(evt) {
  list.removeChild(evt.target.parentElement);
}

// APPEND LI LIST
function appendLi(info) {
  const li = document.createElement("li");
  li.textContent = info;
  const button = document.createElement("button");
  button.textContent = "x";
  button.addEventListener("click", handleItemRemove);

  li.appendChild(button); // add the button to the li
  list.appendChild(li); // add li to the ol
}

// INITIALIZE THE LIST
drawFullList();

// EVENT LISTEN => HANDLE

btn.onclick = function () {
  const value = readInput();

  if (checkValue(value)) {
    pushValue(value);
    appendLi(value);

    // console.log(list.children);
    // console.log(stringValues);
  }
};
