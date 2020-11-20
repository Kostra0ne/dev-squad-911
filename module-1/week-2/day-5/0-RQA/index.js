function lookForYourGear(successCallback, failureCallback) {
  setTimeout(() => {
    const rand = Math.random();
    if (rand > 0.5) {
      console.log("2 - i fetched all my gear !!! i'm ready to go");
      successCallback();
    } else {
      console.log("2 - oh no ! my map is missing : /");
      failureCallback();
    }
  }, 5000);
}

function stayHome() {
  console.log("3 - oh damn i'm stuck here");
}

function startCar() {
  console.log("3 - let's rooooooll !!!");
}

function startJourney() {
  console.log("1 -  wanna start my journey... but i missing my gear");
  lookForYourGear(startCar, stayHome);
//   startCar();
}

startJourney();

function foo() {
    setTimeout(() => {
        return "foo"
    }, 2000);
}


const bar = foo();
// ?

console.log("");

