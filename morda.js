document.getElementById("ba4ok").addEventListener("click", () => {
  chrome.runtime.sendMessage({message: "hello"}, function(response) {
    console.log(response.message);
  });
});