// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
  	"ketchup": 0.10,
  	"mustard": 0.10,
  	"mayo": 0.20,
  	"ranch": 0.30,
  	"texasPete": 0.20,
  	"bbq": 0.20,
  	"noCondiments": 0.00,
  };

  // Augment the original object with another method
  maker.addCondiments = function(condimentChoice) {
    console.log(condimentPrices[condimentChoice]);
    return condimentPrices[condimentChoice] ;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);