// for while forEach for..in for...of do...while

// while

var score = 0;

while (score < 10) {
  // will loop until the condition score < 10 is true
  console.log(score);
  score += 1; // add 1 to score on each turn
  //   score++; // same as above ...
}

console.log(">> end of while", score);

// for usefull to loop through sequences

var sequence = "abcdefg";
//              0     6

for (let i = 0; i < sequence.length; i++) {
  console.log(i + " -> " + sequence[i]);
}

console.log("-----------for----------------");

var numbers = [10, 100, -3, 1000, 6.6];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(i + " -> " + numbers[i]);
}

console.log(">> end of for");

console.log("---------------------------");

var users = ["jill", "kill", "bill"];

for (let i = 0; i < users.length; i += 1) console.log(i + " -> " + users[i]);

//  do..while

var price = 0;

console.log("------------do while---------------");

do {
  console.log("->", price);
  price += 1;
} while (price !== 10);

console.log(">> end of do..while", price);
