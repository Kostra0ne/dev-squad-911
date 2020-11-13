// I - how to read a matrix
var matrix = [
  /* 0 */ ["hey", "what", "'s", "up", "squad", "?!!"], // l(6)
  // indexes: 0     1       2     3      4       5
  /* 1 */ [":)", "^^", ":/", "^_^", "(^0^)", ":(", "; )"], // l(5)
  /* 2 */ [100, 200], // l(2)
  /* 3 */ [
    { score: 0, name: "joe" },
    { score: 5, name: "jack" },
    { score: 10, name: "jim" },
  ], // l(3)
];

// console.log(matrix[1][ matrix[1].length - 1  ]);

// console.log(matrix[1][3]);

// console.log(matrix[0][3]);

// console.log(matrix[3][1].name);

// const key = "score";
// console.log(matrix[3][1][key]);
// console.log(matrix[3][1].score);

// BONUS : use suare notation with objects literals
// ... to access any value in a generic fashion
function extractValueOutOfAnObject(obj, key) {
  return obj[key];
}

const res = extractValueOutOfAnObject(matrix[3][1], "name");
console.log(res); // jack

// console.log(matrix[3][2].score);

// II - use a nested for loop to parse each matrix's value
// lets code a nested for loop and access each smiley of the smileys matrix
// REMEMBER: a matrix is an array of arrays (nested arrays)
const smileys = [
  /* 0 */ [":)", ";)", ":D", "^^"],
  //   0      1     2     3
  /* 1 */ [":(", ":/", "-_-'"],
  /* 2 */ ["0_0", "*_*", "O~O", [1, 2, 3, 4]],
  //   0      1     2
];

console.log("------- nested loops ---------");

for (let i = 0; i < smileys.length; i++) {
  // console.log("i > ", i);
  // console.log(smileys[i]);

  for (let j = 0; j < smileys[i].length; j++) {
    // console.log("--------");
    // console.log("j > ", j);

    // console.log(smileys[i][j]);

    if (Array.isArray(smileys[i][j])) {
      for (let k = 0; k < smileys[i][j].length; k++) {
        console.log(smileys[i][j][k]);
      }
    }
  }

  // console.log("=========");
}

console.log("nested loop end");

const DIYMatrix = [
  [0, 1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 9, 10],
  [10, 20, 30, 40, 50, 60, 50],
  [-1, -2, -3, -4, -5, -6, -5],
  [100, 200, 300, 400, 100.3, 50],
];

//

// use a nested for loop to sum all the values contained in DIYMatrix

// let sum = 0;
// for (let i = 0; i < DIYMatrix.length; i+= 1) {
//   for (let j = 0; j < DIYMatrix[i].length; j ++) {
//     sum += DIYMatrix[i][j];
//   }
// }

// console.log("the sum is %f", sum);

/*
%s for a String value
%d or %i for a Integer value
%f for a Floating point number
%o for an Object hyperlink
*/
