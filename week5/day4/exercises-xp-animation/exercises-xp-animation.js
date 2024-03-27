// #Exercise-1
// Part-one

// setTimeout(function() {
//     alert("Hello World");
// }, 2000); // 2000 milliseconds = 2 seconds




// #part-two


// setTimeout(function() {
//     // Create a new paragraph element
//     var newParagraph = document.createElement("p");
//     // Set the text content of the paragraph
//     newParagraph.textContent = "Hello World";
//     // Find the div with the id 'container'
//     var container = document.getElementById("container");
//     // Append the new paragraph to the container
//     container.appendChild(newParagraph);
// }, 2000); // 2000 milliseconds = 2 seconds




// #part-three


// // Set an interval and store its ID to clear it later
// var intervalID = setInterval(function() {
//     // Create a new paragraph element
//     var newParagraph = document.createElement("p");
//     // Set the text content of the paragraph
//     newParagraph.textContent = "Hello World";
//     // Find the div with the id 'container'
//     var container = document.getElementById("container");
//     // Append the new paragraph to the container
//     container.appendChild(newParagraph);

//     // Check the number of paragraphs in the container
//     var paragraphs = container.getElementsByTagName("p");
//     if (paragraphs.length >= 5) {
//         // If there are 5 or more paragraphs, clear the interval
//         clearInterval(intervalID);
//     }
// }, 2000); // 2000 milliseconds = 2 seconds

// // Find the button with the id 'clear'
// var clearButton = document.getElementById("clear");
// // Add an event listener for the 'click' event on the button
// clearButton.addEventListener("click", function() {
//     // Clear the interval when the button is clicked
//     clearInterval(intervalID);
// });




// #*****************************************************************************************************************************#





// #Exercise-2



// function myMove() {
//     var elem = document.getElementById("animate");
//     var pos = 0;
//     var containerWidth = document.getElementById("container").offsetWidth;
//     var elemWidth = elem.offsetWidth;
//     var id = setInterval(frame, 1); // Move 1px every 1 millisecond

//     function frame() {
//         if (pos >= (containerWidth - elemWidth)) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.left = pos + 'px';
//         }
//     }
// }
