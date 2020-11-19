// lab pain points

// use callbacks when needed

/*
function delayedAction(process, resolve, timeout = 2000) {
  setTimeout(() => {
    const res = process();
    resolve(res);
    // returns undefined
  }, timeout);
  // returns undefined
}

function sayYata() {
  return "yata !!!";
}

function logValue(value) {
  console.log(">>> wonders of callbacks", value);
}


delayedAction(sayYata, logValue, 3000);
*/

// this binding

class Player {
  constructor(name) {
    this.name = name;
  }

  jump() {
    console.log("jumping...");
    setTimeout(() => {
      // fat-arrow here !
      console.log(`${this.name} finished jumping`);
    }, 2000);
  }
}

const player = new Player("Eva");
player.jump();

// const singletonPlayer = {
//     name: "Jimmy",
//     jump: function() { // no fat-arrow here !!!
//         console.log("jumping...");
//         setTimeout(() => {
//           console.log(`${this.name} finished jumping`);
//         }, 1000);
//       }
// };

// singletonPlayer.jump();
