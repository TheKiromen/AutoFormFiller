// TODO: Try to move it to a separate models file and import it?
class TabData {
  constructor(url, title) {
    if(!url || !title) {
      throw new Error('URL and title are required');
    }
    this.url = url;
    this.title = title;
  }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('testButton').addEventListener('click', handleButtonClick);
  });
  

async function handleButtonClick() {
  var tabsData = [];
  var textArea = document.getElementById('jsonInput');

  try {
    var json = JSON.parse(textArea.value);
    // Input should be an array of objects
    for (var i = 0; i < json.length; i++) {
      var tabData = new TabData("https://www.google.pl/", json[i].query);
      tabsData.push(tabData);
    }
  }
  catch (e) {
    alert('Invalid JSON, please check your input.');
    return;
  }

  // This mess is because if we inject the script too quickly, the tab 'forgets' that it has necessary permissions to execute it and throws a tantrum
  // So we need to wait for the tab to be fully loaded before injecting the script
  tabsData.forEach((tabData) => {
    browser.tabs.create({ url: tabData.url, active: false }).then((tab) => {
      // Track tab status changes
      const listener = (tabId, changeInfo) => {
        if (tabId === tab.id && changeInfo.status === "complete") {
          // Inject the script into tab and execute the function `fillInputFields`
          browser.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["../content_scripts/input_filler.js"],
          }).then(() => {
            browser.tabs.sendMessage(tab.id, {
              command: 'fillInputFields',
              data: tabData.query
            }).catch(console.error);
          }).catch(console.error);
          browser.tabs.onUpdated.removeListener(listener); // Remove after execution
        }
      };
      browser.tabs.onUpdated.addListener(listener);
    });
  });
}