// // #Exercise 1

// // #1
// function displayNumbersDivisible() {
//     let sum = 0;
//     for (let i = 0; i <= 500; i++) {
//       if (i % 23 === 0) {
//         console.log(i); // Log each number divisible by 23
//         sum += i; // Add the number to the sum
//       }
//     }
//     console.log("Sum of all numbers divisible by 23:", sum); // Log the sum
//   }
  
//   displayNumbersDivisible(); // Call the function to execute



// #bonus

// function displayNumbersDivisible(divisor) {
//     let sum = 0;
//     for (let i = 0; i <= 500; i++) {
//       if (i % divisor === 0) {
//         console.log(i); // Log each number divisible by the provided divisor
//         sum += i; // Add the number to the sum
//       }
//     }
//     console.log(`Sum of all numbers divisible by ${divisor}:`, sum); // Log the sum
//   }
  
//   // Example calls:
//   displayNumbersDivisible(3); // Logs all numbers divisible by 3 and their sum
//   displayNumbersDivisible(45); // Logs all numbers divisible by 45 and their sum
  



// #**********************************************************************************************************#
  


// #Exercise-2

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// };

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// };

// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     let total = 0;
//     for (let item of shoppingList) {
//         if (stock[item] && stock[item] > 0) { // Check if the item is in stock
//             total += prices[item]; // Add the price of the item to the total
//             stock[item] -= 1; // Decrease the stock of the item by 1
//         }
//     }
//     return total;
// }

// console.log("Total bill:", myBill()); // Call the myBill function and log the total
// console.log("Updated stock:", stock); // Log the updated stock to see the changes





// #****************************************************************************************************************#



// // #Exercise-3

// function changeEnough(itemPrice, amountOfChange) {
//     // Define the value of coins
//     const coinValues = [0.25, 0.10, 0.05, 0.01];
    
//     // Calculate the total amount of change
//     let totalChange = amountOfChange.reduce((total, numCoins, index) => {
//         return total + (numCoins * coinValues[index]);
//     }, 0);

//     // This Check if the total change is enough to buy the item
//     return totalChange >= itemPrice;
// }


// console.log(changeEnough(4.25, [25, 20, 5, 0])); //  return true
// console.log(changeEnough(14.11, [2, 100, 0, 0])); // return false
// console.log(changeEnough(0.75, [0, 0, 20, 5])); // return true



// #*********************************************************************************************************************#



// #Exercise - 4


// function hotelCost(nights) {
//     return nights * 140;
// }

// function planeRideCost(destination) {
//     if (destination.toLowerCase() === "london") {
//         return 183;
//     } else if (destination.toLowerCase() === "paris") {
//         return 220;
//     } else {
//         return 300;
//     }
// }

// function rentalCarCost(days) {
//     let totalCost = days * 40;
//     if (days > 10) {
//         totalCost -= totalCost * 0.5; // Apply 5% discount
//     }
//     return totalCost;
// }

// function totalVacationCost(nights, destination, days) {
//     const hotel = hotelCost(nights);
//     const plane = planeRideCost(destination);
//     const car = rentalCarCost(days);
    
//     const totalCost = hotel + plane + car;
//     console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}. Total vacation cost: $${totalCost}`);
//     return totalCost;
// }


// const nights = 5; // For example, 5 nights
// const destination = "Paris"; // Destination can be "London", "Paris", or others
// const days = 7; // For example, 7 days for car rental

// totalVacationCost(nights, destination, days);




// #*******************************************************************************************************************************************#




// #Exercise-5

// document.addEventListener('DOMContentLoaded', function() {
//     // Retrieve the div and log it
//     const container = document.getElementById('container');
//     console.log(container);

//     // Change "Pete" to "Richard"
//     const lists = document.querySelectorAll('.list');
//     lists[0].querySelectorAll('li')[1].textContent = 'Richard';

//     // Delete the second <li> of the second <ul>
//     lists[1].querySelectorAll('li')[1].remove();

//     // Change the name of the first <li> of each <ul> to your name
//     lists.forEach(list => {
//         list.querySelectorAll('li')[0].textContent = 'Mark'; // Replace with actual name
//     });

//     // Add classes to the <ul>'s
//     lists.forEach(list => list.classList.add('student_list'));
//     lists[0].classList.add('university', 'attendance');

//     // Add "light blue" background color and padding to the <div>
//     container.style.backgroundColor = 'lightblue';
//     container.style.padding = '10px';

//     // Do not display the <li> "Dan"
//     const dan = Array.from(document.querySelectorAll('.list li')).find(li => li.textContent === 'Dan');
//     if (dan) dan.style.display = 'none';

//     // Add a border to "Richard"
//     const richard = Array.from(document.querySelectorAll('.list li')).find(li => li.textContent === 'Richard');
//     if (richard) richard.style.border = '1px solid black';

//     // Change the font size of the whole body
//     document.body.style.fontSize = '35px'; // Change as needed

//     // Bonus: Alert "Hello x and y" if the background color is "lightblue"
//     if (container.style.backgroundColor === 'lightblue') {
//         const firstListNames = lists[0].querySelectorAll('li');
//         alert(`Hello ${firstListNames[0].textContent} and ${firstListNames[1].textContent}`);
//     }
// });



// #*******************************************************************************************************************************#




// #Exercise-6


// // Change the id attribute from "navBar" to "socialNetworkNavigation"
// const navBar = document.getElementById('navBar');
// navBar.setAttribute('id', 'socialNetworkNavigation');

// // Create a new <li> element
// const newLi = document.createElement('li');
// // Create a new text node and append it to the <li>
// const newText = document.createTextNode('Logout');
// newLi.appendChild(newText);

// // Append the new <li> to the <ul>
// const ul = document.querySelector('#socialNetworkNavigation ul');
// ul.appendChild(newLi);

// // Use firstElementChild and lastElementChild to retrieve and display text
// const firstLiText = ul.firstElementChild.textContent;
// const lastLiText = ul.lastElementChild.textContent;
// console.log('First item:', firstLiText);
// console.log('Last item:', lastLiText);




// #****************************************************************************************************************#




// #Exercise-7


// const allBooks = [
//     {
//         title: "Harry Potter and the Sorcerer's Stone",
//         author: "J.K. Rowling",
//         image: "https://wizkids.co.il/products/harry-potter-1-harry-potter-and-the-sorcerers-stone?variant=808279801875&currency=ILS&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZxzAWBBThTD3hn2nwVvOzPD7nlMqfJfDaEqkWIsdBJXEM2YrFbpHn6BoCMQwQAvD_BwE", 
//         alreadyRead: true
//     },
//     {
//         title: "The Lord Of The Rings",
//         author: "J.R.R Tolkien",
//         image: "https://www.imdb.com/title/tt0120737/", 
//         alreadyRead: false
//     }
// ];

// const listBooksSection = document.querySelector('.listBooks');

// allBooks.forEach(book => {
//     const bookDiv = document.createElement('div');
//     const bookDetails = document.createElement('p');
//     const bookImage = document.createElement('img');

//     bookDetails.textContent = `${book.title} written by ${book.author}`;
//     bookImage.src = book.image;
//     bookImage.width = 100; // this sets image width to 100px

//     if (book.alreadyRead) {
//         bookDetails.style.color = 'red';
//     }

//     bookDiv.appendChild(bookDetails);
//     bookDiv.appendChild(bookImage);
//     listBooksSection.appendChild(bookDiv);
// });
