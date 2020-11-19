export const player = {
  element: document.getElementById("player"),
  lifeBar: document.getElementById("life-bar"),
  life: 100,
  position: {
    x: 0,
    y: 0, 
  },
  isJumping: false,
  hurt() {
    this.life -= 10;
  },
  draw() {
    this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
    this.lifeBar.textContent = this.life
  }, 
  move: function (direction) {
    if (direction === "right" && this.position.x <= 350) this.position.x += 10;
    if (direction === "left" && this.position.x > 0) this.position.x += -10;
  },
  jump: function () {
    if (this.isJumping === true) return;

    this.isJumping = true;
    this.position.y -= 110;

    setTimeout(() => {
      this.position.y += 110;
      this.isJumping = false;
    }, 400);
  },
};
