const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  favLang: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;

//  one user structure :  { name: "foo", email: "foo@foo.foo", favLang: "JS" },
