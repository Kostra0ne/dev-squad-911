// A - function declaration

function sayHello(who) {
  // let's review the default return value
  // let's see what is the default argument value
  // let's define some arg value in the function declaration

  // let's check if who is falsy : if yes => throw an Error
  if (Boolean(who) === false)
    throw new Error("Hey dev, you need to give me a string as argument !!!");
  if (!isNaN(who))
    throw new Error("Hey dev, we don't accept numbers as argument here !!!");
  if (typeof who === "object")
    throw new Error("Hey dev, we don't accept objects as argument here !!!");

  return `hello ${who}`;
}

try {
  var x = sayHello("Kate");
  var y = sayHello("Andy");
  var z = sayHello("Whoever");
  // var beta = sayHello({});
} catch (error) {
  console.log(error);
}

console.log("-----continue-------");

// B - Code along sum function together
// it accepts 2 arguments a, and b
// it returns the sum of the 2 arguments
// then: it should throw an Error if a OR b are not numbers

// function sum(a, b) {
//   if (isNaN(a)) {
//     throw new Error("not good, we numbers as arguments");
//   } else if (isNaN(b)) {
//     throw new Error("not good, we numbers as arguments");
//   } else return Number(a) + Number(b);
// }

// function sum(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     throw new Error("not good, we numbers as arguments");
//   } else return Number(a) + Number(b);
// }

function checkIfNaN(val) {
  if (isNaN(val)) throw new Error("not good, we numbers as arguments");
}

function sum(a, b) {
  const res = Number(a) + Number(b);
  checkIfNaN(res);
  return res;
}

var sumResult1 = sum(1, 1);
// var sumResult2 = sum(1, "foo"); // should throw an error
var sumResult3 = sum("10", "10"); // this should return 2

console.log("sumResult1 > ", sumResult1);
// console.log("sumResult2 > ", sumResult2);
console.log("sumResult3 > ", sumResult3);

// GENERAL ADVICE : One function === One action

// D - D.I.Y : create a mult() function taking a and b as arguments, returns a time b

function mult(a, b) {
  const res = Number(a) * Number(b);
  checkIfNaN(res);
  return res;
}

// E - function composition : let's use sum and mult together in action

var composedValue = mult(sum(1, 1), sum(10, 10));
console.log(">> ", composedValue);

// F - function expression and hoisting


console.log(foo());

function foo() { // function declaration are hoisted
  return "foo";
}


const bar = function () {
  // an anonymous function attached to a variable
  return "bar";
};

console.log(bar());

// G - let's store call sayHello() and store the returned value in an Array
