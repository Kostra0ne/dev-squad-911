const targetParag = document.getElementById("current-value");
const inputRange = document.getElementById("input-range");
const spanValue = targetParag.querySelector(".value");
const maxValue = Number(inputRange.max);
const minValue = Number(inputRange.min);
const greenToYellow = (maxValue - minValue) / 3;
const yellowToRed = greenToYellow * 2;

function chooseCSSClass(value) {
  let css;
  if (value <= greenToYellow) {
    css = "danger";
  } else if (greenToYellow < value && value < yellowToRed) {
    css = "warning";
  } else css = "success";

  return css;
}

function applyCSS(currentValue) {
  targetParag.className = chooseCSSClass(currentValue);
}

function initialize() {
  applyCSS(inputRange.value);
  setText(inputRange.value);
}

function setText(value) {
  spanValue.textContent = value;
}

// consolidate: event listeners + prog kickstart
initialize();
inputRange.oninput = initialize; // shortcut
