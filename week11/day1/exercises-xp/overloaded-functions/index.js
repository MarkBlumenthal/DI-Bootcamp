"use strict";
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return "Hello, World!";
    }
}
console.log(greet());
console.log(greet("Mark"));
console.log(greet("Aviv"));
