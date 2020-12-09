var express = require("express");
var router = express.Router();
const TodoModel = require("./../model/Todo");

/* GET  ALL */
router.get("/", async function (req, res, next) {
  try {
    res.status(200).json(await TodoModel.find());
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// GET ONE
router.get("/:id", async function (req, res, next) {
  try {
    res.status(200).json(await TodoModel.findOne({ _id: req.params.id }));
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// POST ONE
router.post("/", async function (req, res, next) {
  try {
    res.status(200).json(await TodoModel.create(req.body));
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// DELETE ONE
router.delete("/:id", async (req, res) => {
  try {
    res.status(200).json(await TodoModel.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// UPDATE ONE
router.patch("/:id", async (req, res) => {
  try {
    res.status(200).json(await TodoModel.findByIdAndUpdate(req.params.id, req.body, {new: true}));
  } catch (err) {
    res.status(500).json(err.message);
  }
});


module.exports = router;
