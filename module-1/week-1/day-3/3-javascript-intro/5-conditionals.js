if ("") {
  console.log("hahaha i'm here");
} else {
  console.log("nope, i'm there since the evaluated value was FALSY");
}
// the else statement is not mandatory

var score = 0;

console.log("--------------");

if (score <= 0) {
  console.log("not enough");
} else if (score > 5 && score < 20) {
  console.log("yay continue !!");
} else {
  console.log("you rock");
}

console.log("--------------");

if (score >= 0) {
  console.log("1");
}

if (score > 5) {
  console.log("2");
}

if (score > 10) {
  console.log("3");
}
