const button = document.getElementById("toggle-background");
const body = document.querySelector("body");

const handleToggle = () => body.classList.toggle("is-active");

if (button !== null) button.onclick = handleToggle;
