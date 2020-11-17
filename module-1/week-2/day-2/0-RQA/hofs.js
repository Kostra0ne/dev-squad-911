// what is a HOF ?

// function taking function as argument

// forEach, map, reduce, filter, sort

[1, 2, 3, 4].forEach((number) => {
  console.log(number);
});

function number(n) {
  console.log(n);
}

[1, 2, 22, 44].forEach(number);

// read an array an return a new array with modified values

const numbers = [20, 40, 33, 55];
// use map to double those numbers ?

// const modifiedNumbers = numbers.map(function (num) {
//   return num * 2;
// });

console.log(
  numbers.map(function (num) {
    return num * 2;
  })
);

const modifiedNumbers = numbers.map((nb) => nb * 2).filter((nb) => nb > 50);

const modifiedNumbers2 = numbers
  .map(function (nb) {
    return nb * 2;
  })
  .filter(function (nb) {
    return nb > 50;
  });

console.log(modifiedNumbers2);

const users = {
  jill: {
    name: "jill",
  },
  kill: {
    name: "jill",
  },
  bill: {
    name: "jill",
  },
};

console.log("-----");

// console.log( Object.entries(users) )

const onlyNames = Object.entries(users).map((x) => x[0]);

console.log(onlyNames);

const values = [120, 33, 444];

console.log("-----");

values.sort((a, b) => a - b);

const booleans = [false, false, false, false];

// const allTrue = booleans.reduce((acc, b) => {
//     return acc && b
// }, true)

const allTrue = booleans.reduce((acc, b) => acc && b, true);

const allAreTrue = booleans.every((v) => v === true);

const someAreTrue = booleans.some((v) => v === true);

console.log(someAreTrue);

const scores = [1, 1, 1];

const sum = scores.reduce((acc, currentValue, i) => {
  return acc + currentValue;
}, -10);

// const sum = scores.reduce((acc, currentValue) => acc + currentValue, 0);

console.log(sum);

const players = [
  {
    name: "gui",
    age: 20,
  },
  {
    name: "gui",
    age: 40,
  },
  {
    name: "yang",
    age: 30,
  },
  {
    name: "gui",
    age: 20,
  },
  {
    name: "yang",
    age: 20,
  },
  {
    name: "bill",
    age: 20,
  },
  {
    name: "jill",
    age: 20,
  },
];

const countNameDuplicated = players.reduce((acc, v, i) => {
  acc[v.name] = acc[v.name] === undefined ? 1 : (acc[v.name] += 1);
  return acc;
}, {});

console.log(countNameDuplicated);
