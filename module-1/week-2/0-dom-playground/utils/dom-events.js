import { find } from "./dom-selection.js";

export const add = (target, callback, eventType = "click") => {
  if (!callback || typeof callback !== "function")
    throw new Error("expected callback to be of type function");

  if (
    !target ||
    (typeof target === "object" && !(target instanceof HTMLElement))
  )
    throw new Error(
      "expected target to be string, or object implementing HTMLElement interface"
    );

  let el;

  if (typeof target === "string") el = find.one(target);
  else el = target;

  el.addEventListener(eventType, callback);
};

export const remove = (target, callback, eventType) => {
  if (!callback || typeof callback !== "function")
    throw new Error("expected callback to be of type function");

  if (!(target instanceof HTMLElement))
    throw new Error(
      "expected target an object implementing the HTMLElement interface"
    );

  target.removeEventListener(eventType, callback);
};

export * as event from "./dom-events.js";
