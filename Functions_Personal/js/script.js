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