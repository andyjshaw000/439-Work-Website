"use strict";

let uQPandaLinks = new Set();
let tempLinks = [];
let images = document.querySelectorAll('img');
for (let i = 0; i < images.length; i++) {
  chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
      uQPandaLinks.add(data.link);
      tempLinks = Array.from(uQPandaLinks);
      images[i].src = tempLinks[Math.floor(Math.random() * tempLinks.length)];
      images[i].srcset = tempLinks[Math.floor(Math.random() * tempLinks.length)];
      // images[i].auto-src = tempLinks[Math.floor(Math.random() * tempLinks.length)];
  });
}
