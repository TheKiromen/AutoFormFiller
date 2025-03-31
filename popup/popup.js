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
      console.log(tabData);
    }
  }
  catch (e) {
    alert('Invalid JSON, please check your input.');
    return;
  }

  // // Get Id of current active tab
  // const [tab] = await browser.tabs.query({ active: true, currentWindow: true });

  // await browser.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   files : ["../content_scripts/input_filler.js"],
  // });

  // browser.tabs.sendMessage(tab.id, {
  //   command: 'fillInputFields',
  //   data: json,
  // });
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