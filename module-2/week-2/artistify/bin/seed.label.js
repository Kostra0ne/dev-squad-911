// create a test data set of valid users
require("dotenv").config();
require("./../config/mongo"); // fetch the db connection
const LabelModel = require("./../model/Label"); // fetch the model to validate our user document before insertion (in database)

const styles = [
  { name: "ninja tunes", country: "uk", city: "london" },
  { name: "loud records", country: "usa", city: "new york" },
  { name: "warp records", country: "uk", city: "london" },
  { name: "fat wreck chords", country: "usa", city: "san francisco" },
  { name: "death row", country: "usa", city: "los angeles" },
  { name: "côté obscur", country: "france", city: "marseille" },
];

async function insertLabels() {
  try {
    await LabelModel.deleteMany(); // empty the styles db collection
    const inserted = await LabelModel.insertMany(styles); // insert docs in db
    console.log(`seed labels done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertLabels();
