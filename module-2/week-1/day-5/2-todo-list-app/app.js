require("dotenv").config();
require("./config/database");

const express = require("express");
const hbs = require("hbs");
const app = express();
const TodoModel = require("./models/Todo");

// setup
// file allowed for browser download
app.use(express.static(__dirname + "/public"));
// accept incoming post values and expose the in req.body
app.use(express.urlencoded({ extended: true }));
// view engine setup
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// let's code a  C.R.U.D APPLICATION

// create todo for the todo list
// read all todos
// delete one todo
// (update one todo)

// route for the homepage
app.get("/", async (req, res) => {
  const todos = await TodoModel.find();
  res.render("todo", { todos });
});

app.post("/todo", async (req, res) => {
  try {
    await TodoModel.create(req.body);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.get("/todo/edit/:id", async (req, res) => {
  const todoToEdit = await TodoModel.findOne({ _id: req.params.id });
  res.render("formEditTodo", todoToEdit);
});

app.post("/todo/edit/:id", async (req, res) => {
  try {
    await TodoModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/todo/delete/:id", async (req, res) => {
  try {
    await TodoModel.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
  res.send("work-in-progress");
});

app.listen(process.env.PORT, () => {
  console.log("http://localhost:" + process.env.PORT);
});
