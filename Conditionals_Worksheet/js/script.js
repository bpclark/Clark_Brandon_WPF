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


var tempDeg =Number (prompt("Enter the temperature you want converted"));//the variables needed to do the calculations
var convertedTemp;///the variables needed to do the calculations

degConvert = prompt ("Enter the which kind of temperature you want to convert to: C or F"); // user chooses which temperture type to convert to.

if(degConvert === "C" || degConvert === "c"){//using an OR Operator to use for capital C and lower case c
convertedTemp = (tempDeg - 32) * 5/9;//the formula to convert from F to C

console.log ("The temperature is " + convertedTemp.toFixed(2) + "\xB0 Celsius.");
}//print to the console

if (degConvert === "F" || degConvert === "f"){//using an OR Operator to use for capital F and lower case f
convertedTemp = tempDeg * 9/5 + 32;//the formula to convert from C to F
    console.log ("The temperature is " + convertedTemp.toFixed(2) + "\xB0 Fahrenheit.");
}//print to console result
*/

// Check the Login
//Do: Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.

/*
//Given
Username entered by user
Pssword entered by user
Correct username
Correct password

Result To Print Out:
    “Welcome, (place their username here)!”  - if the username and password is correct
“User not found. Try again.” -if the username does not match
“Password does not match our records.”  -if the username matches but the password does not
*/

/*
var userPop = prompt("Please Enter your user name below:");//userPop defined for prompt
var userName = "Bob";//defining variables

var enterPass = prompt("Enter User password below:");//defining password prompt
var thePass = "bob123";//defining the password
if ((userPop != userName && enterPass != thePass)) {console.log("User not found. Try again.");//defines if the user account is not found on what to display in the console
}
if (enterPass != thePass && userPop == userName) {//if the prompt pass and the stored pass are different and the user promp and name match the this will be displayed.
    console.log("Password does not match our records");}//if the prompt pass and the stored pass are different and the user promp and name match the this will be displayed.
if ((userPop != userName && enterPass == thePass)) {console.log("User not found. Try again.");//if the user prompt and user name are different and prompt pass and stored pass are the same then this will be displayed.
}
if (userName == userPop && thePass == enterPass) {//if all 4 conditions are equal to their correct values then this is what will print
    console.log("Welcome " + userName);}//print to console
    /*

//Movie Ticket Price
//Do:The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
 Determine which of the two prices the customer is eligible for.

Given: Time of Movie (Assume whole numbers here)
 Age of the customer

 Result To Print Out:
 “The ticket price is X”
 */

var ticket= 12;//12.00 for the ticket variable
var cheapTick=7//variable equal to 7

var TOM= prompt ("What time does the movie start this after noon?")