
// 6 falsy values

// false
// null
// undefined
// 0
// "" (empty string)
// NaN

console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));


if (NaN) {

} else {
    console.log("duh...");
}

// any other value is considered truthy

console.log(Boolean(-10000));

var x; // undefined

console.log("°°°°°°°°°");

console.log(Boolean(x));

x = "yaha !!!";

console.log(Boolean(x));

x = 0;

console.log(Boolean(x));