document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('testButton').addEventListener('click', handleButtonClick);
  });
  

async function handleButtonClick() {
  browser.tabs.create({ url: "https://example.com", active: false }).then((tab) => {
    // Track tab status changes
    const listener = (tabId, changeInfo) => {
      if (tabId === tab.id && changeInfo.status === "complete") {
        browser.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["../content_scripts/input_filler.js"],
        }).catch(console.error);
        browser.tabs.onUpdated.removeListener(listener); // Remove after execution
      }
    };
    browser.tabs.onUpdated.addListener(listener);
  });
  

  return;



  var tabsData = [];
  var textArea = document.getElementById('jsonInput');

  try {
    var json = JSON.parse(textArea.value);
    // Input should be an array of objects
    for (var i = 0; i < json.length; i++) {
      var tabData = new TabData("https://example.com/", json[i].query);
      tabsData.push(tabData);
    }
  }
  catch (e) {
    alert('Invalid JSON, please check your input.');
    return;
  }

  const requiredPermissions = {
    permissions: ["scripting", "tabs"],
    origins: ["https://example.com/*"]
  };

  var permissions = await browser.permissions.request(requiredPermissions);
  if (!permissions) {
    alert('Permission denied!');
    return;
  }

  tabsData.forEach((tabData) => {
    browser.tabs.create({ url: tabData.url, active: false }).then((tab) => {
      browser.scripting.executeScript({
        target: { tabId: tab.id },
        // files: ["../content_scripts/input_filler.js"],
        func: () => {
          console.log('Script executed!');
          document.body.style.backgroundColor = 'lightgreen';
        },
      });

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