document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('testButton').addEventListener('click', handleButtonClick);
  });
  

function handleButtonClick() {
  // Get text from text area
  var textArea = document.getElementById('jsonInput');
  // Convert text to JSON
  var json = JSON.parse(textArea.value);
  console.log(json);

  // Write some test data to text area
  textArea.value = "Hello World";
}