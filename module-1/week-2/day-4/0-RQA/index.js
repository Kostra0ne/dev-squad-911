// how to use parent.appendChild ?
// removeChild : how to ?
// textContent vs innerHTML
// classList remove/add/contains vs toggle

// async functions ... nested async ?
// clearInterval how to ?

// methods vs separated functions ?

// function arguments : when use it or not ? what are those for ?
// object : shallow vs deep copy

// https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript#:~:text=An%20object%20is%20said%20to,value%20to%20the%20target%20object.

// adding things to values
// pushing in array ? adding in dom tree ? let var : increment numbers ?

let timeoutId2;

// const timeoutId1 = setTimeout(() => {
//   console.log("jumping...");
//   timeoutId2 = setTimeout(() => {
//     console.log("stop jumping...");
//   }, 500);
// }, 2000);

// const intervalId = setInterval(() => {
//   console.log(":)");
// }, 1000);

// setTimeout(() => {
//   console.log("about to clear here ===>");
//   clearInterval(intervalId);
// }, 5000);

function setName(user, newName) {
  user.name = newName;
  return user;
}

let user = { name: "foo" };
user = setName(user, "bill");
console.log(user);

class User {
  constructor(name) {
    this.name = name;
  }

  setName(newName) {
    this.name = newName;
  }
}

console.log("-------");

function mult(a, b) {
  return a * b;
}

const x = { name: "gui", balance: -100 };

function checkAccountBalance(account) {
  if (typeof account !== "object" || account === null)
    throw new Error("expecting object here");

  if (!account.balance || !account.name)
    throw new Error("expecting name and balance properties here");

  if (account.balance < 0)
    return `${account.name} : you need to balance your account`;

  return `${account.name} : you're doing good`;
}

const cat = { name: "kitty", age: 10 };

// const o = {};
// const oo = {};
// console.log(o === oo);

const res1 = checkAccountBalance(x);
const res2 = checkAccountBalance({ name: "etouma", balance: 1000 });
// const res3 = checkAccountBalance("ironhack"); // will throw error

console.log(res1);
console.log(res2);


mult(1, 1);
mult(10, 10);
mult(9.998, 10.1);

console.log("-------");

const userInstance1 = new User("bar");
console.log(userInstance1);
userInstance1.setName("baz");
console.log(userInstance1);

console.log("---- copying objects ---");

const player = {
  name: "gui",
  talk: function () {
    console.log("hello !");
  },
  pet: {
    name: "Fugee",
    kid: { name: "kiddo" },
    talk: function () {
      console.log("meow");
    },
  },
};

const clone1 = { ...player }; // use spread : clean short way to create deep copy
const clone2 =  JSON.parse(JSON.stringify(player));

console.log(clone1);
console.log(clone2);


// BONUS destructuring

const cat2 = { species: "cat", name: "kitty", age: 10, ref: "18aa181093" };
const dog1 = { species: "dog", name: "wako", age: 5 , ref: "1818qs1093"};

function getAnimalInfos({ species, name, age }) {
    return `the ${species} ${name} is ${age} years old`;
}

// console.log(getAnimalInfos(cat2));
// console.log(getAnimalInfos(dog1));
// console.log(getAnimalInfos({}));



let xx = 0;
xx++