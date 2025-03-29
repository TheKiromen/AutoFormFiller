(function(){
    // Get google search input field
    const inputField = document.getElementById('APjFqb');
    const submitButton = document.querySelector('input[type="submit"]');
    
    if(inputField === null || submitButton === null) {
        console.log("Input field not found");
        return;
    }

    inputField.value = "Hello Wrold!";
    submitButton.click();
}
)();