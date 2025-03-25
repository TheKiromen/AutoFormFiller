document.addEventListener('DOMContentLoaded', () => {
    const testButton = document.getElementById('testButton');
    testButton.addEventListener('click', test);
  });
  

function test() {
  console.log('Test button clicked!');
}