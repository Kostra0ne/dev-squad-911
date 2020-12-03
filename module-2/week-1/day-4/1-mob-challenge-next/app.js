require("dotenv").config();
require("./config/mongodb");

const express = require("express");
const hbs = require("hbs");
const app = express();
const UserModel = require("./models/User");

// sson enough, we'll replace those hardcoded with database's results !!!
const images = ["moss-1.jpg", "url.gif", "while-do-while.jpg"];


app.use(express.urlencoded()); // add the posted value in req.body
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home", { images });
});

app.get("/my-squad", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.render("allUsers", { users });
  } catch (err) {
    console.error(err);
    res.send("an error occured ... :/");
  }
});

app.get("/api/my-squad", (req, res) => {
  res.json(users);
});

app.get("/add-ironhacker", (req, res) => {
  res.render("addUser");
});

app.post("/add-ironhacker", async (req, res) => {
  console.log(req.body);
  // 1 insert the doc in db
  // 2 redirect to the user list
  try {
    await UserModel.create(req.body);
    res.redirect("/my-squad");
  } catch(err) {
    console.log(err);
    res.send("an error occured ...")
  }

});

app.listen(process.env.PORT, () => {
  console.log("ok @ http://localhost:" + process.env.PORT);
});
