//Brandon Clark
//1-15-2014
//Expressions - Personal - How much it costs to drive to work.

//Givens
// How many gallons of gas does it take to get to work.
//Miles driven to work
// MPG of Car

var gasPrice = prompt ("Enter how much a gallon of gas costs"); //definitions
var milesDriven = prompt ("How man miles to work do you drive?");//definition
var mpgCar= prompt ("Enter the MPG of your car");//definition

var gallonsUsed = (milesDriven / mpgCar)* gasPrice; //expressions to solve MPG/miles to work to give me gallons used.
var totalCost = "The total cost to drive one way to work is $" + (gallonsUsed.toFixed(2)) + "." // calculated how much it would cost to drive one way to work and added the .tofixed  to allow for rounding.

console.log(totalCost);


