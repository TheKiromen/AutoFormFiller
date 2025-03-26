document.addEventListener('DOMContentLoaded', () => {
    const testButton = document.getElementById('testButton');
    testButton.addEventListener('click', test);
  });
  

function test() {
  // Get currently open tab
  browser.tabs.query({active: true, currentWindow: true}, (tabs) => {
    console.log(tabs[0].url);
  });
}