// str.startsWith()

var getURLs = function() {
    chrome.storage.sync.get('urls', function(items) {
        var i;
        var array = items['urls'];
        // Empty URL
        if (typeof array === "undefined") {
            return;
        }
        for (i = 0; i < array.length; i++) {
            var newURL = array[i];
            // check for https://
            if (newURL.lastIndexOf('http', 0) !== 0) {
                newURL = "http://" + array[i]; 
            }
            chrome.tabs.create({url: newURL, active: false}, function(tab) {});
        }
    });
};

chrome.browserAction.onClicked.addListener(function(tab) {
    getURLs();
});
