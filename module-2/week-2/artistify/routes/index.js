var express = require("express");
var router = express.Router();

// express routers share the same API as the main app...
// router.get / router.post

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

/* GET dashboard page  */
router.get("/dashboard", (req, res, next) => {
  res.render("dashboard");
});

module.exports = router; // MANDATORY
