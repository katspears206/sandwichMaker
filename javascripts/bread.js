// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	"wheat": 2.50,
  	"white": 2.30,
  	"multigrain": 3.00,
  	"rye": 2.70,
  	"sourdough": 1.80,
  	"italian": 2.10,
  	"noBread": 0.00,
  };

  // Augment the original object with another method
  maker.addBread = function(breadChoice) {
    console.log(breadPrices[breadChoice]);
    return breadPrices[breadChoice] ;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);