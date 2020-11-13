// Iteration 1: Names and Input

console.log("\n\nITERATION 1 ###");

var hacker1 = "Hamilton";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Haroon";
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

console.log("\n\nITERATION 2 ###");

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}


// Iteration 3: Loops

console.log("\n\nITERATION 3 ###");
console.log("\nA --");
var hacker1toUpperCase = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1toUpperCase += hacker1[i].toUpperCase() + " ";
}

hacker1toUpperCase = hacker1toUpperCase.trim();

console.log(hacker1toUpperCase);

var hacker1toUpperCaseReversed = "";

for (let i = hacker1toUpperCase.length - 1; i >= 0; i--) {
  hacker1toUpperCaseReversed += hacker1toUpperCase[i];
}
console.log("\nB --");
console.log(hacker1toUpperCaseReversed);


// LEXICOGRAPHIC ORDER

let score = 0;

for (let i = 0; i < hacker1.length; i++) {
  if (hacker2[i] === undefined) break;
  score += hacker1[i].localeCompare(hacker2[i]);
}

console.log("\nC --");

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (score < 0) {
  console.log("The driver's name goes first.");
} else {
  console.log("Yo, the navigator goes first definitely.");
}

//Bonus 1

console.log("\n\nBONUS 1");
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem tellus, rhoncus non orci sed, tempus ultricies turpis. Vestibulum efficitur, velit ut malesuada vulputate, lacus eros suscipit magna, sed facilisis leo diam ut odio. Morbi purus lectus, aliquam in pellentesque id, ullamcorper quis lorem. Nam aliquam neque quis massa ultrices malesuada. Nunc feugiat facilisis consequat. Quisque commodo, enim quis dapibus ornare, libero ipsum dapibus sem, condimentum lobortis justo velit at erat. In maximus dapibus viverra. Pellentesque ut mauris vitae massa lobortis efficitur. Maecenas in lacus id orci malesuada vestibulum. Vestibulum ac malesuada ex. Nulla consectetur pharetra turpis et dignissim. Suspendisse mattis odio eget nisi ultrices aliquet. Morbi ac risus lacus.

Nam commodo fermentum turpis, in mattis ante aliquam vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc arcu est, dignissim non eleifend scelerisque, dignissim at purus. Quisque tempus sem a sapien blandit, at finibus ipsum facilisis. Pellentesque egestas ex sit amet nisl tempus, ut viverra quam fringilla. Curabitur convallis imperdiet magna, a pellentesque orci vestibulum ut. Nunc commodo sed elit sed pretium.

In hac habitasse platea dictumst. Etiam congue eget mi id faucibus. Sed faucibus consectetur justo, vitae tincidunt ex porta ac. Integer vulputate tellus malesuada eros molestie finibus. Mauris urna nibh, tempus id ex non, commodo condimentum orci. Ut rutrum orci risus, eget efficitur libero dignissim a. Aliquam id consectetur justo. Curabitur congue lacus sed lectus consequat eleifend. Suspendisse in semper nulla, eu molestie urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In nec condimentum nibh. Proin lacinia venenatis nunc.`;

//a Solution with regex:
console.log("\n----- lorem length -----\n");
console.log(lorem.split(/\s+/g).length);
console.log("\n");
//a Solution with a for loop:

var count = 1;
var newLineCount = 0;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === "\n") newLineCount++;
  if (lorem[i] === " ") count++;
}
//The reason for the newLineCount variable is because there are 2 newLine characters between the end of a paragraph
// and the beginning of a paragraph, therefore we create a variable to count the amount of
// new lines, and we devide it by 2 since there are 2 new lines before the start of another word/paragraph.

count += newLineCount / 2;

//Bonus palindrome doing it the long way:

var sentences = [
  "hey",
  "KayaK",
  "this is not a palindrome :)",
  "Mr Owl, Ate My Metal WorM !",
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon.",
  "bye..."
];

function format(word) {
  return word.toLowerCase().replace(/\W/g, "");
}

function estPalindrome(sentence) {
  for (let i = 0, j = sentence.length - 1; i < sentence.length; i++, j--) {
    if (sentence[i] !== sentence[j]) return false;
  }
  return true;
}

const estAussiPalindrome = (mot) => mot === [...mot].reverse().join("");

for (let i = 0; i < sentences.length; i++) {
  let check1 = estPalindrome(format(sentences[i]));
  let check2 = estAussiPalindrome(format(sentences[i]));

  console.log(
    (check1 && check2 ? "is palindrome -> " : "not palindrome -> ") + sentences[i]
  );
}

