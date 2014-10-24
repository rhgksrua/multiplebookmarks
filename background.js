chrome.browserAction.onClicked.addListener(function(tab) {
    var current;
    chrome.tabs.getCurrent(function(tab) {
        current = tab;
    });
    chrome.tabs.create({url: "http://www.google.com", active: false}, function(tab) {});
    chrome.tabs.create({url: "http://www.yahoo.com", active: false}, function(tab) {});
    

});
