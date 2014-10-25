// str.startsWith()
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str) {
        return this.indexOf(str) == 0;
    };
}

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
            if (newURL.startsWith('http') === false) {
                
                newURL = "http://" + array[i]; 
            }
            chrome.tabs.create({url: newURL, active: false}, function(tab) {});
        }
    });
};

chrome.browserAction.onClicked.addListener(function(tab) {
    getURLs();
});
