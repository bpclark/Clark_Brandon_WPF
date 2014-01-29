/*
Brandon Clark
1-28-2014
Functions_Industry

Givens: Monitor height, width, number of monitors

Result: 3 statements depending on resolution.
 */

function calcRez(){//normal named function
    var width = prompt ("Enter a single monitors width in pixels (i.e. 1920 1024 ect.)");//width prompt from user
    var height = prompt ("Enter a single monitors height in pixels.(i.e. 480, 720, 1080)");// height prompt from user
    var maxMon = prompt ("Enter in how many monitors you want set up to share a desktop.");// number of monitors the user will be using.

    var maxRez = width* maxMon;// calculation for the maximum screen resolution per added monitor.

    if (maxRez < 1920){//starting the if condition
        console.log("Your screen resolution with " + maxMon + " monitor(s) would be "+ maxRez + " X " + height +"." +  " Not impressed" );//print to console

    }else if (maxRez >= 1920 && maxRez < 3840 ){//else if with logical operators
        console.log("Your screen resolution with " + maxMon +  " monitor(s) would be " + maxRez + " X " + height + "." + " Go big or go home! Try again when your ready to play with the big dogs!");//print to console