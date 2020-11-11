// - operators:
// - mathematical: +, -, /, *, %
// - logical : &&, ||, !
// - comparison: >, >=, <, <=, ==, ===, !=, !==
// - concatanation
// - ternary: ? value1 : value2

// MATH OPERATORS
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1.1);
console.log(10 % 2); // 0
console.log(10 % 3); // 1

// LOGICAL OPERATORS
console.log(false && true);
console.log(false || true);
console.log(!true);

// COMPARISON OPERATORS

console.log(10 > 10); // false
console.log(10 >= 10); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true

console.log("***********");
console.log(10 == 10);
console.log(10 == 9);
console.log("foo" == "foo");
console.log("-----------");
console.log("10" == 10);
console.log("10" === 10); // strict equality : false
console.log("10" === String(10)); // strict equality : true
console.log("-----------");
console.log(true != false);
console.log(true != true);
console.log(1 != "1");
console.log(1 !== "1");

// CONCATENATION OPERATOR

console.log("hello" + " world");
console.log("hello" + " " + "world");
console.log(1 + "1");
console.log(typeof (1 + "1"));

console.log(1 + Number("1"));


// TERNARY OPERATOR
var score = 10;
var resultTernary =  score > 5 ? "yaaaay !" : "nay !";

console.log(">>", resultTernary);


// AFFECTATION 

score += 10;

console.log("score >", score);

score -= 10;
score *= 10;
score /= 10;

console.log(score);