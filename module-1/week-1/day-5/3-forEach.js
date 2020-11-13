const allUsers = ["jill", "hakim", "suzane", "yang", "jose"];
const fruits = ["pear", "peach", "apple", "cherry"];

console.log(Array.prototype.forEach);

// forEach will loop through an array and access each array(s value)

console.log("----- 1 ----");

allUsers.forEach(function (user, index) {
  console.log(index, user);
});

function displayUser(user, index, fullArray) {
  console.log(user, index, fullArray);
}

console.log("\n----- 2 ----");

allUsers.forEach(displayUser);

const showMeDataFromList = (value) => console.log(value);

console.log("--------------------");
allUsers.forEach(showMeDataFromList);

console.log("--------------------");
fruits.forEach(showMeDataFromList);

console.log("\n----- 3 ----");

function displayListItemWithFor(arr) {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
  console.log("-------");
}

displayListItemWithFor(allUsers);
displayListItemWithFor(fruits);

const countries = ["spain", "russia", "germany", "france", "usa"];

// use the forEach loop to display each country in the console !!!
// bonus : display the value's index as well ;)

console.log("\n----- 4 ----");

countries.forEach(function (country) {
  console.log(country);
});

// const whatsHere = countries.forEach((country) => console.log(country));

// console.log("??? > ", whatsHere);

// Array.prototype.myForEach = function (callback) {
//   //   console.log(">>> ", this);
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i]);
//   }
// };

// countries.myForEach(function (country) {
//   console.log(":) => ", country);
// });
