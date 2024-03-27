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

document.addEventListener('DOMContentLoaded', (event) => {
    // Select the first <h3> element
    const h3Element = document.querySelector('h3');

    // Add a click event listener to the <h3> element
    h3Element.addEventListener('click', function() {
        // Set the display property to 'none' to hide the <h3>
        this.style.display = 'none';
    });
});

