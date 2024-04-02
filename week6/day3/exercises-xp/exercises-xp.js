// #Exercise-1


// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// #*********************************************************************************************************#



// #Exercise-2


// function displayStudentInfo({first, last}){
//     // Using string concatenation to construct the output string
//     return 'Your full name is ' + first + ' ' + last;
// }


// const result = displayStudentInfo({first: 'Elie', last: 'Schoppik'});
// console.log(result); 



// #****************************************************************************************************************#



// #Exercise-3

// #1

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// // Converting the users object into an array 
// const usersArray = Object.entries(users);

// console.log(usersArray);

// #2

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// let modifiedUsersArray = [];
// for (const [key, value] of Object.entries(users)) {
//     modifiedUsersArray.push([key, value * 2]);
// }

// console.log(modifiedUsersArray);



// #********************************************************************************************************#



// #Exercise-4


// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);

//   Object



// #*********************************************************************************************************#



// #Exercise-5

  // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };

//   number 2 to is correct. It uses super(name) to pass the name to the 
//   parent class.


// #*************************************************************************************************************#




// #Exercise-6


// #1

// Both are false as the first one creates a new array and the second creates a new object


// #2

// const object1 = { number: 5 }; # = 4  because object2 references the same object as object1, which had its number property changed to 4.
// const object2 = object1; #=4 will also output 4 for the same reason as object2; it points to the same object as object1
// const object3 = object2; #=4 because it is assigned to the same as object 2 which is the same as object 1
// const object4 = { number: 5}; #=5 because it is a separate instance that was not affected by the change to object1.

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)



// // #1

// class Animal {
//     constructor(name, type, color) {
//       this.name = name;
//       this.type = type;
//       this.color = color;
//     }
//   }
  

// //   #2
//   class Mammal extends Animal {
//     constructor(name, type, color) {
//       super(name, type, color);
//     }
  
//     sound(animalSound) {
//       return animalSound + " I'm a " + this.type + ", named " + this.name + " and I'm " + this.color;
//     }
//   }
  
 

// //   #3
//   const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
//   console.log(farmerCow.sound("Moooo"));

  






