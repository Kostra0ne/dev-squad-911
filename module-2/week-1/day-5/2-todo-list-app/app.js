require("dotenv").config();
require("./config/database");

const express = require("express");
const hbs = require("hbs");
const app = express();

// setup
// file allowed for browser download
app.use(express.static(__dirname + "/public"));
// accept incoming post values and expose the in req.body
app.use(express.urlencoded());
// view engine setup
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// let's code a  C.R.U.D APPLICATION
// route for the homepage
app.get("/", (req, res) => {
  res.send("todo list app");
});

app.listen(process.env.PORT, () => {
  console.log("http://localhost:" + process.env.PORT);
});
