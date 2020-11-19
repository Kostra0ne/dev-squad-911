export const create = (tagName, attrs) => {
  const el = document.createElement(tagName);
  for (let prop in attrs) {
    el[prop] = attrs[prop];
  }
  return el;
};

export const append = (parent, child) => {
  return parent.appendChild(child);
};

export const html = (parent, markup) => {
  parent.innerHTML = markup;
};

export const remove = (el) => {
  return el.remove();
};

export * as element from "./dom-manipulation.js";
