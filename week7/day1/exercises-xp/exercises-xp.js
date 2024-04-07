// #Exercise-1


// async function compareToTen(num) {
//     if (num <= 10) {
//       return Promise.resolve(num + " is less than or equal to 10");
//     } else {
//       return Promise.reject(num + " is greater than 10");
//     }
//   }
  
//   // the promise should reject
//   compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
  
//   //the promise should resolve
//   compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
  
  



// #************************************************************************************************************#



// #Exercise-2

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("promise");
//     }, 4000); 
//   });
  
//   promise.then(result => console.log(result)); 


// #*****************************************************************************************************#



// #Exercise-3

// #1

// let promiseresolve = Promise.resolve(3);

// promiseresolve.then(value => {
//   console.log(value); 
// });


// // #2

// const promisereject = Promise.reject("Boo!");

// promisereject.catch(error => {
//   console.log(error); 
// });


// #*********************************************************************************************************#










  