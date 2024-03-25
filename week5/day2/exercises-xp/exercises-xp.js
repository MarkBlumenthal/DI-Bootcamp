// // exercise1 - part one

// // // #1
// const people = ["Greg", "Mary", "Devon", "James"];
// // Find the index of "Greg"
// const index = people.indexOf("Greg");
// // If "Greg" is found, remove him from the array
// if (index > -1) {
//   people.splice(index, 1);
// }
// // Log the updated array to the console
// console.log(people);


// // #2
// const people = ["Greg", "Mary", "Devon", "James"];
// // Use map to create a new array, replacing "James" with "Jason"
// const updatedPeople = people.map(person => person === "James" ? "Jason" : person);
// // Log the updated array to the console
// console.log(updatedPeople);



// // #3
// const people = ["Mary", "Devon", "James"]; 

// // Replace "James" with "Jason"
// const updatedPeople = people.map(person => person === "James" ? "Jason" : person);

// // Add "Alex" to the end of the array
// updatedPeople.push("Mark");

// // Log the updated array to the console
// console.log(updatedPeople);




// // #4
// const people = ["Mary", "Devon", "Jason", "Mark"]; 

// // Find the index of "Mary"
// const index = people.indexOf("Mary");

// // Log the index of "Mary" to the console
// console.log(index);




// // #5
// const people = ["Mary", "Devon", "Jason", "Mark"];

// // Make a copy of the people array without "Mary" or "Mark"
// const peopleCopy = people.slice(1, -1);

// // Log the copy to the console
// console.log(peopleCopy);





// // #6
// const people = ["Mary", "Devon", "Jason", "Mark"];

// // Find the index of "Foo"
// const index = people.indexOf("Foo");

// // Log the index to the console
// console.log(index);

// This code will log -1 to the console because "Foo" is not an element of the people array.





// // #7
// const people = ["Mary", "Devon", "Jason", "Mark"];

// // Get the last element of the array
// const last = people[people.length - 1];

// // Log the last element to the console
// console.log(last);

// // the output will be "Mark", which is the last element of the array.

// #******************************************************************************************************#




// #part two:

// #1

// const people = ["Mary", "Devon", "Jason", "Mark"];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//   }



// #2

// const people = ["Mary", "Devon", "Jason", "Yourname"];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]); // Log each person to the console
//   if (people[i] === "Devon") {
//     break; // Exit the loop after logging "Devon"
//   }
// }



// #*****************************************************************************************************#




// #Exercise 2:
// #1

// const colors = ["blue", "green", "red", "yellow", "purple"];




// #2                       #using a for loop
// const colors = ["blue", "green", "red", "yellow", "purple"];

// for (let i = 0; i < colors.length; i++) {                 
//   console.log(`My #${i + 1} choice is ${colors[i]}`);
// }




// #3
// const colors = ["blue", "green", "red", "yellow", "purple"];
// // Array of ordinal suffixes
// const suffixes = ["st", "nd", "rd", "th", "th"];

// for (let i = 0; i < colors.length; i++) {
//   // Determine the correct suffix
//   let suffix = suffixes[i];
//   console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
// }





// #*******************************************************************************************************#



// #Exercise 3

// #1
// // Prompt the user for a number
// let userInput = prompt("Please enter a number:");

// // Check if the user pressed Cancel
// if (userInput !== null) {
//   // Convert the input from a string to a number
//   let number = Number(userInput);

//   // Check the data type of the converted input
//   console.log("Data type of the input is:", typeof number);

//   // Additional check to confirm the user entered a valid number
//   if (!isNaN(number)) {
//     console.log("You entered a valid number:", number);
//   } else {
//     console.log("The entered value is not a valid number.");
//   }
// } else {
//   console.log("User cancelled the prompt.");
// }





// #2 
// using a do while loop
// let number;

// do {
//   // Prompt the user for a number
//   let userInput = prompt("Please enter a number:");
  
//   // Convert the input from a string to a number
//   number = Number(userInput);
  
//   // Optionally, check if the user pressed Cancel and break out of the loop
//   if (userInput === null) {
//     console.log("User cancelled the prompt.");
//     break;
//   }
  
// } while (number < 10);

// console.log("You entered a number greater than or equal to 10:", number);




// #******************************************************************************************************#





// #Exercise 4



// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }


// #2

// console.log(building.numberOfFloors);


// #3

// console.log("Number of apartments on the first floor:", building.numberOfAptByFloor.firstFloor);
// console.log("Number of apartments on the third floor:", building.numberOfAptByFloor.thirdFloor);


// #4

// const secondTenantName = building.nameOfTenants[1]; // "Dan" is the second tenant
// const secondTenantRooms = building.numberOfRoomsAndRent.dan[0]; // Access the number of rooms for "Dan"

// console.log(`The name of the second tenant is ${secondTenantName} and the number of rooms in his apartment is ${secondTenantRooms}.`);


 

// #5

// // Get the rents for Sarah, David, and Dan
// const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// const davidRent = building.numberOfRoomsAndRent.david[1];
// const danRent = building.numberOfRoomsAndRent.dan[1];

// // Check if the sum of Sarah's and David's rent is bigger than Dan's rent
// if (sarahRent + davidRent > danRent) {
//     // If true, increase Dan's rent to 1200
//     building.numberOfRoomsAndRent.dan[1] = 1200;
// }

// console.log(`Dan's new rent: $${building.numberOfRoomsAndRent.dan[1]}`);





// #*******************************************************************************************************#








// #Exercise 5

// #1

// const family = {
//     father: "John",
//     mother: "Jane",
//     son: "Mike",
//     daughter: "Emma"
// };


// #2

// for (let key in family) {
//     console.log(key);
// }


// #3

// for (let key in family) {
//     console.log(family[key]);
// }


// #**************************************************************************************************#





// #Exercise 6

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   };
  
//   let sentence = "";
//   for (let key in details) {
//       // Append each key-value pair to the sentence
//       sentence += `${key} ${details[key]} `;
//   }
//   // Use trim() to remove any trailing space
//   console.log(sentence.trim()); 
  


// #*********************************************************************************************************#





// #Exercise 7


// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// // Create an array of first letters and sort it
// const societyName = names.map(name => name[0]).sort().join('');

// console.log(societyName);











