// Code along : create a simple todo list ( with events and innerHTML )

console.log("code along");

// 1 - fetch the input #input-todo-list
const inputTodo = document.getElementById("input-todo-list");
// 2 - fetch the button #btn-add-todo
const btnTodo = document.getElementById("btn-add-todo");
// 3 - fetch the ul #todos
const ulTodos = document.getElementById("todos");

console.log(inputTodo, btnTodo, ulTodos);

// 4 - listen to clicks on the button : when clicked trigger a callback function

const handleClick = function () {
  if (inputTodo.value.length === 0) return;

  if (
    ulTodos.children[0].textContent === "nothing to do... yet"
  ) {
    ulTodos.innerHTML = "";
  }

  ulTodos.innerHTML += `<li>${inputTodo.value}</li>`;
  inputTodo.value = ""; // reset the input's value to empty content
  inputTodo.focus(); // will gove focus back to the input
};

btnTodo.addEventListener("click", handleClick);

// 5 - in the callback,
// -- use the input.value and the ul.innerHTML properties
// -- to insert a new li in the list, with the input's value as li's text content
