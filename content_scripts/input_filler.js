// (function(){
//     // Get google search input field
//     const inputField = document.getElementById('APjFqb');
//     const submitButton = document.querySelector('input[type="submit"]');
    
//     if(inputField === null || submitButton === null) {
//         console.log("Input field not found");
//         return;
//     }

//     inputField.value = "Hello Wrold!";
//     submitButton.click();
// }
// )();

browser.runtime.onMessage.addListener((message) => {
    if (message.command === 'fillInputFields') {
    //   fillInputFields(message.data);
      console.log("Input fields filled with data:", message.data);
    }
  });