var getURLs = function() {
    chrome.storage.sync.get('urls', function(items) {
        var array = items['urls'];
        // Empty URL
        if (typeof array === "undefined") {
            return;
        }
        for (var i = 0; i < array.length; i++) {
            chrome.tabs.create({url: "http://" + array[i], active: false}, function(tab) {});
        }
    })
}

chrome.browserAction.onClicked.addListener(function(tab) {
    getURLs();
});
