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

// C.R.U.D (CREATE READ UPDATE DELETE)

app.get("/", (req, res) => {
  res.render("home", { images });
});

app.get("/my-squad", async (req, res) => {
  try {
    const users = await UserModel.find(); // this is a R (from C.R.U.D)
    res.render("allUsers", { users });
  } catch (err) {
    console.error(err);
    res.send("an error occured ... :/");
  }
});

// BONUS :)
app.get("/api/my-squad", async (req, res) => {
  try {
    res.json(await UserModel.find());
  } catch (err) {
    res.json(err);
  }
});

app.get("/add-ironhacker", (req, res) => {
  res.render("addUser");
});

app.get("/delete-ironhacker/:id", async (req, res) => {
  console.log(req.params, req.params.id);
  // this will extract vars out of the route itself
  // any route segment prefixed with ":" is added as a prop of req.params
  try {
    const deletedUser = await UserModel.findByIdAndRemove(req.params.id);
    console.log("deleted user ???", deletedUser);
    res.redirect("/my-squad");
  } catch (err) {
    console.log(err);
    res.send("an error occured ...");
  }
});

app.post("/add-ironhacker", async (req, res) => {
  console.log(req.body);
  // in express, data posted from any form are accessible under req.body
  try {
    // 1 insert the doc in db
    await UserModel.create(req.body); // this is a C (from C.R.U.D)
    // 2 redirect to the user list
    res.redirect("/my-squad");
  } catch (err) {
    // if error, catch it !
    console.log(err);
    res.send("an error occured ...");
  }
});

app.listen(process.env.PORT, () => {
  console.log("ok @ http://localhost:" + process.env.PORT);
});
