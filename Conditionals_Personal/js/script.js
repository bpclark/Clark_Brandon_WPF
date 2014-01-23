//Brandon Clark
//1-22-2014
//Conditionals

//Given: what is hourly pay, how many hours did you work this month, How much are your bills, how much money is left after bills

//result print: Make better decisions with your money and get more than what you can afford! You are in the red $X or "Good job! You have $X and are in the black. Would you like a loan?")

var myPay= prompt ("What is your hourly pay?");//prompt for hourly pay
var myBills= prompt ("How much are your bills monthly?");//prompt for your bills monthly
var myHours=prompt("How many hours did you work this month?");//prompt for hours worked

moneyLeft = (myPay*myHours) - myBills;//math to come out with moneyleft for the IF and Else
if (moneyLeft <myPay) {//starting the first conditional problem
    console.log ("Make better decisions with your money and get more than what you can afford! You are in the red $"+ moneyLeft + "." );//print to console the first respone if money left is negitive
}else{
    console.log ("Good job! You have $" + moneyLeft + " and are in the black. Would you like a loan?")//starting the Else condition if the money is greater than the moneyLetf variable
}



