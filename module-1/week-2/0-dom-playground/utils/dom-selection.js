export const all = (selector) => document.querySelectorAll(selector);

export const byId = (id) => document.getElementById(id);

export const one = (selector) => document.querySelector(selector);

export * as find from "./dom-selection.js";
