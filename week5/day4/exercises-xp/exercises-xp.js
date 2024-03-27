// #Exercise-1


// #1

//  // Selects the <h1> element
//  const h1Element = document.querySelector('h1');

//  console.log(h1Element);




//  #2

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Select the <article> element
//     const articleElement = document.querySelector('article');

//     // Select the last <p> element within the <article>
//     const lastParagraph = articleElement.querySelector('p:last-child');

//     // Remove the last <p> element from the <article>
//     articleElement.removeChild(lastParagraph);
// });





// #3

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Select the first <h2> element
//     const h2Element = document.querySelector('h2');

//     // Add a click event listener to the <h2> element
//     h2Element.addEventListener('click', function() {
//         // Change the background color of the <h2> to red
//         this.style.backgroundColor = 'red';
//     });
// });




// #4

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Select the first <h3> element
//     const h3Element = document.querySelector('h3');

//     // Add a click event listener to the <h3> element
//     h3Element.addEventListener('click', function() {
//         // Set the display property to 'none' to hide the <h3>
//         this.style.display = 'none';
//     });
// });



// #5

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Select the button by its ID
//     const button = document.getElementById('boldButton');

//     // Add a click event listener to the button
//     button.addEventListener('click', function() {
//         // Select all paragraph elements
//         const paragraphs = document.querySelectorAll('article p');

//         // Loop through each paragraph and change its font weight to bold
//         paragraphs.forEach(function(paragraph) {
//             paragraph.style.fontWeight = 'bold';
//         });
//     });
// });



// #bonus


// document.addEventListener('DOMContentLoaded', (event) => {
//     // Select the <h1> element
//     const h1Element = document.querySelector('h1');

//     // Add a mouseover event listener to the <h1> element
//     h1Element.addEventListener('mouseover', function() {
//         // Generate a random font size between 0 and 100
//         const randomFontSize = Math.floor(Math.random() * 101); // 101 because Math.random() is less than 1

//         // Set the font size of the <h1>
//         this.style.fontSize = `${randomFontSize}px`;
//     });
// });


// #bonus


// document.addEventListener('DOMContentLoaded', (event) => {
//     // Select the second paragraph
//     const secondParagraph = document.querySelectorAll('p')[1];

//     // Add a mouseover event listener to the second paragraph
//     secondParagraph.addEventListener('mouseover', function() {
//         this.classList.add('fade-out');
//     });
// });



// #****************************************************************************************************************************#




// #Exercise-2

// #1

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Retrieve the form element
//     const form = document.querySelector('form');
    
//     // Log the form element to the console
//     console.log(form);
// });



// #2

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Retrieve input elements by their IDs
//     const firstNameInput = document.getElementById('fname');
//     const lastNameInput = document.getElementById('lname');
//     const submitButton = document.getElementById('submit');

//     // Log the input elements to the console
//     console.log(firstNameInput);
//     console.log(lastNameInput);
//     console.log(submitButton);
// });



// #3

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Retrieve input elements by their name attribute
//     const firstNameInputs = document.getElementsByName('firstname');
//     const lastNameInputs = document.getElementsByName('lastname');

  
//     console.log(firstNameInputs[0]);
//     console.log(lastNameInputs[0]);

// });


// #4

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     const ul = document.querySelector('.usersAnswer');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent traditional form submission

//         // Get the values of the input fields
//         const firstName = document.getElementById('fname').value.trim();
//         const lastName = document.getElementById('lname').value.trim();

//         // Clear previous answers in the list
//         ul.innerHTML = '';

//         // Check if the input values are not empty
//         if (firstName && lastName) {
//             // Console log the input values
//             console.log('First name:', firstName);
//             console.log('Last name:', lastName);

//             // Create and append the <li> elements for each input value
//             const firstNameLi = document.createElement('li');
//             firstNameLi.textContent = firstName;
//             ul.appendChild(firstNameLi);

//             const lastNameLi = document.createElement('li');
//             lastNameLi.textContent = lastName;
//             ul.appendChild(lastNameLi);
//         } else {
//             // Optionally handle the case where the inputs are empty
//             console.log('Please fill in both first name and last name.');
//         }
//     });
// });



// #*******************************************************************************************************#



// #Exercise-3


// #1

// var allBoldItems;


// #2

// var allBoldItems; // Declare the global variable to store the bold words

// function getBoldItems() {
//   const boldElements = document.querySelectorAll('strong');
//   allBoldItems = Array.from(boldElements).map(element => element.textContent);
// }

// document.addEventListener('DOMContentLoaded', function() {
//   getBoldItems();
//   console.log(allBoldItems); // Log inside the event listener
// });



// #3

// function highlight() {
//     // Select all <strong> elements
//     const boldElements = document.querySelectorAll('strong');
    
//     // Iterate over each element and change its color to blue
//     boldElements.forEach(element => {
//       element.style.color = 'blue';
//     });
//   }
  
//   document.addEventListener('DOMContentLoaded', function() {
//     highlight();
//   });



// #4


// function returnItemsToDefault() {
//     // Select all <strong> elements
//     const boldElements = document.querySelectorAll('strong');
    
//     // Iterate over each element and change its color back to black
//     boldElements.forEach(element => {
//       element.style.color = 'black';
//     });
//   }
  
//   document.addEventListener('DOMContentLoaded', function() {
//     returnItemsToDefault();
//   });



// #5

// // Define  functions 
// function highlight() {
//     const boldElements = document.querySelectorAll('strong');
//     boldElements.forEach(element => {
//       element.style.color = 'blue';
//     });
//   }
  
//   function returnItemsToDefault() {
//     const boldElements = document.querySelectorAll('strong');
//     boldElements.forEach(element => {
//       element.style.color = 'black';
//     });
//   }
  
//   // This sets up the event listeners
//   document.addEventListener('DOMContentLoaded', function() {
//     var paragraphs = document.querySelectorAll('p');
//     paragraphs.forEach(function(paragraph) {
//       paragraph.addEventListener('mouseover', highlight);
//       paragraph.addEventListener('mouseout', returnItemsToDefault);
//     });
//   });




// #*****************************************************************************************************************#



// #Exercise-4


// document.getElementById('submit').addEventListener('click', function(e) {
//     // Prevent form submission
//     e.preventDefault();

//     // Calculate the volume of the sphere
//     const radius = document.getElementById('radius').value;
//     const volume = (4/3) * Math.PI * Math.pow(radius, 3);

//     // Log the volume to the console
//     console.log(`The volume of the sphere is: ${volume.toFixed(4)}`);

//     // Update the volume input with the calculated value
//     document.getElementById('volume').value = volume.toFixed(4); // Rounds to 4 decimal places
// });
  
  
  
  




