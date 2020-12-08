const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema(
  {
    title: String,
    releaseDate: Date,
    label: { type: Schema.Types.ObjectId, ref: "Label" },
    artist: { type: Schema.Types.ObjectId, ref: "Artist" },
    cover: {
      type: String,
      default:
        "https://res.cloudinary.com/gdaconcept/image/upload/v1607419466/default-album-cover_ugnthr.png",
    },
  },
  { timestamps: true }
);

const AlbumModel = mongoose.model("album", albumSchema);

module.exports = AlbumModel;
