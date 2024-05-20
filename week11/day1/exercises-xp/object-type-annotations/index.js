function createPerson(name, age) {
    return { name: name, age: age };
}
var person1 = createPerson("Mark B", 35);
console.log("Name: ".concat(person1.name, ", Age: ").concat(person1.age));
var person2 = createPerson("Aviv B", 34);
console.log("Name: ".concat(person2.name, ", Age: ").concat(person2.age));
