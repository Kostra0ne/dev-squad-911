const hackers = [
  { name: "Haroon", email: "haroon@gmail.com" },
  { name: "Liz", email: "liz@dev.co" },
  { name: "Yang", email: "ceo@startup.io" },
  { name: "Kim", email: "kim@code.org" },
];

function handleClick(evt) {
  // toggle a CSS className is-active on the evt.target object
}

// 1 loop through the hackers array with forEach

// 2 Create some elements
//   - create one li per hacker with document.createElement(tagName)
//   - add a className property with value "hacker"
//   - add the name and the email as textContent
//   - listen to clicks on each li : associate the handleClick function

// 3 Insert each created li in the ul#dynamic-ironhackers with element.appendChild(child)

// 4 Code the handleClick function :
// - add/remove the is-active CSS class on the clicked element
