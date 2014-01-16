//Brandon Clark
//1-15-2014
//Expressions - Expressions_Wacky

//Given; calories burned , distance ran, weight

var a=.653; // rate of burn for fat while running.

var distance= prompt ("This calculator allows for measuring how many calories you burned while running. **Enter in how far you ran in miles**");// prompt for inserting how far you ran

var weight= prompt ("Enter your weight")// enter in your weight in the prompt

var result= (distance* weight*a)// First calculation for result

if (result < 100) {
    value="Weak sauce! Are you even trying?!";}// added in less than 100 calories to give a funny remark.


