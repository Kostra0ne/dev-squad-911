// can we talk about this

const hackerJim = {
  name: "Jim",
  slogan: function () {
    return this.name + " says : everyday i'm hacking !";
  },
}; // singleton

hackerJim.slogan();

// console.log(this);

const action = function () {
  console.log(this);
};

action.bind("etouma")();

class Smartphone {
  constructor(brand, price) {
    // console.log(this instanceof Object);
    this.brand = brand;
    this.price = price;
  }

  getFullInfos() {
    //console.log(this.brand, this.price);
    return `${this.brand} ${this.price}`;
  }
}

const iphone5 = new Smartphone("apple", 800);
const galaxy4 = new Smartphone("samsung", 500);
const fairPhone = new Smartphone("fair", 500);

iphone5.getFullInfos();
galaxy4.getFullInfos();
fairPhone.getFullInfos();

console.log(typeof Smartphone);

console.log("-------------------------");

const Player = function (params) {
  this.score = 0;
};

Player.prototype.incrementScore = function (nb) {
  if (isNaN(nb)) throw new Error("nb must be a valid number");
  this.score += nb;
};

const player1 = new Player();
player1.incrementScore(10);
player1.incrementScore(1);
// player1.incrementScore("foo"); // will crash

console.log(player1);

// JS Class instances
//  -------
// let's create a class Movie (title, director, duration, genre)
// instatiate some movies, store them in an Array
// Add a method getMovieInfos returning the full infos in a formated string
// call the method on each instance, in a loop

// DOM Element
// DOM SELECTION
// NodeList vs HTMLCollection
// innerHTML vs textContent
// LOOP DOM elements
// DOM events

class Horde {
  constructor() {
    this.army = [];
  }

  joinTheHorde(character) {
    if (character instanceof Knight) throw new Error("get lost you hero !");
    this.army.push(character);
  }
}

class Alliance {
  constructor() {
    this.army = [];
  }
}

class Troll {
  constructor(name) {
    this.name = name;
    this.strength = 300;
    this.intelligence = 50;
  }
}

class Knight {
  constructor(name) {
    this.name = name;
    this.strength = 100;
    this.intelligence = 100;
  }
}

const horde = new Horde();

try {
  horde.joinTheHorde([new Troll("Grunt"), new Troll("Grunt")]);
  //   horde.joinTheHorde(new Knight("Alaphax"));
} catch (err) {
  console.log(err);
}

console.log(horde);

// Object.assign =>
