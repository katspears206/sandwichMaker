// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"ham": 0.60,
  	"turkey": 0.70,
  	"bacon": 0.50,
  	"chicken": 0.90,
  	"roastBeef": 0.80,
  	"mysteryMeat": 0.10,
  	"noMeat": 0.00,
  };

  // Augment the original object with another method
  maker.addMeat = function(meatChoice) {
    console.log(meatPrices[meatChoice]);
    return meatPrices[meatChoice] ;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);