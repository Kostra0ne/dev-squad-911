const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/heroes").then((x) => {
  console.log("You are connected to the DB !");
});
