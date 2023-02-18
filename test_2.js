/* 
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

 */
// Constants
const CARTON_CAPACITY = 3.78;  // liters
const COST_PER_LITER = 250;  // Naira
const PROFIT_PER_CARTON = 180;  // Naira

// User input
let total_milk = parseFloat(prompt("Enter the total amount of milk produced in the morning (in liters): "));

// Calculations and output 
let num_cartons = Math.round(total_milk / CARTON_CAPACITY);
alert ("Number of milk cartons needed: " + num_cartons);

let cost = total_milk * COST_PER_LITER;
alert ("Cost of producing milk: " + cost.toFixed(2) +  Naira);

let profit = num_cartons * PROFIT_PER_CARTON;
alert("Profit for producing milk: {profit.toFixed(2)} Naira");
