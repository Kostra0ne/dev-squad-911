// textContent

const myInput = document.getElementById("text-input");
const buttonAction4 = document.getElementById("action-4");
const pageBody = document.querySelector("body");
const myParagraph = document.getElementById("input-value");

// console.log("pageBody");
// console.log(pageBody);
// console.log(pageBody[0].style);

// the events are standardised :
// https://developer.mozilla.org/en-US/docs/Web/Events

myInput.addEventListener("input", function () {
  // console.log("> the current text input value is : ", myInput.value);
  if (myInput.value === "") {
    myParagraph.textContent = "no value so far";
  } else {
    myParagraph.textContent = myInput.value;
  }
});

buttonAction4.addEventListener("click", function () {
//   console.log("button has been clicked !");
  if (pageBody.style.backgroundColor === "lightblue") {
    pageBody.style.backgroundColor = "white";
  } else {
    pageBody.style.backgroundColor = "lightblue";
  }
});

// D.I.Y 1
// WRITE THE CURRENT INPUT'S VALUE AS THE PARAGRAPH'S TEXTCONTENT
// BONUS : if the input's value is empty, set the paragraph text to :
// "... no value so far"

// D.I.Y 2
// change the body's background color when the user clicks on the page
// BONUS : if the background is already set, get back to a white background

// Code along : create a simple todo list ( with events and innerHTML )
