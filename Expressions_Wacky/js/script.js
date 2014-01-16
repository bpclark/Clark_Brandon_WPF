//Brandon Clark
//1-15-2014
//Expressions - Expressions_Wacky

//Given; calories burned , distance ran, weight

var a=.653; // rate of burn for fat while running.

var distance= prompt ("This calculator allows for measuring how many calories you burned while running. **Enter in how far you ran in miles in a day**");// prompt for inserting how far you ran

var weight= prompt ("Enter your weight")// enter in your weight in the prompt

var days=prompt ("How many days a week do you run")//number of days ran

var result= (distance* weight*days)*a// First calculation for result

if (result < 1000) {
    value="Weak sauce! Are you even trying?!";}// added in less than 100 calories to give a funny remark.

if (result >  1001 && result < 2000) {
    value="Nice run...I guess. You can do better.";}// range results with witty response

if (result >  2001 && result < 3000) {
    value="Very good!  Push above 3000 next time.";}//added in a greater than or less than condition for that range

if (result >  3001 && result < 5000) {
    value="Great!  Your a runner.....keep it up!";}//added in a greater than or less than condition for that range

if (result >  5001 && result < 7000) {
    value="The Flash would be jealous!";}//added in a greater than or less than condition for that range

if (result > 7001) {result
    value="Your my hero!  Have a jelly doughnut and a beer.";}// added in a greater than or less than condition for that range

var goodJob = (result) + ' ' + "calories burned!" + ' ' + (value)//created a string concatenation that has the result and vaule string to populate the sentence.

console.log(goodJob)// will display correctly and supports the functions
