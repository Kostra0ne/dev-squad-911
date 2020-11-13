/*
    G - simple function
    Declare and run a function f
    f takes val as argument
    f returns val concatenated with it’s type
*/

// function f(val) {
//return val + " " + typeof val;
//return `${val} ${typeof val}`;
// }

// const f = (val) => `${val} ${typeof val}`;

// const res = f("calypso");

// console.log(res);

function f(val) {
  let t = typeof val;
  let x = val + t;

  console.log(typeof x);
  return val + t;
}

console.log(f({}))

