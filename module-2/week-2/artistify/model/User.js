const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["admin", "user"], default: "user" },
  avatar: {
    type: String,
    default:
      "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
