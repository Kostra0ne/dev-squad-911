function foo() {
  return "bar";
}

function universalAnswer() {
  console.log(42);
}

var x = "baz";
x = x + " " + foo();

console.log(x); // log is a debugging tool : allowing to inspect / see the content of any value/expression

var y = universalAnswer(); // z is undefined

var z = y * 2; // mutliply undefined * 2

console.log(z); // NaN

function multipleReturn(value) {
  var tmp;
  if (typeof value === "string") tmp = "it's a string !";
  else tmp = "it's not a string";
  return tmp;
}

var adam = {
  age: 30,
  favColor: "blue",
};

console.log(adam, adam.favColor);
console.log("is adamn fav color black ?");
console.log(adam.favColor === "black");


var n = 0;
n += 3;
n += 3;
n += 3;
n += 3;

console.log(n);

var resMultipleReturn = multipleReturn(123);

console.log("case" == "Case"); // false
console.log("case" === "Case"); // false

// C.L.I : Command Line Interface === Terminal === Shell (Ghost in the Shell)