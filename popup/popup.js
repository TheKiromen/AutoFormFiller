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
      var tabData = new TabData("https://www.google.pl", json[i].query);
      tabsData.push(tabData);
    }
  }
  catch (e) {
    alert('Invalid JSON, please check your input.');
    return;
  }

  // TODO: Fix missing host permissions error
  tabsData.forEach((tabData) => {
    browser.tabs.create({ url: tabData.url, active: false }).then((tab) => {
      console.log(`Tab created with ID: ${tab.id}`);
      // browser.scripting.executeScript({
      //   target: { tabId: tab.id },
      //   files: ["../content_scripts/input_filler.js"],
      // });

      // browser.tabs.sendMessage(tab.id, {
      //   command: 'fillInputFields',
      //   data: tabData.query,
      // });
    });
  });
}

class TabData {
  constructor(url, title) {
    if(!url || !title) {
      throw new Error('URL and title are required');
    }
    this.url = url;
    this.title = title;
  }
}