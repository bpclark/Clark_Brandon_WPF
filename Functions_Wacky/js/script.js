/*
Brandon Clark
1-28-2014
Function_Wacky
 */

function theFunction(ducks,goats,turtles)//defining the items that are going to be encapsulated
{
    var zoo = ducks + goats + turtles;// giving the calculation needed for the return.
    return zoo;//returning back to the previous statement for the callback
}
    var animals = theFunction(5, 10, 6);//defining the encapsulated values for the return entries
    console.log("There are a total of " + animals + " animals at this petting zoo.");//print to console