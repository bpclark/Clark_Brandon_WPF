/*
Brandon Clark
1-21-2014
Conditionals Worksheet

Celsius to Fahrenheit converter

Do: Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.

Given:
Degrees (in F or C)
Unit (a string holding an “F” or a “C”)

 Result:
 “The temperature is X degrees Celsius.” Or “The temperature is X degrees Fahrenheit.”

Data Sets to Test: (Note that data sets are not the only numbers that should work with your
code.)

32F is 0C
100C is 212F
90F is 32.22C
*/

var tempDeg =Number (prompt("Enter the temperature you want converted"));//the variables needed to do the calculations
var convertedTemp;///the variables needed to do the calculations

degConvert = prompt ("Enter the which kind of temperature you want to convert to: C or F"); // user chooses which temperture type to convert to.

if(degConvert === "C" || degConvert === "c"){//using an OR Operator to use for captical C and lower case c
convertedTemp = (tempDeg - 32) * 5/9;//the formula to convert from F to C

console.log ("The temperature is " + convertedTemp + "\xB0 degrees Celsius.");
}
