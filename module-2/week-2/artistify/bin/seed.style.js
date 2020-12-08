// create a test data set of valid users
require("dotenv").config();
require("./../config/mongo"); // fetch the db connection
const StyleModel = require("./../model/Style"); // fetch the model to validate our user document before insertion (in database)

const styles = [
  { name: "jazz", color: "gray" },
  { name: "rock", color: "black" },
  { name: "rap", color: "firebrick" },
  { name: "punk", color: "pink" },
  { name: "classical", color: "orange" },
  { name: "folk", color: "green" },
  { name: "blues", color: "blue" },
];

async function insertTestStyles() {
  try {
    await StyleModel.deleteMany(); // empty the styles db collection
    const inserted = await StyleModel.insertMany(styles); // insert docs in db
    console.log(`seed styles done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertTestStyles();
