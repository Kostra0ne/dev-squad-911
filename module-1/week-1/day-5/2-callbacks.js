// remember : functions are values !!!

const f = function () {
  return "i'm the function's f return value";
};

const hello = function () {
  return "hello";
};

function sum(a, b) {
  return a + b;
}

const ff = f;

const functions = [f, hello, sum];

// console.log(functions[1]);

const result = functions[2](1, 1);

// console.log(result);

// console.log(ff());

// callbacks are functions passed as arguments to other functions
// call me mayyyybe !!!

/**
 *
 * @param {Function} callback the function you want to call back
 * @throws Error if callback is not of type function
 */
function a(callback) {
  if (typeof callback !== "function")
    throw new Error("sorry, callback expected here");
  return callback();
}

function b() {
  return "i'm b people !!!";
}

function c() {
  console.log("i'm c people !!!");
}

function d() {
  console.log("i'm d people !!!");
}

console.log(typeof a);
console.log(typeof b);

const res1 = a(b);
const res2 = a(d);

console.log(">>>", res1, res2);

a(function () {
  console.log("I'AM ANONYMOUS FUNCTION");
});

//

function beginner(val) {
  if (val === 42) return "that is the meaning of life";
  else return "that is something else";
}

var res;

res = beginner(42);
res = beginner("foo");

console.log(res);

function say(callback) {
  return "squad, i have to say : " + callback();
}

function greeting() {
  return " hello everybody !!!!";
}

const x = say(function () {
  return "nice to meet you, hand tight !";
});

console.log(">", x);

const z = say(greeting);

console.log(">", z);
