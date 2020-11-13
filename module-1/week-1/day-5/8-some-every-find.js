const movies = ["The Thing", "The Godfather", "The Shining"];
const booleans = [true, true, true, true];
const numbers = [10, 10, 11, 2, 10, 11, 11];


// array.find will return the first value passing the test
// ... undefined ortherwise
const movie = movies.find(movie => movie === "The Godfather");

console.log("--- 1 : array.find ---\n");
console.log(movie);

// array.every returns true if all the tested values returned true
// ... false otherwise
const matchedEvery = booleans.every(value => value === true);
const didntMatchedEvery = booleans.every(value => value === false);

console.log("--- 2 : array.every ---\n");

console.log(matchedEvery);
console.log(didntMatchedEvery);


// array.every returns true if some of the tested values returned true
// ... false otherwise
const someAreEleven = numbers.some(number => number === 11);

console.log("--- 3 : array.some ---\n");

console.log(someAreEleven);
