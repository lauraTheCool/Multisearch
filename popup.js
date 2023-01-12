// popup.js
document.getElementById("search-button").addEventListener("click", function() {
    var keywords = document.getElementById("keywords").value;
    var keywordArray = keywords.split(",");
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currentTab = tabs[0];
  
      keywordArray.forEach(function(keyword) {
        chrome.tabs.executeScript(currentTab.id, {code: 'find("' + keyword + '")'});
      });
    });
  });
  