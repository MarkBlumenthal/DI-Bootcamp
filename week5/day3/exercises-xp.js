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




