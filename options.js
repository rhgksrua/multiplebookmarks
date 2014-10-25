// options.js

// Trim string.
String.prototype.trim = function() {
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

// Trim and split user inputs.
var cleanUp = function(text) {
    var results = []
    for (var i = 0; i < text.length; i++) {
        if (text[i] !== "") {
            results.push(text[i].trim());
        }
    }
    return results;
}

var saveBtn = document.getElementById("save");
var urls = document.getElementById("urls");
var stat = document.getElementById("status");

// Save urls in storage api.
var saveURLs = function(e) {
    stat.className = "";
    var urlList = cleanUp(urls.value.split('\n'));
    chrome.storage.sync.set({'urls': urlList}, function() {
        stat.textContent = "Saved";
        stat.className = "fade";
    });

};

// Show saved urls in URLs
var getURLs = function() {
    chrome.storage.sync.get('urls', function(items) {
        array = items['urls'];
        var content = "";
        for (var i = 0; i < array.length; i++) {
            content += array[i] + '\n';
        }
        urls.value = content;
    });
}

var savedURLs = getURLs();

saveBtn.addEventListener('click', saveURLs, false);

