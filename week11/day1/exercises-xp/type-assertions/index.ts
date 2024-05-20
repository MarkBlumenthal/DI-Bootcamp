const inputElement = document.getElementById("nameInput") as HTMLInputElement;
const buttonElement = document.getElementById("submitButton") as HTMLButtonElement;

buttonElement.addEventListener("click", () => {
    const name = inputElement.value;
    alert(`Hello, ${name}!`);
});
