// #Exercise-1

// #1 - Inside funcOne, the variable a is declared with let and initialized to 5.
// The if condition a > 1 is true, so a is reassigned to 3.
// Therefore, the alert will display "inside the funcOne function 3".

// #1.1
// Running funcOne() in the console will show the alert with the message "inside the funcOne function 3".
// #1.2:
// If a is declared with const instead of let, the assignment a = 3 inside the if block will throw a 
// TypeError because a is a constant and cannot be reassigned.

// #2 Running funcThree() initially will alert "inside the funcThree function 0" because a is still 0 at 
// this point. After funcTwo() is called, a becomes 5.
// Running funcThree() again will now alert "inside the funcThree function 5".
// #2.2
// If the global variable a is declared with const instead of let, funcTwo() will throw a TypeError 
// when trying to reassign a, as const variables cannot be reassigned.


// #3
// Running funcFour() then funcFive() will alert "inside the funcFive function hello".


// #4.1
// Running funcSix() will show the alert with "inside the funcSix function test".

// #4.2
// If the local a inside funcSix is declared with const instead of let, there will be no difference in 
// behavior because the local a does not attempt to reassign its value.


// #5
// #5.1 Running the code will first show "in the if block 5" and then "outside of the if block 2".

// #5.2
// If the block-scoped a inside the if block is declared with const instead of let, 
// there will be no difference in behavior for this particular case because the variable a inside the 
// if block is not reassigned after its declaration.


// #*********************************************************************************************************#






// #Exercise-2

// // Transform `winBattle()` to an Arrow Function
// const winBattle = () => true;

// // Create `experiencePoints` Variable and Assign Using a Ternary Operator
// let experiencePoints = winBattle() ? 10 : 1;

// // Console.log the `experiencePoints` Variable
// console.log(experiencePoints); // This will output 10 because winBattle() returns true.


// #**************************************************************************************************************#




// #Exercise-3


// const isString = (value) => typeof value === 'string';

// console.log(isString('hello')); // true
// console.log(isString([1, 2, 4, 0])); // false


// #*********************************************************************************************************#



// #Exercise-4

// const sum = (a, b) => a + b;


// #************************************************************************************************************#



// #Exercise-5

// // #1
// function kgToGrams(kg) {
//     return kg * 1000;
// }

// // Invoke the function
// console.log(kgToGrams(2)); // Output: 2000

// // #2
// const kgToGramsExpr = function(kg) {
//     return kg * 1000;
// };

// // Invoke the function
// console.log(kgToGramsExpr(2)); // Output: 2000


// // Function declarations are hoisted, allowing them to be used before they are declared. 
// // Function expressions are not hoisted in the same way, so they cannot be used before they are defined.


// const kgToGramsArrow = kg => kg * 1000;

// // Invoke the function
// console.log(kgToGramsArrow(2)); // Output: 2000




// #**********************************************************************************************************#



// #Exercise-6


// (function(numberOfChildren, partnerName, location, jobTitle) {
//     var sentence = "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numberOfChildren + " kids.";
    
//     // Display in the DOM
//     document.body.innerHTML = "<p>" + sentence + "</p>";
// })(2, 'Jon', 'Congo', 'musician');



// #*******************************************************************************************************************#



// #Exercise-7


// (function(userName) {
//     // Assuming the profile picture's URL is static or predefined for this example
//     const profilePicUrl = 'https://example.com/profile-pic.jpg'; // Placeholder image URL

//     // Create a div element for the user info
//     const userInfoDiv = document.createElement('div');
//     userInfoDiv.classList.add('user-info');

//     // Create an image element for the profile picture
//     const img = document.createElement('img');
//     img.src = profilePicUrl;
//     img.alt = `${userName}'s Profile Picture`;

//     // Create a span element for the user's name
//     const nameSpan = document.createElement('span');
//     nameSpan.textContent = userName;

//     // Append the image and span to the userInfoDiv
//     userInfoDiv.appendChild(img);
//     userInfoDiv.appendChild(nameSpan);

//     // Find the navbar and append the userInfoDiv to it
//     const navbar = document.querySelector('.navbar');
//     navbar.appendChild(userInfoDiv);

// })('Tony'); // Self-invoking with 'Tony' as the argument



// #*****************************************************************************************************#




// #Exercise-8

// #Part-1

// function makeJuice(size) {
//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//       document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
//     }
//     // Invoke the inner function with sample ingredients
//     addIngredients("apples", "oranges", "carrots");
//   }
  
//   // Invoke the outer function with a sample size
//   makeJuice("large");




// #part-2

// function makeJuice(size) {
//     let ingredients = []; // Array to hold ingredients
  
//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//       // Add the ingredients to the array
//       ingredients.push(ingredient1, ingredient2, ingredient3);
//     }
  
//     function displayJuice() {
//       // Create a sentence with the ingredients array
//       document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
//     }
  
//     // Add ingredients twice as per the client's request
//     addIngredients("apples", "oranges", "carrots");
//     addIngredients("spinach", "ginger", "lemon");
  
//     // Display the final order
//     displayJuice();
//   }
  
//   // Invoke the outer function to process an order
//   makeJuice("medium");
  
  


