//Brandon Clark
//1-14-2014
//Expressions_worksheet


//Dog Years
//Givens: Sparkyes age 1, 7 years human years to 1 dog year
//Result varible is human years (7) * dog years

var sparkyAge = 1; // declaration and definition
var humanYears = 7; // declaration and definition

var x = sparkyAge * humanYears; //declaring the dogs age times human years
var resultX = (x); // needed to make a container for the result of sparkyAge times humanYears

var answer = "Sparky is" + ' ' + (x) + ' ' + "human years old which is" + ' ' + (sparkyAge) + ' ' + "in dog years."  // this expression had to be broken up into strings with spaces added to allow for a structed sentecnce.

//console.log (answer) displays correct answer variable in the console.



//Slice of the Pie 1
// Givens: Number of slices 7, People at the party 32, Number of pizzas ordered 12.
//Result varible  2.625 slices per person.

var slices = 7; //7 slices per box
var people = 32; //32 people are attending the party
var ordered = 12; // 12 pizzas have been ordered

var answer = (slices * ordered)/people; // the three variables with 7 slices times 12 pizzas
// then divided by 12 pizzas ordered.
var result = "Each person ate" + ' ' +  (answer) + ' ' + "slices of pizza at the party." //to be able to have this display
//then stings need to be made around groups of words, with  the plus symbol, then apostrophe space apostrophe, then plus
//symbol. Ending with another string.

//console.log(result)  displays correct answer variable in the console.

//Slice of the Pie part II
// Givens: Number of slices 7, People at the party 32, Number of pizzas ordered 12. .625 * 12 = 7.5
//Result Variables: Sparky will get 7 whole slices

var slices = 7; //7 slices per box
var people = 32; //32 people are attending the party
var ordered = 12; // 12 pizzas have been ordered
var eachPlate = slices * ordered / people; // the three variables with 7 slices times 12 pizzas 2.625 slices for each

var partLeft = .625; // remainder of the pizza slices

var sparkyFood = people * partLeft; // to determine how many slices whole parts sparky gets then you must take the
// the number of people times the fraction of a slice (.625). so this is 32 * .625 and you come out with 20 whole
//slices for sparky.

var print = "Sparky got" + ' ' + (sparkyFood) + ' ' + "slices of pizza" // print statement with spaces around sparkyFood variable.

//console.log (print)

//Average shopping bill
//Given: week1 85.25, week 2 110.38,  week 3 95.68, week 4 71.25, week 5 101.01
//Total spent:463.57
//Average: 92.714

var foodBin = [85.25,110.38,95.68,71.25,101.01] //inserted the values into an array

var total = foodBin[0]+foodBin[1]+foodBin[2]+foodBin[3]+foodBin[4] // added the values together to find the total for the 5 weeks.

var average = (foodBin[0]+foodBin[1]+foodBin[2]+foodBin[3]+foodBin[4])/5 // added the array together and then divided by 5 weeks to come up withe
//the average

var food = "You have spent a total of"+ ' ' + "$" + (total)+ ' '
+ "on groceries over 5 weeks. That is an average of"+ ' ' + "$" + (average)+ ' ' + "per week"
//for the print I made string adding in spaces and making the $ a string instead of a function.

//console.log(food)


//Discounts
//Givens: $100.00
//discount: 32%
//Oakley Sunglasses
//Sales Tax: 8%
//Result Variable: with tax 73.44 and without tax 68.00




var fullPrice = 100.00; //declaration and definition
var discount = 32; //declaration and definition
var salesTax = .08; // declaration and definition
var glasses= "Oakley Sunglasses";//declaration and definition
var withDiscount = fullPrice - (fullPrice * (discount /100)); //defined with a discount as being discount of .32  divided
//by 100 to bring the fraction to a whole number (.32 to 32). Then times full price (100.00) by 32. After that it will run
//100-32 to come out to 68.00.

var addedTax = withDiscount + (withDiscount * salesTax); // times the discounted item of 68.00 by the sales tax amount 8%.
// which comes to 5.44 in taxes. Then add the taxed amount to the discounted item. wich brings the total to 73.44.

var result = "Your" + ' ' + (glasses) + ' ' + "was originally" + ' ' + "$"+fullPrice + ' ' + "but after a" + ' '  +
    discount+ "%" + ' ' + "discount, it is now $" + withDiscount + ' ' + "without tax, and $" + addedTax+ ' ' +
    "with tax."
//added in all the variables plus the a couple new ones to solve the print. learned the symbols need to be in
// strings or the system thinks its a function.

//console.log(result)






























































