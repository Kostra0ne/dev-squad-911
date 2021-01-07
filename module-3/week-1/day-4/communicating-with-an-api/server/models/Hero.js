const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const heroSchema = new Schema({
  name: String,
  image: String,
  occupation: String,
});

module.exports = mongoose.model("Hero", heroSchema);
