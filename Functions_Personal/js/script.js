/*
Brandon Clark
1-28-2014
Functions_Personal
 */

function deskArea(){//normal function
    var width = prompt ("Enter the width of the desk in inches");//user prompt for width of a desk
    var depth = prompt ("Enter the depth of the desk in inches");// user prompt for depth of a desk
    var fabric = prompt ("Enter the amount of fabric you already have in square feet");// user prompt for fabric to cover a desk

    var result1 = (width * depth) - (fabric *144);// calculation to show how much fabric is needed or not
    if (result1 >0){//condition for the result to print the IF or ELSE
        console.log("You need more fabric! You are short by " + result1+ " square inches.");// print to console
    else{//begin the else condition if the IF was not met.
            console.log("You have " + (result1 * -1)  +  " square inches left, so you do not need to buy more fabric")//print to console
        }
    }
    deskArea();// end of normal function