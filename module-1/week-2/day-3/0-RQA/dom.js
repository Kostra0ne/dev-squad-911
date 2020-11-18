const btn = document.querySelector("#button-1");
// const btn = document.getElementById("button-1");

function handleClick(evt) {
  console.log(evt.target);
}

btn.addEventListener("click", handleClick.bind("toto"));



