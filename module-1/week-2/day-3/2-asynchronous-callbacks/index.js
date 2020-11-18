console.log("ready to rock :)");

// 0 - what is synchronous ?

const x = 0;

// 1 - what is asynchronicity ?

// define some action that will happen in the future

// 2 - when use async ?

// when you need to defined such actions, you may use

// 3 - how to use async built-in functions

// ex setTimeout

const timeoutId = setTimeout(() => {
  console.log("timed out ...");
}, 5000); // the time out is expressed in ms

// clearTimeout(timeoutId);

// ex setInterval
var count = 0;

const intervalId1 = setInterval(() => {
  count++;
  if (count === 5) clearInterval(intervalId1);
}, 1000);

const intervalId2 = setInterval(() => {
  //   console.log("world");
}, 2000);

// console.log(timeoutId, intervalId2, intervalId1);
// 4 - canceling async operations

// ex clearTimeout

// ex clearInterval

//  MAKE THE BOX APPEAR

function makeBoxAppear() {
  const btn = document.getElementById("my-btn");
  const target = document.getElementById("start-game");

  function displayBox() {
    target.classList.remove("is-faded");

    setTimeout(() => {
      target.classList.add("is-faded");
    }, 2000);
  }

  btn.onclick = () => setTimeout(displayBox, 2000);

  //   btn.onclick = function () {
  //     setTimeout(displayBox, 2000);
  //   };
}

makeBoxAppear();
