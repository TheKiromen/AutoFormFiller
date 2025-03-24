// This file contains the content script for the Firefox extension. 
// It interacts with web pages and can manipulate the DOM as needed.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Content script loaded and ready to interact with the page.');

    // Example: Change the background color of the page
    document.body.style.backgroundColor = 'lightblue';

    // You can add more functionality here to interact with the web page
});