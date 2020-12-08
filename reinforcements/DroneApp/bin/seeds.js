require("dotenv").config();
require("./../config/mongodb");

const DroneModel = require("../models/Drone");

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

DroneModel.insertMany(drones)
    .then(dbRes => console.log(dbRes))
    .catch(err => console.log(err))