const express = require("express");
const router = new express.Router();
const LabelModel = require("./../model/Label");

// GET - /dashboard/labels
router.get("/", async (req, res, next) => {
  try {
    // try to find all labels stored in labels collection
    const labels = await LabelModel.find();
    // if succes, send the found array as a view parameter
    res.render("labels", { labels }); // we are ready now to loop through each label and display @view
  } catch (err) {
    // else if error thrown by LabelModel, pass the error to the next function
    // next() is provided by express
    // the next will display the error on error.hbs view
    next(err);
  }
});

// GET - /dashboard/labels/create
router.get("/create", (req, res) => {
  res.render("labelCreate");
});

// GET /dashboard/labels/update/:id
router.get("/update/:id", async (req, res, next) => {
  try {
    const label = await LabelModel.findById(req.params.id); // fetch the label to update
    res.render("labelUpdate", label); // pass the found label to the view
  } catch (err) {
    next(err); // if an error occurs, display it on error.hbs page
  }
});

// GET /dashboard/labels/delete/:id
router.get("/delete/:id", async (req, res, next) => {
  try {
    // use the model to delete one label by id
    await LabelModel.findByIdAndDelete(req.params.id);
    res.redirect("/dashboard/labels"); // then redirect to labels full list
  } catch (err) {
    next(err);
  }
});

// POST - /dashboard/labels/create
router.post("/create", async (req, res, next) => {
  try {
    await LabelModel.create(req.body);
    res.redirect("/dashboard/labels");
  } catch (err) {
    next(err); // express will display the error on the provided error page (error.hbs) (check the www file for details ....)
  }
});

router.post("/update/:id", async (req, res, next) => {
  try {
    const updatedLabel = await LabelModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect("/dashboard/labels");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
