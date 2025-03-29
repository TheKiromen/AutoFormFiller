document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('testButton').addEventListener('click', handleButtonClick);
  });
  

async function handleButtonClick() {
  // Get text from text area
  var textArea = document.getElementById('jsonInput');
  // Convert text to JSON
  var json = JSON.parse(textArea.value);

  // Get Id of current active tab
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });

  await browser.scripting.executeScript({
    target: { tabId: tab.id },
    files : ["../content_scripts/input_filler.js"],
  });
}