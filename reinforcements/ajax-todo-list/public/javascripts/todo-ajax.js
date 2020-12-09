const btnCreate = document.getElementById("btn-create");
const btnClear = document.getElementById("btn-clear");
const list = document.getElementById("todos");
const taskInput = document.getElementById("task");

const service = axios.create({
  baseURL: "http://localhost:3000",
});

console.log("hey");
console.log(service.get);
console.log(service.post);

// SERVER EXCHANGES

async function getTodos(callback) {
  try {
    const res = await service.get("/todos");
    callback(res.data);
  } catch (err) {
    console.error(err);
  }
}

async function createTodo(callback) {
  if (taskInput.value === "") return;
  try {
    await service.post("/todos", {
      task: taskInput.value,
      status: false,
    });
    getTodos(callback);
  } catch (err) {
    console.error(err);
  }
}

async function deleteTodo(evt, callback) {
    const id = evt.target.getAttribute("data-todo-id");
    try {
        await service.delete("/todos/" + id);
        getTodos(callback);
      } catch (err) {
        console.error(err);
      }
}

function updateTodo() {}

// DOM LOGIC
function displayTodo(todosObjects) {
  list.innerHTML = "";
  todosObjects.forEach((todo) => {
    list.innerHTML += `<li class="todo">
            <span>
                <i class="far ${
                  todo.status === true ? "fa-check-square" : "fa-square"
                }"></i>
                <span>${todo.task}</span>
            </span>
            <span class="btns">
                <button data-todo-id="${todo._id}" class="btn remove">remove</button>
                <button class="btn">update</button>
            </span>
        </li>`;
  });
  const removeButtons = list.querySelectorAll(".btn.remove");
  console.log(removeButtons)
  removeButtons.forEach(btn => btn.onclick = (evt) => deleteTodo(evt, displayTodo));
  // listen to clicks on each remove button
}

// KICKSTART
getTodos(displayTodo);
btnCreate.onclick = () => createTodo(displayTodo);
