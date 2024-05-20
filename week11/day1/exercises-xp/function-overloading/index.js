"use strict";
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    throw new Error("Invalid. Arguments must be the same type either numbers or strings.");
}
const result1 = add(5, 10);
console.log(`${result1}`);
const result2 = add("Hello, ", "World!");
console.log(`${result2}`);
