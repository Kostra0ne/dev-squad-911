const hackers = [ // array containing objects
  { name: "Haroon", email: "haroon@gmail.com" },
  { name: "Liz", email: "liz@dev.co" },
  { name: "Yang", email: "ceo@startup.io" },
  { name: "Kim", email: "kim@code.org" },
];

const ulHackers = document.getElementById("dynamic-ironhackers");

// 2 Create some elements
//   - create one li per hacker with document.createElement(tagName)
//   - add a className property with value "hacker"
//   - add the name and the email as textContent
//   - listen to clicks on each li : associate the handleClick function

function createHackerLi(infos) {
  const li = document.createElement("li"); // is an instanceof HTMLLiElement
  li.className = "hacker"; // add the css class hacker to the current li
  li.textContent = infos.name + " - " + infos.email; // add some text content
  li.onclick = handleClick; // attach an event listener to an event handler
  return li; // returns the created li
}

// 3 Insert each created li in the ul#dynamic-ironhackers with element.appendChild(child)

// 4 Code the handleClick function :
// - add/remove the is-active CSS class on the clicked element
function handleClick(evt) { 
  // by default, any event handler gets access to an evt object as implicit argument
  // console.log(evt);
  // console.log(evt.target); // evt.target is the source of the event
  const clickedHacker = evt.target;
  // below toggle a CSS className is-active on the evt.target object
  clickedHacker.classList.toggle("is-active"); // toggle will add the specified CSS class if not present already, else will remove the specified CSS class
}

// 1 loop through the hackers array with forEach

hackers.forEach(function (hacker) {
  const newhackerLi = createHackerLi(hacker); // returns a new Li object fo Each object
  ulHackers.appendChild(newhackerLi);
});
