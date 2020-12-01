async function doStuffInFuture(index) {
  function fetchData() {
    return new Promise((res, rej) => {
      const x = Math.random();
      if (x < 0.1) throw new Error("meh...not working");
      setTimeout(() => {
        res("yay");
      }, 1000);
    });
  }

  const res = await fetchData();
  return index + " " + res;
}

(async function () {
  // 2 OPTIONS HERE : use for or for..of loop

  //   for (let i = 0; i < 10; i++) {
  //     let x = await doStuffInFuture(i);
  //     console.log(x);
  //   }
  return;
  for (let i of new Array(1, 2, 3, 4)) {
    try {
      let x = await doStuffInFuture(i);
      console.log(x);
    } catch (err) {
      console.error(err);
    }
  }
})();

const promise = new Promise((resolveCallback, rejectCallback) => {});


