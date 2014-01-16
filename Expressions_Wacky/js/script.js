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

if (result >  101 && result < 200) {
    value="Nice run...I guess. You can do better.";}// range results with witty response

if (result >  201 && result < 300) {
    value="Very good!  Push above 300 next time.";}//added in a greater than or less than condition for that range

if (result >  301 && result < 500) {
    value="Great!  Your a runner.....keep it up!";}//added in a greater than or less than condition for that range

if (result >  501 && result < 700) {
    value="The flash would be jealous!";}//added in a greater than or less than condition for that range

if (result > 701) {result
    value="Your my hero!  Have a jelly doughnut and a beer.";}// added in a greater than or less than condition for that range

var goodJob = (result) + ' ' + "calories burned!" + ' ' + (value)


