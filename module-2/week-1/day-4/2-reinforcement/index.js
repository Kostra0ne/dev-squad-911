require("dotenv").config();
require("./config/connect-db");

const express = require("express");
const app = express();
const hbs = require("hbs");

const RobotModel = require("./models/Robot");

// // setup

app.use(express.urlencoded());
// // we can now access data posted from form as a string in url-encoded format
// // express will expose automatically those values in req.body object

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/partials");

app.get("/", async (HTTPRequest, HTTPResponse) => {
  // i wanna my robots in the database before rendering the view !!
  //   console.log("hello");
  try {
    const robots = await RobotModel.find();
    HTTPResponse.render("home", { robots });
  } catch (err) {
    res.send(err);
  }
});

app.get("/create-robot", (req, res) => {
  res.render("formCreateRobot");
});

app.post("/create-robot", async (req, res) => {
  //   console.log(req.body);
  const { chip, name, price, speechEnabled, features } = req.body;

  const newBot = {
    chip,
    name,
    price: Number(price),
    speechEnabled: speechEnabled === "yes",
    features: features.split(","),
  };

  const createdBot = await RobotModel.create(newBot);
  console.log(createdBot);
  res.redirect("/");
});

app.get("/robots/:name", async (req, res) => {
  try {
    const robot = await RobotModel.findOne({ name: req.params.name });
    res.render("robotDetails", robot);
  } catch (err) {
    res.send(err);
  }
});

app.get("/robots/delete/:id", async (req, res) => {
  try {
    await RobotModel.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.send(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`ready to rock http://localhost:${process.env.PORT}`);
});
