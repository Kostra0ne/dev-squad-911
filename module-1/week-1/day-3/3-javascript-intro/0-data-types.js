// Number
var x = 0;
var y = 1 + 222;
// 0, -1, 1, 100000, 3 * 44.646464, 10e1000, -oo : +oo

// String
var xx = "hello human, welcome to your account 1";
var xxx = 'hello human, welcome to your account 2';
var xxxx = `hello human, welcome to your account ${1 + 1 + 1}`;
var xxxxx = "hello human, welcome to your account " + (1 + 1 + 1 + 1);

console.log(x);
console.log(y);
console.log(xx);
console.log(xxx);
console.log(xxxx);

// Boolean
var theTruth = true;
var theOppositeOfTheTruth = false;

// TABLE OF TRUTH (BOOLEAN LOGIC)

// AND
/*
true and true   => true
false and false => false
false and true  => false
true and false  => false
*/

// OR
/*
true or true   => true
false or false => false
false or true  => true
true or false  => true
*/

// zero can be interpreted as false
// 1 can be interpreted as true

// NOT TRUE => FALSE
// NOT FALSE => TRUE

// null is the temporary OR definitive absence of value
// null is always the result of a computation (it must assigned, or returned)

var myNull = null;

console.log(myNull);

// undefined is the total absence of value, and NOBODY wrote it

// console.log(choobidoo);

// OBJECT

var user = {
    name: "guillaume",
    lastname: "amangoua",
    alias: "guillaume amg",
    age: 40,
    email: "guillaume.amangoua@gmail.com",
    lovesJS: true,
    lovesJava: false,
    pet: {
        name: "Fugee",
        type: "cat",
        color: "white",
        eyeColor: "blue"
    },
    hobbies: ["music making", "cookig", "binge watching", "sleeping"],
    favoriteColor: null
};

console.log(user);

console.log("------------>");
console.log(typeof user.favoriteMeal);
console.log(typeof "foo");
console.log(typeof 23);
console.log(typeof true && false);
console.log(typeof myNull); // strange thing here since typeof null returns object
console.log(myNull === null);
console.log(typeof user);

// ALL THE TYPES ARE THE RESULT OF FUNCTION CALLS
// since JS is a fully functional + object oriented programming language
// there is a constructor for each type, built in the language

// Number()
// String()
// Object()
// Function()

var convertedNumber = Number("12");
var convertedString = String(12);
var somethingFalse = Boolean(0);
var somethingTrue = Boolean(1);
console.log("---------------->");
console.log("---------------->");

console.log(convertedNumber, typeof convertedNumber);
console.log(convertedString, typeof convertedString);
console.log(somethingFalse, typeof somethingFalse);
console.log(somethingTrue, typeof somethingTrue);

