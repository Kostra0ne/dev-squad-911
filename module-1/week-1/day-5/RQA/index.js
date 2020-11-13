//one dollar question
// console.log(number === Number);

const numbers = [-100, -3, 4, -5, 2]; // l(5)
//                 0    1  2   3  4

// for loops
// get sum of array
// return the sum
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// get min of an array
// return it
function minOfArray(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// get average of array
// return it

function avgOfArray(arr) {
  return sumOfArray(arr) / arr.length;
}

// fat arrow functions :)

// const avgOfArray = (arr) => sumOfArray(arr) / arr.length;

const mult = (a, b) => {
  const tmp = Number(a) + Number(b);
  if (isNaN(tmp)) throw new Error("ay caramba !");
  return tmp;
};

const result1 = sumOfArray(numbers);
const result2 = minOfArray(numbers);
const result3 = avgOfArray(numbers);

console.log("sum returned >", result1);
console.log("min returned >", result2);
console.log("avg returned >", result3);

// minOfArray(numbers);
// avgOfArray(numbers);

// going further ...

// var const let (assignment - primitives and objects )

const someWords = "test";
let someOtherWords = "test 2";
const someDude = { name: "The dude" };
const someGirl = { name: "Hit Girl" };

// someWords = "foo bar baz !!!";

// someOtherWords = "things are getting hairy !!!";

// someDude = someGirl;

someDude.lastname = "Lebowski";
someDude.favoriteDrink = "White russian";

console.log(someDude);

// var const let (hoisting)

// var const let (scope)

function doThings() {
  let foo, b, dude, numbers, check;
}
