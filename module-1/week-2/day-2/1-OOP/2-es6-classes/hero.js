class Human {
  constructor(name) {
    this.name = name;
  }

  greetings() {
    return "Hello, im am " + this.name;
  }
}

class Hero extends Human {
  constructor(name, power) {
    super(name);
    this.power = power;
  }

  greetings() {
    return super.greetings() + " ! and i'm here to save you";
  }
}

const gui = new Human("gui");
const batman = new Hero("batman", "technologic gadgets");

console.log(gui.greetings())
console.log(batman.greetings());