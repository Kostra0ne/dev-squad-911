// create a test data set of valid users
require("dotenv").config();
require("./../config/mongodb"); // fetch the db connection
const UserModel = require("./../models/User"); // fetch the model to validate our user document before insertion (in database)

const users = [
  { name: "foo", email: "foo@foo.foo", favLang: "JS" },
  { name: "bar", email: "bar@bar.bar", favLang: "Go" },
  { name: "baz", email: "baz@baz.baz", favLang: "Rust" },
  { name: "jane", email: "jane@doe.org", favLang: "Java" },
  { name: "bill", email: "bill@bascora.bizz", favLang: "PHP" },
  { name: "will", email: "will@coder.com", favLang: "Pascal" },
];

// CRUD methods are embeded in ANY model generated with mongoose
// important note : every mongoose model's method return a Promise

async function insertTestUsers() {
  try {
    await UserModel.deleteMany(); // empty the users db collection
    const insertedUsers = await UserModel.insertMany(users); // insert docs in db
    console.log("test users seed done !");
    console.log(insertedUsers);
  } catch (err) {
    console.error(err);
  }
}

insertTestUsers();
