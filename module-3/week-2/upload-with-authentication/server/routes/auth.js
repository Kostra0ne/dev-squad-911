const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

const salt = 10;

router.post("/signin", (req, res, next) => {});

router.post("/signup", (req, res, next) => {});

router.get("/isLoggedIn", (req, res, next) => {});

module.exports = router;
