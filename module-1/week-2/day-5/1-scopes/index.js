// 4 :  scopes global / module / block / function

function action() {
  console.log("----->");
  console.log("this 2 ", window);
}

action();

// global is outside any function / module
// global scope in the browser is window

// module scope : you declared a file as module => module scope
// module are in strict mode => by default this is undefined

// block
// console.log(":) =>  ", i);

// if (true) {
//   let i = 2;
//   const PI = Math.PI;
//   console.log(PI);
// } else {
//   let message = "nope";
//   console.log(message);
// }

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (var i = 0; i < 100; i++) {
//   console.log(i);
// }

function scoped(clbk) {
  var i = "toto";
  let count = 0;
  let user = {};

  function process() {
    let count = 10; // shadowing
    console.log(">>", count);
  }

  console.log(">>> ? ", i, count);

  const result = process();

  // clbk(count);
  return count;
}

function access(anyValue) {
  console.log(typeof anyValue);
}

const res = scoped();
access(res);

function doStuff() {
  const player = {name: "brian"};
  return player;
}


let x;

try {
  x = doStuff();

} catch (err) {
  x = null;
}

console.log("--------->", x);
