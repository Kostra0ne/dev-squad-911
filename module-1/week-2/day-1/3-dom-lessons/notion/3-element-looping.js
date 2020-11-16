// fetch all hackers
// loop throug the list with a foreach OR for loop
// display each element's textContent (Liz, Bill, Joe)

const hackers = document.getElementById("ironhackers");
const allHackers = document.querySelectorAll("#ironhackers .hacker");

console.log(allHackers); // the full list (of li elements)

// looping with for

for (let i = 0; i < allHackers.length; i++) {
  console.log(allHackers[i].textContent); // each element in the allHackers list
}

console.log("-----");

// looping with forEach

allHackers.forEach(function (hacker) {
  // console.log(typeof hacker);
  console.log(hacker.textContent);
});

console.log("-----");

// using the parent's children property

// console.log(hackers.children); // <-- is an HTMLCollection

// small trick with HTML collection
// HTMLCollections don't know about forEach ...
// but there is a trick :

Array.from(hackers.children).forEach((hacker) => {
  console.log(hacker);
});

// same as ...

[...hackers.children].forEach((hacker) => {
  console.log(hacker);
});



