// // #exercise-1

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// // Display the colors in the specified order
// colors.forEach((color, index) => {
//   console.log(`${index + 1}# choice is ${color}.`);
// });

// // Check if the array includes "Violet"
// if (colors.includes("Violet")) {
//   console.log("Yeah");
// } else {
//   console.log("No...");
// }


// #**************************************************************************************************************#


// #exercise-2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//   // Determine the correct ordinal suffix
//   let suffix = (index + 1) <= 3 ? ordinal[index + 1] : 'th';
  
//   // Special case for numbers ending in 11-13
//   const exception = (index + 1) % 100 >= 11 && (index + 1) % 100 <= 13;
//   suffix = exception ? 'th' : suffix;

//   console.log(`${index + 1}${suffix} choice is ${color}.`);
// });



// #***********************************************************************************************************#




// #exercise-3

// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// ['U', 'S', 'A']
// [undefined, undefined]

//  #****************************************************************************************************************# 




// #exercise-4


// const users = [
//   { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//   { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//   { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//   { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//   { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//   { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//   { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
// ];

// const welcomeStudents = users.map(user => `Hello ${user.firstName}`);


// const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');


// const lastNameOfFullStackResidents = users
//   .filter(user => user.role === 'Full Stack Resident')
//   .map(user => user.lastName);


//   console.log(welcomeStudents);
//   console.log(fullStackResidents);
//   console.log(lastNameOfFullStackResidents);



// #********************************************************************************************************#



// #exercise-5

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const epicPhrase = epic.reduce((accumulator, currentValue) => accumulator + " " + currentValue);

// console.log(epicPhrase);


// #***********************************************************************************************************#



// #exercise-6


// const students = [
//   {name: "Ray", course: "Computer Science", isPassed: true}, 
//   {name: "Liam", course: "Computer Science", isPassed: false}, 
//   {name: "Jenner", course: "Information Technology", isPassed: true}, 
//   {name: "Marco", course: "Robotics", isPassed: true}, 
//   {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//   {name: "Jamie", course: "Big Data", isPassed: false}
// ];

// // Filter out students who passed
// const studentsPassed = students.filter(student => student.isPassed);

// // Congratulate each passing student
// studentsPassed.forEach(student => {
//   console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
// });

