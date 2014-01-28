//Brandon Clark
//1-27-2014
//Functions_worksheet

//givens: parameter(s) for function:
//Radius of the circle
//Return:


//Circumference of the circle

//Result: Result to print to the console:
//“The circumference of the circle is X”

/*
var total =  calcRadius (10, 2, 3.14) //bin holder
function calcRadius(r, d, p){//adding in the sub bins identify
    var radS =  r  /d;//dividing the raius by the diameter
    var circ= (d*r)*p;//diameter times the radius then divide by pie

    return circ;//the return circ is was what will be put into total
}
console.log("The circumference of the circle is " + total + ".");//print to console
*/


//Stung!
//Givens: Victim’s weight (in pounds)
//Parameter(s) for function: Victim’s weight (in pounds)
//Return: Number of Bee stings
//Result to print to the console: “It takes X bee stings to kill this animal.

var calcDeath= function (weight, stings){//creating the anonymous line that is kinda ignored at the beginning.
    var death= weight * stings; //assigning death as the calc holder
    return death;//returns to the variables that are outside the functions
}
var death = calcDeath(190,8.666666667 );