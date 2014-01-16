//Brandon Clark
//1-15-2014
//Expressions - Expressions_Industry

//Givens: How many people are working, how long does it take to complete the task, cost of each employee

var peopleWorking = prompt ("This is a calculator to see how much it costs to accomplish a task. Please enter how many people will be working on the task.");// defining the prompt with how many people would be working on this task.

var hoursComplete = prompt ("Please enter the projected hours to complete the task at hand.");// defining prompt with planned hours it would take to complete the task.

var costEmployee = prompt ("Now enter the base pay average of the employees");//defining prompt to enter base pay average to help with determining the final fast of man power hours.

var totalCost= (hoursComplete*costEmployee*peopleWorking);