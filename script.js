   // Step 1: Use the Fetch API endpoint to make a request to the Affirmations API
            //const apiUrl = 'http://localhost:8080/https://www.affirmations.dev/';

                //fetch(apiUrl) //return a promise
// Step 2: Handle the response using the .then() method
// executed if the Promise is resolved (i.e., the HTTP request is successful)
//Here's a brief explanation of the three states a Promise can be in:
/*
Pending: The initial state; the promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.

 Promises in JavaScript are objects that represent the eventual completion or failure of an asynchronous operation and allow you to handle the result (or error) in a more organized and readable way.*/
//.then(response => response.json())   
  // Step 3: Handle the JSON data obtained from the response
  //"when the JSON parsing is successful, take the resulting data and log it to the console
//.then(data => console.log(data))
  // Step 4: Handle any errors that may occur during the fetch operation
//.catch(error => console.error('Error:', error));

document.addEventListener('DOMContentLoaded', function () {

const affirmationElement = document.getElementById('affirmation');
const generateBtn = document.getElementById("generateBtn");
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

generateBtn.addEventListener('click', function(){
    // Step 1: Use the Fetch API endpoint to make a request to the Affirmations API
const apiUrl = 'http://localhost:8080/https://www.affirmations.dev/';

fetch(apiUrl) //return a promise
 // Once the response is received, parse it as JSON
.then(response => response.json())
 // Update the text content of the 'affirmation' element with the fetched affirmation
.then(data => { 
       affirmationElement.textContent = data.affirmation;
       // Generate image with affirmation text
       generateImage(data.affirmation);
})        
// If there is an error in the fetch or parsing, execute this block
.catch(error => {
    console.log("Error fetching the Affirmation: ", error)
});
});

function generateImage(affirmation) {
   // Clear previous content on the canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   // Load or fetch the image based on the affirmation
   const imageUrl = getImageUrlForAffirmation(affirmation);

   // Create an Image object
   const image = new Image();

   // Set the source of the image
   image.src = imageUrl;

   // When the image is loaded, draw it on the canvas
   image.onload = function () {
       // Draw the image on the canvas
       ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};
}
// Replace this function with logic to map affirmations to image URLs
function getImageUrlForAffirmation(affirmation) {
    // Replace this with a mapping of affirmations to image URLs
    // For simplicity, let's assume all affirmations have the same image
    return 'https://example.com/default-image.jpg';
}
});
/*
In JavaScript, the catch block is part of the Promise chaining mechanism. When you chain then and catch methods after a Promise, they are executed in a specific order.

Here's how it works:

The fetch function returns a Promise.
The first then block is executed if the Promise is resolved (i.e., the HTTP request is successful). It takes the Response object and transforms it in some way (in this case, with response.json()).
If there are no errors in the then block (for example, if the JSON parsing is successful), the next then block is executed, which handles the parsed data.
If there is any error at any point in the Promise chain (whether in the initial fetch, in the JSON parsing, or anywhere else), the control jumps to the nearest catch block.
So, if there's an error in the fetch operation or in the subsequent processing of the response (like JSON parsing), the control will skip directly to the catch block. This is the power of Promises and the catch block – they provide a clean way to handle errors in asynchronous code.
*/

