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

router.get("/search", async (req, res, next) => {
  try {
    console.log(req.query.search);
    const exp = new RegExp(req.query.search);
    const matchedArtists = await ArtistModel.find({ name: { $regex: exp } });
    const matchedAlbums = await AlbumModel.find({ name: { $regex: exp } });
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
router.get("/dashboard", (req, res, next) => {
  res.render("dashboard");
});

module.exports = router; // MANDATORY
