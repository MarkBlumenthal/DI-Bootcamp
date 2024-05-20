interface Person {
    name: string;
    age: number;
}

function createPerson(name: string, age: number): Person {
    return { name, age };
}

const person1 = createPerson("Mark B", 35);
console.log(`Name: ${person1.name}, Age: ${person1.age}`);

const person2 = createPerson("Aviv B", 34);
console.log(`Name: ${person2.name}, Age: ${person2.age}`);
