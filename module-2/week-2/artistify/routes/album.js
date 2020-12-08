const express = require("express");
const router = new express.Router();
const AlbumModel = require("./../model/Album");
const uploader = require("./../config/cloudinary");

// GET - all albums
router.get("/", async (req, res, next) => {
  try {
    res.render("albums", { albums: await AlbumModel.find() });
  } catch (err) {
    next(err);
  }
});

// GET - create one album (form)
router.get("/create", async (req, res, next) => {
  res.render("albumCreate");
});

// GET - one album by id
router.get("/:id", async (req, res, next) => {
  try {
    res.render("albumDetails", await AlbumModel.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

// GET - update one album (form)
router.get("/update/:id", async (req, res, next) => {
  try {
    res.render("albumUpdate", await AlbumModel.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

// GET - delete one album
router.get("/delete/:id", async (req, res, next) => {
  try {
    await AlbumModel.findByIdAndRemove(req.params.id);
    res.redirect("/dashboard/album");
  } catch (err) {
    next(err);
  }
});

// POST - create one album
router.post("/", uploader.single("cover"), async (req, res, next) => {
  const newAlbum = { ...req.body };
  if (!req.file) newAlbum.cover = undefined;
  else newAlbum.cover = req.file.path;
  console.log(newAlbum);
  try {
    await AlbumModel.create(newAlbum);
    res.redirect("/dashboard/album");
  } catch (err) {
    next(err);
  }
});

// POST - update one album
router.post("/update/:id", uploader.single("cover"), async (req, res, next) => {
  try {
    const albumToUpdate = { ...req.body };
    if (req.file) albumToUpdate.picture = req.file.path;

    await AlbumModel.findByIdAndUpdate(req.params.id, albumToUpdate);
    res.redirect("/dashboard/album");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
