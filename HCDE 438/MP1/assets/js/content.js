"use strict";

// window.addEventListener('load', onWindowLoaded, false);
// function onWindowLoaded(evt) {
//   console.log("windowloaded");
//   let uQPandaLinks = new Set();
//   let tempLinks = [];
//   let images = document.querySelectorAll('img');
//   for (let i = 0; i < images.length; i++) {
//     chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
//       uQPandaLinks.add(data.link);
//       tempLinks = Array.from(uQPandaLinks);
//       images[i].src = tempLinks[Math.floor(Math.random() * tempLinks.length)];
//     });
//   }
// }

let uQPandaLinks = new Set();
let tempLinks = [];
let images = document.querySelectorAll('img');
for (let i = 0; i < images.length; i++) {
  chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
      uQPandaLinks.add(data.link);
      tempLinks = Array.from(uQPandaLinks);
      images[i].src = tempLinks[Math.floor(Math.random() * tempLinks.length)];
  });
}
