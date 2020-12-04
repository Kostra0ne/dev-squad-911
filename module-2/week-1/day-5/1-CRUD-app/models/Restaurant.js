const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  specialty: String,
  isVegan: Boolean,
  city: String,
  country: String,
  street: String,
  streetNumber: Number,
  zipcode: String,
  likes: Number,
});

// model function : 
// arg 1 => collection name (in compass)
// agr 2 => Schema used for this data model 
const RestaurantModel = mongoose.model("restaurant", RestaurantSchema);

module.exports = RestaurantModel;