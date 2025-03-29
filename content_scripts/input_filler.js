(function(){
    // Get google search input field
    const inputField = document.getElementById('APjFqb');
    
    if(inputField === null){
        console.log("Input field not found");
        return;
    }

    inputField.value = "Hello Wrold!";
}
)();