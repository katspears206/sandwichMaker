// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	"onion": 0.30,
  	"bellPepper": 0.40,
  	"bananaPepper": 0.40,
  	"mushroom": 0.30,
  	"lettuce": 0.20,
  	"tomato": 0.20,
  	"noVeggies": 0.00,
  };

  // Augment the original object with another method
  maker.addVeggies = function(veggieChoice) {
    console.log(veggiePrices[veggieChoice]);
    return veggiePrices[veggieChoice] ;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);