// A - object literals
const musicInstrument = {
  name: "Juno",
  brand: "roland",
  price: 999.99,
  currency: "$",
  ref: "GDJQDNNQDNKA1Z10139",
};

// B - accessors (dot notation)
const price = musicInstrument.price + " " + musicInstrument.currency;
console.log(price);

// C - accessors (square notation)
console.log(musicInstrument["name"], musicInstrument["brand"]);

console.log(musicInstrument["name"] === musicInstrument.name);

function getKey(instrument, key) {
  return instrument[key];
}

console.log(getKey(musicInstrument, "ref"));

musicInstrument.category = "synthetiser";
musicInstrument.stock = 20;

console.log("--------------");
console.log(musicInstrument);

// D - DIY : build an object representing a person, thing, country, etc.
// play with the data : print in a console, the value with dot and square notation.

// E - nested objects

const user = {
  name: "gui",
  pet: {
    name: "Fugee",
  },
};

console.log("my pet's name is : ", user.pet.name);
console.log("my pet's name is : ", user["pet"]["name"]);

// F - object reference vs copy (and spread operator)

const user2 = user;

user2.name = "andy";

console.log(user);

const pet = {
  name: "Wako",
  species: "dog",
};

console.log("-------------");

console.log(pet);

// let's clone this pet (making a brand new independant version of the pet)

console.log("-------------");

const clone = { ...pet }; // spread operator => will create a copy of the targeted object
clone.name = "Felix";

console.log(">", clone);
console.log(">>", pet);

// G - for in ... loop

// Bonus : JSON string representation of an object
