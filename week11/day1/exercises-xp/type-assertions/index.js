"use strict";
const inputElement = document.getElementById("nameInput");
const buttonElement = document.getElementById("submitButton");
buttonElement.addEventListener("click", () => {
    const name = inputElement.value;
    alert(`Hello, ${name}!`);
});
