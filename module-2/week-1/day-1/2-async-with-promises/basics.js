function sayHello(callback) {
  //   console.log("hello !");
  callback("hello Squad !");
}

function sayGoodbye() {
  console.log("goodbye !");
}

function performActionLater(actionCallback, delay = 1000, nextCallback) {
  // set a default value of 2secs for delay (if no deay is provided as argument)
  setTimeout(() => actionCallback(nextCallback), delay);
}

performActionLater(sayHello, 5000, function (finalValue) {
  console.log(finalValue);
});

// performActionLater(sayGoodbye);

console.log("program continues ....");
