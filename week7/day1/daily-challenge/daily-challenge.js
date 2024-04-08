// #Challenge-1


// function makeAllCaps(words) {
//     // Check for non-string elements 
//     let allStrings = words.filter(word => typeof word !== 'string');
  
//     return allStrings.length > 0 ?
//       Promise.reject('Error: Not all elements are strings.') :
//       Promise.resolve(words.map(word => word.toUpperCase()));
//   }
  
//   function sortWords(words) {
//     return words.length > 4 ?
//       Promise.resolve(words.sort()) :
//       Promise.reject('Error: Array does not contain more than 4 words.');
//   }
  

  
  
//   // Test 1
//   makeAllCaps([1, "pear", "banana"])
//     .then(arr => sortWords(arr))
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
  
//   // Test 2
//   makeAllCaps(["apple", "pear", "banana"])
//     .then(arr => sortWords(arr))
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
  
//   // Test 3
//   makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//     .then(arr => sortWords(arr))
//     .then(result => console.log(result)) // ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
//     .catch(error => console.log(error));



// #*******************************************************************************************************#


// #Daily-challenge-2


// The Morse JSON string provided
// const morse = `{
//     "0": "-----",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----.",
//     "a": ".-",
//     "b": "-...",
//     "c": "-.-.",
//     "d": "-..",
//     "e": ".",
//     "f": "..-.",
//     "g": "--.",
//     "h": "....",
//     "i": "..",
//     "j": ".---",
//     "k": "-.-",
//     "l": ".-..",
//     "m": "--",
//     "n": "-.",
//     "o": "---",
//     "p": ".--.",
//     "q": "--.-",
//     "r": ".-.",
//     "s": "...",
//     "t": "-",
//     "u": "..-",
//     "v": "...-",
//     "w": ".--",
//     "x": "-..-",
//     "y": "-.--",
//     "z": "--..",
//     ".": ".-.-.-",
//     ",": "--..--",
//     "?": "..--..",
//     "!": "-.-.--",
//     "-": "-....-",
//     "/": "-..-.",
//     "@": ".--.-.",
//     "(": "-.--.",
//     ")": "-.--.-"
//   }`;
  
//   // The first function: Converts the JSON string to a JS object
//   function toJs() {
//     return new Promise((resolve, reject) => {
//       let morseJS = JSON.parse(morse);
//       if (Object.keys(morseJS).length === 0) {
//         reject('The Morse JavaScript object is empty.');
//       } else {
//         resolve(morseJS);
//       }
//     });
//   }
  
//   // The second function: Converts a word to its Morse code representation
//   function toMorse(morseJS) {
//     return new Promise((resolve, reject) => {
//       let userInput = prompt("enter a word:").toLowerCase();
//       let morseTranslation = [];
  
//       for (const char of userInput) {
//         if (!morseJS[char]) {
//           reject(`The character "${char}" doesn't exist in the Morse code object.`);
//           return;
//         }
//         morseTranslation.push(morseJS[char]);
//       }
  
//       resolve(morseTranslation);
//     });
//   }
  
//   // The third function: Joins Morse code translations with line breaks
//   function joinWords(morseTranslation) {
//     const joinedTranslation = morseTranslation.join('\n');
//     console.log(joinedTranslation);
//   }
  
//   // Chaining the functions
//   toJs().then(morseJS => {
//     return toMorse(morseJS);
//   }).then(morseTranslation => {
//     joinWords(morseTranslation);
//   }).catch(error => {
//     console.error(error);
//   });
  

// #*******************************************************************************************************#






  










  
  