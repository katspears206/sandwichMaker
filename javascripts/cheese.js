// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"american": 0.20,
  	"swiss": 0.30,
  	"cheddar": 0.20,
  	"gouda": 0.30,
  	"pepperJack": 0.20,
  	"colby": 0.20,
  	"noCheese": 0.00,
  };

  // Augment the original object with another method
  maker.addCheese = function(cheeseChoice) {
    console.log(cheesePrices[cheeseChoice]);
    return cheesePrices[cheeseChoice] ;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);