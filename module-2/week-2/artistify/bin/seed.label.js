// create a test data set of valid users
require("dotenv").config();
require("./../config/mongo"); // fetch the db connection
const LabelModel = require("./../model/Label"); // fetch the model to validate our user document before insertion (in database)

const styles = [
  { name: "Ninja Tunes", country: "uk", city: "london" },
  { name: "Loud Records", country: "usa", city: "new york" },
  { name: "Warp Records", country: "uk", city: "london" },
  { name: "Fat Wreck Chords", country: "usa", city: "san francisco" },
  { name: "Death row", country: "usa", city: "los angeles" },
  { name: "Côté Obscur", country: "france", city: "marseille" },
  { name: "ROIR Records", country: "usa", city: "new york" },
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
