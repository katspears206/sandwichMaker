// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

var outputElement = document.getElementById("finalSandwichPrice");
var submitButton = document.getElementById("button");
var inputBread = document.getElementsByClassName('breadBoxes');
var inputMeats = document.getElementsByClassName('meatBoxes');
var inputCheese = document.getElementsByClassName('cheeseBoxes');
var inputCondiments = document.getElementsByClassName('condimentBoxes');
var inputVeggies = document.getElementsByClassName('veggieBoxes');


function whichBread(){
	var price = 0;
	for(var i=0; i < inputBread.length; ++i){
		if(inputBread[i].checked){
		   checkedValue = inputBread[i].value;
		   console.log(checkedValue);
		   SandwichMaker.addBread(checkedValue);
		   price = SandwichMaker.addBread(checkedValue);
		   SandwichMaker.addTopping(price);
		}
	}
};

function whichMeat(){
	var price = 0;
	for(var i=0; i < inputMeats.length; ++i){
		if(inputMeats[i].checked){
		   checkedValue = inputMeats[i].value;
		   console.log(checkedValue);
		   price = SandwichMaker.addMeat(checkedValue);
		   SandwichMaker.addTopping(price);
		}
	}
};

function whichCheese(){
	var price = 0;
	for(var i=0; i < inputCheese.length; ++i){
		if(inputCheese[i].checked){
		   checkedValue = inputCheese[i].value;
		   console.log(checkedValue);
		   SandwichMaker.addCheese(checkedValue);
		   price = SandwichMaker.addCheese(checkedValue);
		   SandwichMaker.addTopping(price);
		}
	}
}

function whichCondiments(){
	var price = 0;
	for(var i=0; i < inputCondiments.length; ++i){
		if(inputCondiments[i].checked){
		   checkedValue = inputCondiments[i].value;
		   console.log(checkedValue);
		   SandwichMaker.addCondiments(checkedValue);
		   price = SandwichMaker.addCondiments(checkedValue);
		   SandwichMaker.addTopping(price);
		}
	}
}

function whichVeggies(){
	var price = 0;
	for(var i=0; i < inputVeggies.length; ++i){
		if(inputVeggies[i].checked){
		   checkedValue = inputVeggies[i].value;
		   console.log(checkedValue);
		   SandwichMaker.addVeggies(checkedValue);
		   price = SandwichMaker.addVeggies(checkedValue);
		   SandwichMaker.addTopping(price);
		}
	}
}


function whichToppings() {
	whichBread();
	whichMeat();
	whichCheese();
	whichCondiments();
	whichVeggies();
	var finalSandwichPrice = SandwichMaker.getTotal();
	console.log(finalSandwichPrice);
	finalSandwichPrice= finalSandwichPrice.toFixed(2);
	console.log(finalSandwichPrice);
	outputElement.innerHTML = finalSandwichPrice;
}

// Variable to hold topping that the user selects
// var selectedTopping;

// Get a reference to the <select> element that has all the meat options
// var meatChooser = document.getElementById("meat-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
// meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  // selectedTopping = event.target.value;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
// });

submitButton.addEventListener("click", whichToppings);