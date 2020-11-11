function sayHello() {
  return "hello !";
}

function foo() {}

function bar() {
  return;
}

function baz() {
  return undefined;
}

console.log("-------  1 -------");
console.log(sayHello); // this prints the function itself
console.log(sayHello()); // let's execute the function and get "hello"

console.log("-------- 2 ------");

console.log(foo());

console.log("-------- 3 ------");
console.log(bar());

console.log("--------- 4 -----");

const x = foo(); // returns undefined
const y = bar(); // returns undefined too
const z = baz(); // returns undefined too

console.log(x === y && y === z && z === x); // true

function sayHelloToSomebody1(name) {
  var tmpName = name === undefined ? "stranger" : name;
  return "hello " + tmpName;
}

function sayHelloToSomebody2(name) {
  var tmpName;
  if (name === undefined) {
    tmpName = "stranger";
  } else {
    tmpName = name;
  }
  return "hello " + tmpName;
}

function sayHelloToSomebody3(name) {
  return "hello " + (name === undefined ? "stranger" : name);
}

function sayHelloToSomebody4(name) {
  return `hello ${!Boolean(name) || !isNaN(name) ? "stranger" : name}`;
}

const sayHelloToSomebody5 = (name) =>
  `hello ${!Boolean(name) || !isNaN(name) ? "stranger" : name}`;

// console.log(sayHelloToSomebody1("Victorien"));
// console.log(sayHelloToSomebody2("Omar"));
// console.log(sayHelloToSomebody3("Ann"));
// console.log(sayHelloToSomebody4("Xuan"));
console.log(sayHelloToSomebody5("Vincent"));


