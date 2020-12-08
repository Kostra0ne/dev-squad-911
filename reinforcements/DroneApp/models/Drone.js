var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DroneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

const DroneModel = mongoose.model("drone", DroneSchema);

module.exports = DroneModel;



