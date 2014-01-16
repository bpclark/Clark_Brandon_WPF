//Brandon Clark
//1-15-2014
//Expressions - Expressions_Industry

//Givens: How many people are working, how long does it take to complete the task, cost of each employee

var peopleWorking = prompt ("This is a calculator to see how much it costs to accomplish a task. Please enter how many people will be working on the task.");// defining the prompt with how many people would be working on this task.

var hoursComplete = prompt ("Please enter the projected hours to complete the task at hand.");// defining prompt with planned hours it would take to complete the task.

var costEmployee = prompt ("Now enter the base pay average of the employees");//defining prompt to enter base pay average to help with determining the final fast of man power hours.

var percentError = .10 // added 10% for an auto increase in cost

var totalCost= (hoursComplete*costEmployee*peopleWorking);//defining the total cost to finish the task.

var withPercent=  (totalCost * percentError)+ totalCost;//added the calculation + totalCost to compensate for the added 10%

var result= ("The total cost to complete the task is $")+(totalCost)+"." + "But just incase 10% has been added to act as a buffer for planning purposes which would result in a new cost of $"+(withPercent)+"."//added in totalCost without the 10% kicker to just the difference in price of how much 10% over would be


console.log(result);//will the display the calculation correctly. Tells the difference between 10% kicker or not.