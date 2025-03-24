// This file contains the background script for the extension. It manages events and handles tasks that need to run in the background, such as listening for browser actions or managing state.

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.create({
        url: chrome.runtime.getURL('popup/popup.html')
    });
});

// Add any additional background event listeners or functions here.