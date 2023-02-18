/* 
If you buy a 40 GB hard drive, then chances are that the actual storage on the hard drive is not 40 GB.

This is due to the fact that, typically, a manufacturer uses 1,000 bytes as the value of 1K bytes, 1,000 K bytes as the value of 1 MB, 1,000 MB as the value of 1 GB. Therefore, a 40 GB hard drive contains 40,000,000,000 bytes.

However, in computer memory, 1 KB is equal to 1,024 bytes, and so on. So the actual storage on a 40 GB hard drive is approximately 37.25 GB. (You might like to read the fine print next time you buy a hard drive.)

Write a program that prompts the user to enter the size of the hard drive specified by the manufacturer, on the hard drive box, and outputs the actual storage capacity of the hard drive.

 */

//SOLUTIONS TO THE PROBLEM 

// This sets of codes takes in the value of a specified hard drive storage capacity, and returns the actual storage capacity.

let specified = prompt('input  the specified hard drive storage capacity in GB')
let specified_capacity = parseFloat(specified, 10)

let specified_capacity_byte = specified_capacity * 1000 ** 3

let actual_capacity = specified_capacity_byte / (1024 ** 3)
let actual_capacity_approximation= actual_capacity.toFixed(2)

// To fixed method converts the value to 2 decimal places

console.log('The actual hard drive storage capacity is ' + actual_capacity_approximation + ' GB');
