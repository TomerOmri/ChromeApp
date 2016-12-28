// Respond to the click on extension Icon
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: ''
    });
    chrome.tabs.executeScript({
        file: 'jquery.cookie.js'
    });
    chrome.tabs.executeScript({
        file: 'home.js'
    });
});
