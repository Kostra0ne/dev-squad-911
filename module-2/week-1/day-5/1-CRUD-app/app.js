require("dotenv").config();
require("./config/database");

const express = require("express");
const hbs = require("hbs");
const app = express();
const RestaurantModel = require("./models/Restaurant");
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
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

// route to get the full list of restaurants  (R)
app.get("/restaurant", async (req, res) => {
  const allRestos = await RestaurantModel.find();
  res.render("listRestaurants", { allRestos });
});

// route to access to one specific restaurant  (R)
app.get("/restaurant/:id([a-z0-9]{24})", async (req, res) => {
  try {
    const restaurant = await RestaurantModel.findById(req.params.id);
    res.render("detailsRestaurant", restaurant);
  } catch (err) {
    console.log(err);
  }
});

/**
 * if you don't use regex,
 * place the dynamic route (with variable segments) after the static ones
 */
// app.get("/restaurant/:id", async (req, res) => {
//   try {
//     const restaurant = await RestaurantModel.findById(req.params.id);
//     res.render("detailsRestaurant", restaurant);
//   } catch (err) {
//     console.log(err);
//   }
// });

// route to display the form to create a restaurant
app.get("/restaurant/create", (req, res) => {
  res.render("formRestaurant");
});

// route to display the form to create a restaurant
app.get("/restaurant/update/:id", async (req, res) => {
  try {
    const restaurant = await RestaurantModel.findById(req.params.id);
    res.render("formUpdateRestaurant", restaurant);
  } catch (err) {
    console.err(err);
    res.send("error to handle");
  }
});

// route to delete one specific restaurant  (D)
app.get("/restaurant/delete/:id", async (req, res) => {
  try {
    const deletedResto = await RestaurantModel.findByIdAndRemove(req.params.id);
    res.redirect("/restaurant");
  } catch (err) {
    console.error(err);
  }
});

// route to create one restaurant  (C)
app.post("/restaurant", async (req, res) => {
  try {
    await RestaurantModel.create(req.body);
    res.redirect("/restaurant");
  } catch (err) {
    console.log(err);
  }
});

// route to update one restaurant (U)
app.post("/restaurant/:id", async (req, res) => {
  try {
    const updatedResto = await RestaurantModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // true: give me the updated documebnt back (default: false)
    );
    console.log(updatedResto);
    res.redirect("/restaurant");
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log("http://localhost:" + process.env.PORT);
});
