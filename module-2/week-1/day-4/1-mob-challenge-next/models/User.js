const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true
  },
  favLang: String,
});


// below : user is the collection name (mongo will append a s to user => users)
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel; // is an object containing all usefull function for CRUD

//  one user structure :  { name: "foo", email: "foo@foo.foo", favLang: "JS" },
