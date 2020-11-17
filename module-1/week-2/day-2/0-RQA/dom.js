// D.O.M IS AN A.P.I
// Application Programming Interface
// Document Object Model

// document.querySelector
// document.querySelectorAll
// element.querySelector
// element.querySelectorAll

// document.getElementById

// document.getElementsByTagName
// document.getElementsByClassName
// element.getElementsByTagName
// element.getElementsByClassName

const parent = document.getElementById("text-intro");

if (parent !== null) {
  parent.querySelectorAll(".txt");
  parent.getElementsByClassName("txt");
}

document.querySelectorAll("#text-intro .txt");
document.getElementById("text-intro").querySelector;

//

const thingParent = document.querySelector("#thing");

console.log(">>>>> ", thingParent);

// thingParent.innerHTML += "<span class=\"txt\">hoho</span>";

const span = document.createElement("span");
span.textContent = "hoho";
thingParent.appendChild(span);
