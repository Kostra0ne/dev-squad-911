// export default class Player {
//   constructor() {
//     this.name = n;
//     this.score = 0;
//   }

//   setScore(newScore) {
//     this.score = newScore;
//   }
// }

function privateLogic() {
  // should remain in player.js
}

export class Player {
  constructor(n) {
    this.name = n;
    this.score = 0;
  }

  setScore(newScore) {
    this.score = newScore;
  }
}

export const players = [];


// export * as foo from "./player.js";
// export * from "./player.js";