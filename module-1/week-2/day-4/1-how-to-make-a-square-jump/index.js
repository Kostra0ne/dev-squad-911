import { player } from "./js/player.js";
import { world } from "./js/world.js";
import { obstacle } from "./js/Obstacle.js";


let frameID;
let tick = 0;
let time = 0;

// obstacle.list.push(new obstacle.Instance()); 
console.log(obstacle.list().push(new obstacle.Instance()));
function draw() {

  world.checkCollision((collision) => {
    if (collision) player.hurt();
    player.draw();
  });

  tick++;

  if (tick % 60 === 0) {
    time++;
    world.setClock(time);
  }

  if (tick % 320 === 0) {
    const x  = obstacle.list().push(new obstacle.Instance())
    world.setClock(time);
  }


  frameID = requestAnimationFrame(draw);
}

world.listen();

// kickstart
frameID = requestAnimationFrame(draw); // starts the animation frame
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
