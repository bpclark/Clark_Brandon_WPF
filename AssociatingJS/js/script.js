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

//var a=3;
//a -- ; //a= a+4// a +=1 a= -- 1
//console.log(a);


//prompt and alert

//var userInput = prompt ("Enter your year of birth");

//console.log(userInput);

//var width = prompt ("We are calculating the area of a rectangle. \nPlease enter the width")
//var height = prompt ("Please enter the height");
//var area= width*height;
//console.log(area);
//var result = "The area of your rectangle is " + area + " sq feet";
//alert(result);


//////////////////////////////////////////////////////////////////////////////////////////////////
//Conditionals

//if(sunny){
  //  goToTheBeach();
//}//else{
  //  goToTheMovies();
//}

/*
var kidHeight= 36;
var minHeight= 48;


//if the child old enough print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){

    // code preformed if condition is true
    console.log ("You can ride the coaster!")

}else{
    // code preformed if condition is false
    console.log("Sorry kid, you've got some growing to do first!!")
}
*/
///////////////////////////
//Conditional Logic - Else - IF
/*
var kidHeight= 47;
var minHeight= 48;
var wParentHeight = 45;// the of the kid with the parent

//if the child old enough print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){

    // code preformed if condition is true
    console.log ("You can ride the coaster!");

}else if (kidHeight > wParentHeight){
    // you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!!");
}
*/

//Conditional Logic - logical Operators
/*
var budget = 300;
var iPhonePrice = 199.99;
var payCheck = 200;

//if the price of the phone is less our budget AND if our paycheck is over 300

if(iPhonePrice < budget && payCheck > 300){
   console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}
*/
////////////////////////////////
//OR operator
/*
var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget AND if our paycheck is over 300

if(iPhonePrice < budget || wonLottery ){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}
*/

//Conditional Logic - Ternary Operators
/*
if (conditional){
    do if true;

}else{
    do if false;
}
//Writting the above in one line
(condition) ? do if true : do if false;
*/

/*
var gpa = 48;

//if the gpa is over the 2.0 score then the student can graduate

/*if (gpa > 2.0 ){
    console.log("You can Graduate!");
}else{
    console.log("GPA is too low")
}*/
/*
    (gpa > 2.0)  ? console.log("You can Graduate!") : console.log("GPA is too low");
*/

////////////////////////////

//Conditional Logic - Ternary Operators
/*
var age = 11
var book;

// if the child is under 10, then they get Green Eggs and Ham, otherwise the get the Time Machine
if(age<10){
    book= "Green Eggs and Ham";
}else{
    book= "The Time Machine";
}
console.log(book);
*/
/*
var age= 6;
var book;

book = (age < 12) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

*/
////////////////////////////Functions//////////////////////////////

/*
function outptMsg() {
    console.log("Hello World");
}

function calcArea(){
    var width = 11;
    var height = 30;
    var area = width * height;
    console.log(area);
}
///Invoking2
 calcArea();
*/

//Functions - Variable Scope
/*
var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    //console.log(area);
}
///Invoking
calcArea();
*/

/////////Functions - Parameters - Arguments

/*
calcArea(30,20)

function calcArea(w , h){
   var area = w * h;
    console.log(area);
}
*/

//Dog years problem
/*
function dogYears(age){

    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}
dogYears(4);
dogYears(5);
    */

/////////////Returning Variable
/*
var total = calcArea(30,20)

function calcArea(w , h){
    var area = w * h;
    return area;
}
    console.log(total)
    */

//Functions - Anonymous

var calcArea = function(width, height){// defining
    // code the function runs
    var area = width * height;
    return area;
}
var a = calcArea(20,30); //invoking, has to be after defining

console.log(a);