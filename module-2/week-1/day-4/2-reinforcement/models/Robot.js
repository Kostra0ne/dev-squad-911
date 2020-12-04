const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const robotSchema = new Schema({
  chip: String,
  name: {
    type: String,
    unique: true,
    validate: (v) => v.length > 3
  },
  price: Number,
  speechEnabled: Boolean,
  features: [String],
});

const RobotModel = mongoose.model("robot", robotSchema);
module.exports = RobotModel;
