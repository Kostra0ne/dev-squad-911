const blocks = document.querySelectorAll(".block");
const counter = document.getElementById("count-active");

function toggleCssClass(target) {
  console.log("clicked", target);
  target.classList.toggle("is-active");
}

function countActiveBlocks() {
  const activatedBlocks = document.querySelectorAll(".block.is-active");
  const count = activatedBlocks.length;
  counter.textContent = count;
  return count;
}

function handleClick(evt) {
  // console.log(evt.target);
  toggleCssClass(evt.target);
  countActiveBlocks();
}

blocks.forEach(function (block) {
  block.onclick = handleClick;
});

/*
const handleBlockClick = (e) => e.target.classList.toggle("is-active");
blocks.forEach((block) => (block.onclick = handleBlockClick));
*/
