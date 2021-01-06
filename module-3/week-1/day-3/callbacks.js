function myFunctionOne(cb) {
  //   console.log(cb);
  let x = 1;
  cb(x);
}

function mySecondFunction() {
  myFunctionOne(function (valueFromFunctionOne) {
    console.log(valueFromFunctionOne);
    // console.log("I am beinged called");
  });
}

mySecondFunction();
