class Obstacle {
  constructor() {
    this.create();
  }

  create() {
    const el = document.createElement("div");
    el.className = "obstacle";
    document.getElementById("board").appendChild(el);
  }
}

const obstacles = [];

export const obstacle = {
  Instance: Obstacle,
  list: (function () {
    var l = [];
    return function () {
      return {
        push: function (obs) {
          console.log(l.push(obs));
          return l;
        },
      };
    };
  })()
};
