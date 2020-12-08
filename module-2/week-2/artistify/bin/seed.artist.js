// create a test data set of valid users
require("dotenv").config();
require("./../config/mongo"); // fetch the db connection
const ArtistModel = require("./../model/Artist"); // fetch the model to validate our user document before insertion (in database)

const artists = [
  { name: "sonic youth", isBand: true },
  { name: "wu tang clan", isBand: true },
  { name: "aphex twin", isBand: false },
  { name: "asaf avidian", isBand: false },
  { name: "bad brains", isBand: true },
  { name: "lunatic", isBand: true },
];

async function insertLabels() {
  try {
    await ArtistModel.deleteMany(); // empty the styles db collection
    const inserted = await ArtistModel.insertMany(artists); // insert docs in db
    console.log(`seed artists done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertLabels();
