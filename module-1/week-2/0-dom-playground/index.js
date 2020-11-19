// UTILITY
import { find } from "./utils/dom-selection.js";
import { event } from "./utils/dom-events.js";
import { element } from "./utils/dom-manipulation.js";
import { VNode } from "./utils/v-node.js";
// DATA
import { users } from "./data/users.js";

console.log(users);

const handleEvent = (evt) => {
  console.log(evt);
};

const handleSelect = (evt) => {
  console.warn("changed");
  // console.log(evt);
  // console.log(evt.target.selectedIndex);
  const selectedIndex = evt.target.selectedIndex;
  const options = evt.target.options;
  const currentValue = options[selectedIndex].value;
  console.log(currentValue);
};

/*

event.add(find.one("input[type=color]"), handleEvent, "input");

event.add(find.one(".btn"), handleEvent, "click");

console.log(find.all("button"));
*/

/*
const select = find.byId("select-os");;

console.log(select);

event.add(select, handleSelect, "change")
*/

function displayUsers(user) {
  const el = element.create("li", { className: "user" });
  el.textContent = user.name;
  // find.byId("target-dom-manipulation").append(el);
}

users.forEach(displayUsers);
