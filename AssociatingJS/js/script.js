//JavaScript
/*
var yearBorn = 1955;

console.log("Hello World");
console.log(yearBorn);

alert(yearBorn);
*/

//Expressions
/*
var a = 2; //sets up our varible a defines it with 2
a = a + 3 //add 3 to a
console.log(a);

//Expressions - Age Example
var yearBorn = 1985;
var age = 2014 - yearBorn - 1;
console.log(age);
*/
/*
//Expressions - Arithmetic Operators

//area of the triangle is half of the width times the height

var width = 7;
var height = 8;
var area = width * height/2;
console.log(area);
    */
/*
//Expressions - Modulo Operator

var remainder = 211 % 2;
console.log (remainder);
    */
/*
//Expressions  - PEMDAS - The Order of Operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// the average is the sum of the items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
//console.log(average);

var length = 7;
var width = 6
var perimeter = length * 2 + width * 2;
//console.log(perimeter);
*/
/*
//Expressions - Expressions with Arrays

var orangeBins = [234,567,883]

var total = orangeBins[0]+ orangeBins[1]+ orangeBins[2];
console.log(total);
*/

//Expressions - Concatenating strings
/*
var firstName = "Brandon";
var lastName = "Clark";
var fullName= firstName + " " + lastName;

console.log(fullName);


var a = 6;
var b = 7;

var result = a + b;
console.log(result);
*/

//Casting
/*
var areaCode = 435;
var firstPart = 849;
var secPart = 6268;
//(435)849-6268
var phoneNo = "(" + String(areaCode)+ ")" + String(firstPart) + "-" + String(secPart);
console.log(phoneNo);

//var stringVar = "6";
//var result = 7 + Number(stringVar)
//console.log(result);
*/

//Expressions - Assignment Operators

var a=3;
a -- ; //a= a+4// a +=1 a= -- 1
console.log(a);


//prompt and alert

//var userInput = prompt ("Enter your year of birth");

//console.log(userInput);

var width = prompt ("We are calculating the area of a rectangle. \nPlease enter the width")
var height = prompt ("Please enter the height");
var area= width*height;
//console.log(area);
var result = "The area of your rectangle is " + area + " sq feet";
alert(result);

































