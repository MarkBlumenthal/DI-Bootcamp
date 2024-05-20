function getDetails(personName: string, age: number): [string, number, string] {
    const greeting = `Hello, my name is ${personName} and I am ${age} years old.`;
    return [personName, age, greeting];
}

const details = getDetails("Mark B", 35);

const [returnedName, returnedAge, greeting] = details;

console.log(`Name: ${returnedName}`);
console.log(`Age: ${returnedAge}`);
console.log(`Greeting: ${greeting}`);

