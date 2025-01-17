// 1. Tip Calculator
// Create a function that calculates the tip amount based on the bill total and the tip percentage.
// Input: Bill total (e.g., $50) and tip percentage (e.g., 15%).
// Output: The calculated tip amount and the total amount (bill + tip).

let prompt = require('prompt-sync')();
let totalBill = parseInt(prompt("Enter the total bill amount: "));
let tipPercentage = parseInt(prompt("Enter the tip percentage: "));

function tipCalculator () {
    let tipAmount = (totalBill + tipPercentage) / 100;
    let totalAmount = totalBill + tipAmount;
    console.log(`The tip amount is: $${tipAmount.toFixed(2)}`);
    console.log(`The total amount including tip will be: $${totalAmount.toFixed(2)}`);
}
tipCalculator();

// 2. Temperature Converter
// Write a function to convert a temperature from Celsius to Fahrenheit or vice versa.
// Input: Temperature value and the conversion type (Celsius to Fahrenheit or Fahrenheit to Celsius).
// Output: The converted temperature.

function convertTemperature(value, conversionType) {
    if (conversionType === "CtoF") {
        return (value * 9/5) + 32; // Convert Celsius to Fahrenheit
    } else if (conversionType === "FtoC") {
        return (value - 32) * 5/9; // Convert Fahrenheit to Celsius
    } else {
        return "Invalid conversion type. Please use 'CtoF' or 'FtoC'.";
    }
}

let temperature = parseFloat(prompt("Enter the temperature: "));
let conversionType = prompt("Enter the conversion type ('CtoF' for Celsius to Fahrenheit, 'FtoC' for Fahrenheit to Celsius): ");

// Call the function and display the result
let result = convertTemperature(temperature, conversionType);
if (typeof result === "number") {
    console.log(`The converted temperature is: ${result.toFixed(2)}`);
} else {
    console.log(result);
}


// 3. Even or Odd Checker
// Create a function that checks if a given number is even or odd.

// Input: A single number.
// Output: A message stating whether the number is even or odd.

let number = parseInt(prompt("Please write a Number: "));

function checker () {
    if (number % 2 === 0) {
    console.log(`${number} is an even number`);
    } else {
        console.log(`${number} is an Odd number`);
    }
} 
checker();


// 4. Greeting Based on Time
// Write a function that displays a greeting message based on the current time.

// Input: Current time in 24-hour format (e.g., 9 for 9:00 AM, 18 for 6:00 PM).
// Output:
// "Good Morning" if the time is between 5 AM and 12 PM.
// "Good Afternoon" if the time is between 12 PM and 5 PM.
// "Good Evening" if the time is between 5 PM and 9 PM.
// "Good Night" if the time is between 9 PM and 5 AM.



// 5. Shopping Cart Total
// Build a function to calculate the total cost of items in a shopping cart.

// Input: An array of item prices (e.g., [5.99, 12.99, 3.49]).
// Output: The total cost (sum of all item prices).