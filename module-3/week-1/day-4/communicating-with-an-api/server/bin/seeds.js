const mongoose = require("mongoose");
const HeroModel = require("../models/Hero");
const heroesJSON = require("../data/heroes.json");

mongoose
  .connect("mongodb://localhost/heroes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(async (x) => {
    console.log(`Connection to ${x.connection.name} successful`);

    const heroesFormatted = heroesJSON.map((hero) => {
      return {
        name: hero.name,
        occupation: hero.work.occupation,
        image: hero.image.url,
      };
    });

    const insertedHeroes = await HeroModel.create(heroesFormatted);
    console.log(insertedHeroes);
  })
  .catch((error) => {
    console.log("An error occured", error);
  });
