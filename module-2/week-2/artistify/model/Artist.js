const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  isBand: Boolean,
  description: String,
  picture: {
    type: String,
    default:
      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
  },
});

const ArtistModel = mongoose.model("artist", artistSchema);

module.exports = ArtistModel;
