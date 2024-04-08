//   #Exercise-1
// // Giphy API URL
// const giphyAPI = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// // Using fetch() method to make a GET request
// fetch(giphyAPI)
//     .then(response => {
//         // Checking if the request was successful
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json(); // Parsing JSON data from the response
//     })
//     .then(data => {
//         console.log(data); // Logging the JavaScript Object received from Giphy API
//     })
//     .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//     });



// #***********************************************************************************************************#



// #Exercise-2



// const url = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// // Using fetch to make a GET request to the Giphy API
// fetch(url)
//   .then(response => {
//     // Check if the request was successful
//     if (response.ok) {
//       return response.json(); // Parse the JSON from the response
//     }
//     throw new Error('Network response was not ok.'); // Throw an error if the request was not successful
//   })
//   .then(data => {
//     console.log(data); // Log the JavaScript object to the console
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });



// #********************************************************************************************************#



// #Exercise-3



// async function fetchStarshipData() {
//     try {
//       // Await the response of the fetch call
//       const response = await fetch("https://www.swapi.tech/api/starships/9/");
      
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       // Await the response to be parsed as JSON
//       const starshipData = await response.json();

//       console.log(starshipData.result);
//     } catch (error) {
//       console.error('Fetch error:', error.message);
//     }
//   }
  

//   fetchStarshipData();


// #********************************************************************************************************#
  


// #Exercise-4


// Analyse the code provided below - what will be the outcome?

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// #answer- calling, resolved





