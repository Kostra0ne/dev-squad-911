require("dotenv").config();

const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
// // new stuff : )
// view-partials are tiny reusable bits of html 
// you can see those as page components
// D.R.Y => DONT REPEAT YOURSELF
hbs.registerPartials(__dirname + "/views/partials"); // where are my view partials ?

app.get("/", (req, res) => {
  res.render("home", {
    rockstars: ["Jimmy Hendricks", "Papa Wemba"]
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    employees: ["jill", "bill", "chill"],
  });
});

app.get(`/api/v${process.env.API_VERSION}/users`, (req, res) => {
  res.json(["jill", "kill", "will"]);
});

app.listen(process.env.PORT, () => {
  console.log(
    "hey hey hey ready to code & http://localhost:" + process.env.PORT
  );
});
