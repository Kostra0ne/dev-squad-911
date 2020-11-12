const simple = ["aa", "b", "cc", "d"];
const names = ["hugo", "dominic", "haroon", "lou", "fatou", "yang"]; // l(6)
//  indexes:     0         1         2        3       4       5
const brands = ["adidas", "nike", "reebok", "puma", "jordan"]; // l(5)
//  indexes:      0         1         2        3       4
const animals = [
  "puma",  // 0
  "hawk",  // 1
  "eagle", // 2
  "snake", // 3
  "rat",   // 4
  "tiger", // 5
  "shark", // 6
  "lion",  // 7
  "ant",   // 8
]; // l(9)

// demo : let's code a function sumWordLetters
// it accepts an array of strings as argument
// it returns a number representing the sum of the length of all strings contained in the array.
// test the function with the 3 provided arrays

console.log("\n---- code demo : sumWordLetters ----\n");

function sumWordLetters(arrayOfStrings) { // arrayOfStrings is this function's argument || paramenter
    let sumLetters = 0; // initialize the sum at 0

    for (let i = 0; i < arrayOfStrings.length; i++) { // loops through each array
        sumLetters += arrayOfStrings[i].length; // access each string's length and add it to the sum
    }
    // when the job is done, i can return the sum
    return sumLetters;
}

// ******** function calls ********

const result0 = sumWordLetters(simple);
const result1 = sumWordLetters(names);
const result2 = sumWordLetters(brands);
const result3 = sumWordLetters(animals);

console.log("\n------- results -------\n");

console.log("result 0 > ", result0); // it should be 4 !
console.log("result 1 > ", result1); // it should be 29 !
console.log("result 2 > ", result2); // it should be 26 !
console.log("result 3 > ", result3); // it should be 38 !
