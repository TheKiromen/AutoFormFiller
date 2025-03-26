document.addEventListener('DOMContentLoaded', () => {
    const testButton = document.getElementById('testButton');
    testButton.addEventListener('click', test);
  });
  

function test() {
  var inputs = document.getElementsByTagName('input');
  var textAreas = document.getElementsByTagName('textarea');
  console.log(inputs);
  console.log(textAreas);
}