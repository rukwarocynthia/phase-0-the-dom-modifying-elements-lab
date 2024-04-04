// Write your code here!
// Remove main#main from DOM
document.querySelector('main#main').remove();

// Create new header
const newHeader = document.createElement('h1');

// Set id of the header to victory
newHeader.id = 'victory';

// Set the text content of the new element
newHeader.textContent = "YOUR-NAME is the champion";

