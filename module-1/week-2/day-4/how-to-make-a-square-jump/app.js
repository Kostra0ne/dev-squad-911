import { player } from "./player.js";
import { world } from "./world.js";
import { Obstacle } from "./Obstacle.js";


let frameID;
let tick = 0;
let time = 0;
const obstacles = [];
obstacles.push(new Obstacle()); 


function draw() {

  world.checkCollision((collision) => {
    if (collision) player.hurt();
    player.draw();
  });

  tick++;
  if (tick % 60 === 0) {
    time++;
    // obstacles.push(new Obstacle());
    world.setClock(time);
  }

  frameID = requestAnimationFrame(draw);
}

world.listen();

// kickstart
frameID = requestAnimationFrame(draw); // starts the animation frame
// animation frame is somewhat behaving as setInterval
