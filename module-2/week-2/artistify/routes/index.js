const express = require("express");
const router = express.Router();
const ArtistModel = require("./../model/Artist");
const AlbumModel = require("./../model/Album");
const LabelModel = require("./../model/Label");
const StyleModel = require("./../model/Style");
const { get } = require("mongoose");

// express routers share the same API as the main app...
// router.get / router.post

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const lastArtists = await ArtistModel.find()
      .sort({ createdAt: -1 })
      .limit(3);

    const lastAlbums = await AlbumModel.find().sort({ createdAt: -1 }).limit(3);

    res.render("index", {
      lastArtists,
      lastAlbums,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/all-albums", async (req, res, next) => {
  try {
    res.render("albumsAll", {
      albums: await AlbumModel.find().populate("artist").populate("label"),
    });
  } catch (err) {
    next(err);
  }
});

router.get("/all-albums/:id", async (req, res, next) => {
  try {
    res.render(
      "album-one",
      await AlbumModel.findById(req.params.id)
        .populate("artist")
        .populate("label")
    );
  } catch (err) {
    next(err);
  }
});

router.get("/search", async (req, res, next) => {
  // req.body (posted infos)
  // req.params (variable/dynamique part of a route path)
  // req.query (access infos from for with get method)
  try {
    // console.log(req.query); // query strings
    const exp = new RegExp(req.query.search); // creating a regular expression
    const matchedArtists = await ArtistModel.find({ name: { $regex: exp } });
    const matchedAlbums = await AlbumModel.find({ title: { $regex: exp } });
    const matchedLabels = await LabelModel.find({ name: { $regex: exp } });
    const matchedStyles = await StyleModel.find({ name: { $regex: exp } });

    res.json({
      matchedArtists,
      matchedAlbums,
      matchedLabels,
      matchedStyles,
    });
  } catch (err) {
    next(err);
  }
});

/* GET dashboard page  */
router.get("/dashboard/", (req, res, next) => {
  res.render("dashboard");
});

module.exports = router; // MANDATORY
