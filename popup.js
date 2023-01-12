document.getElementById("search-button").addEventListener("click", function() {
  var keywords = prompt("Enter keywords to search for, separated by commas:");
  var keywordArray = keywords.split(",");

  keywordArray.forEach(function(keyword) {
    chrome.tabs.create({
      url: "https://www.google.com/search?q=" + keyword.trim()
    });
  });
});
