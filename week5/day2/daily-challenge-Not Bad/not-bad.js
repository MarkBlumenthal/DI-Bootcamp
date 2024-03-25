// Your string is : 'This dinner is not that bad ! You cook well', 
// --> the result is : 'This dinner is good ! You cook well'

// Your string is : 'This movie is not so bad !' 
// --> the result is : 'This movie is good !'

// Your string is : 'This dinner is bad !' 
// --> the result is : 'This dinner is bad !'



// // Initialize the sentence variable
// // #1
// let sentence = "The movie is not that bad, I like it";

// // Find the position of "not" and "bad" in the sentence
// // #2
// let wordNot = sentence.indexOf("not");
// // #3
// let wordBad = sentence.indexOf("bad");

// // #4/#5
// // Check if "bad" comes after "not" in the sentence
// if (wordNot < wordBad && wordNot !== -1 && wordBad !== -1) {
//     // Replace "not...bad" with "good" and log the result
//     let beforeNot = sentence.substring(0, wordNot);
//     let afterBad = sentence.substring(wordBad + 3);
//     console.log(beforeNot + "good" + afterBad);
// } else {
//     // If "bad" does not come after "not" or either word is missing, log the original sentence
//     console.log(sentence);
// }


