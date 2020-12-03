require("dotenv").config();
require("./config/mongodb");

const express = require("express");
const hbs = require("hbs");
const app = express();


// sson enough, we'll replace those hardcoded with database's results !!!
const images = ["moss-1.jpg", "url.gif", "while-do-while.jpg"];

const users = [
  { name: "foo", email: "foo@foo.foo", favLang: "JS" },
  { name: "bar", email: "bar@bar.bar", favLang: "Go" },
  { name: "baz", email: "baz@baz.baz", favLang: "Rust" },
];

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home", { images });
});

app.get("/my-squad", (req, res) => {
  res.render("allUsers", { users });
});

app.get("/api/my-squad", (req, res) => {
  res.json(users);
});

app.get("/add-ironhacker", (req, res) => {
  res.render("addUser");
});

app.listen(process.env.PORT, () => {
  console.log("ok @ http://localhost:" + process.env.PORT);
});
