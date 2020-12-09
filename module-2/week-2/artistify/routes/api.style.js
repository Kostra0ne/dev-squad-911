const express = require("express");
const router = express.Router();
const StyleModel = require("./../model/Style");

router.get("/dashboard", async(req, res, next) => {
  const styles = await StyleModel.find();
  res.render("styles", {styles} );
});

// GET ALL
// /api/style/
router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await StyleModel.find());
  } catch (error) {
    next(error);
  }
});

// GET ONE BY ID
router.get("/:id", async (req, res, next) => {
  try {
    res.status(200).json(await StyleModel.findById(req.params.id));
  } catch (error) {
    next(error);
  }
});

// CREATE ONE
router.post("/", async (req, res, next) => {
  try {
    res.status(201).json(await StyleModel.create(req.body));
  } catch (error) {
    next(error);
  }
});

// UPDATE ONE BY ID
router.patch("/:id", async (req, res, next) => {
  try {
    res.json(
      await StyleModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    );
  } catch (error) {
    next(error);
  }
});

// DELETE BY ID
router.delete("/:id", async (req, res, next) => {
  try {
    res.status(200).json(await StyleModel.findByIdAndDelete(req.params.id));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
