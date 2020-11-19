export class Obstacle {
  constructor() {
    this.create();
  }

  create() {
    const el = document.createElement("div");
    el.className = "obstacle";
    document.getElementById("board").appendChild(el);
  }
}
