function processInput(input: number | string | boolean): number | string | boolean {
    if (typeof input === "number") {
        return input * input;
    } else if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "boolean") {
        return !input;
    } else {
        throw new Error("Unsupported input type");
    }
}

console.log(processInput(10));         
console.log(processInput("baby"));    
console.log(processInput(true));       
console.log(processInput(false));      
