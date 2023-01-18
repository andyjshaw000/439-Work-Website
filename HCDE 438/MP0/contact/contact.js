/**
 *Andy J Shaw
 *2/16/2022
 *AF Ludvig Liljenberg
 *This is a game that calls a CSE Pokemon API to view a Pokedex of 151 pokemon
 *That allows you to find and fight pokemon on a web page
 *If you win the battle, you get to keep the pokemon and use it for the next battles
 */

 "use strict";
 (function() {
   window.addEventListener("load", init);

   /**
    * Initializes code after the window has loaded
    */
   function init() {
     qs("button").addEventListener("click", function(event) {
      console.log("clicked")
     });
   }

   /**
    * Selects a query and returns it
    * @param {string} selector - the element being selected
    * @return {object} the first element on the document with the specified selector
    */
   function qsa(selector) {
     return document.querySelectorAll(selector);
   }

   /**
    * Selects a query and returns it
    * @param {string} selector - the element being selected
    * @return {object} the first element on the document with the specified selector
    */
   function qs(selector) {
     return document.querySelector(selector);
   }

   /**
    * Selects an id and returns it
    * @param {string} id - the element being selected
    * @return {object} the element on the document with the specified id
    */
   function id(id) {
     return document.getElementById(id);
   }


 })();