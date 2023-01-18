chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if (message.msg === "image") {
    fetch('https://some-random-api.ml/img/panda')
      .then(response => response.text())
      .then(data => {
        let dataObj = JSON.parse(data);
        senderResponse({data: dataObj, index: message.index});
      })
      .catch(error => console.log("error is:", error))
    return true;
  }
});
