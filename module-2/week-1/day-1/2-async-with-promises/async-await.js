const rollDice = () => Math.random() > 0.5;

function launchAttackRound() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("rolling dice");
      if (rollDice()) {
        resolve("yes !!! you defeated the enemy");
      } else {
        reject("oh no ! the enemy dealt some damages !!!");
      }
    }, 2000); // action will be performed in 2 secs
  });
}

async function start() {
  try {
    await launchAttackRound();
    console.log("you defeated the enemy");
    console.log("program continues");
  } catch (err) {
    console.log(err);
  }
}

start();

// 1 - start
// 2 wait for an upcoming response...
//  2.1 response ok => proceed
//  2.2 response not ok => proceed error
