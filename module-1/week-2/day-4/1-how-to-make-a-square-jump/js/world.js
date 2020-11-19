import { player } from "./player.js";
import { obstacle } from "./obstacle.js";

export const element = document.getElementById("board");
export const clock = document.getElementById("clock");

// logic

export function checkCollision(callback) {
  // todo here, code collisio, logic
  // check mdn element.getBoundingClientRect 
  // (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
  callback(false); // send true/false if colliding
}

export function setClock(time) {
  clock.textContent = time;
}

// event handlers

function handleKeyUp(evt) {
  if (evt.keyCode === 32) player.jump();
}

function handleKeyPress(evt) {
  // console.log(evt.keyCode);
  if (evt.keyCode === 32) player.jump();
  if (evt.keyCode === 113) player.move("left");
  if (evt.keyCode === 100) player.move("right");
}

// event listeners
export function listen() {
  window.addEventListener("keypress", handleKeyPress);
  window.addEventListener("keyup", handleKeyUp);
}

export * as world from "./world.js";
