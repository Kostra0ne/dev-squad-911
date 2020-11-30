function fetchAValue() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   const x = Math.random();
    //   if (x > 0.5) resolve("wahouuu");
    //   else reject("oh no ! the random value in to low");
    // }, 1000);
  });
}

// MDN : Promise => useful clues

fetchAValue()
  .then((accessValue) => {
    console.log(accessValue);
  })
  .catch((rejectedMessage) => {
    console.error(rejectedMessage);
  });

// D.I.Y Write your own first promise
// implement a success(resolve) and a failure (reject)
// for a simple async (setTimeout) piece of logic

const player = { name: "toto hero", life: 100 };
const enemy = { name: "goblin", attack: 10 };
const rollDice = () => (Math.random() > 0.5 ? "success" : "failure");

function launchAttackRound() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    if (rollDice() === "success") {
      resolve("yes !!! you defeated the enemy");
    } else {
      player.life -= enemy.attack;
      reject("oh no ! the enemy dealt some damages !!!");
    }
    //}, 2000); // action will be performed in 2 secs
  });
}

function goToNextLevel() {
  console.log("here success");
  //   launchAttackRound();
}

function gameover() {
  console.log("game over");
}

// launchAttackRound(0).then(goToNextLevel).catch(gameover);

launchAttackRound()
  .then((resultSuccess) => {
    console.log(resultSuccess);
  })
  .catch((resultDefeat) => {
    console.log(resultDefeat, player.life);
  });

// const pendingPromise = new Promise(() => {});
// console.log(pendingPromise);
