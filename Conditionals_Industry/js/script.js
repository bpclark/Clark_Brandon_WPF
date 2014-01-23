//Brandon Clark
//1-22-2014
//Conditionals_Industry

//givens:RPMS, CHT (cylinder head temp), density altitude
//Results: You are cleared for take off or You are not cleared for take off.

var rpms = prompt("Enter current max rpms");//prompt for user rpm value
var cht= prompt ("Enter in the current CHT(cylinder head temp) in celsiuses");//prompt for user to enter the current cht
var DA= prompt ("Enter the current Density Altitude");//prompt for user to enter DA

if (rpms >=5400 && rpms <=5600 && cht >=80 && cht <=155 && DA >=0 && DA <3000){//if the Ternary conditions are met then a go for launch will print
    console.log ("You are cleared for take off!");//print to console
}else{console.log ("You are not cleared for take off! ABORT ABORT ABORT!!!");//else statment to abort if "IF" condition isn't met
}