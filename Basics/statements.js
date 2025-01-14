// If-Else Problems

// 1. Movie Ticket Pricing
// Write a program that calculates the ticket price based on age:
// Kids under 12: $8
// Adults (12-64): $12
// Seniors (65+): $10

let prompt = require('prompt-sync')();
let age = parseInt(prompt("How old are you? "));

if (age < 12) {
    ticket = "$8"
} if (age > 12, age < 64) {
    ticket = "$12"
} else {
    ticket = "$10"
}
console.log(ticket);


// 2. Password Checker
// Ask the user for a password (use a variable).
// If the password is "admin123", print "Access granted."
// Otherwise, print "Access denied."

let Password= prompt("Please write password: ")

if (Password === "admin123") {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// 3. Weather Clothing Suggestion
// Create a program that takes a temperature variable and suggests what to wear:
// temperature < 10: Wear a jacket.
// 10 <= temperature <= 25: Wear a sweater.
// temperature > 25: Wear light clothing.

let temperature = parseInt(prompt("What is the temperature today in Celsius: "));

if (temperature < 10) {
    console.log("Wear a jacket");
} else if(10 <= temperature <= 25) {
    console.log("Wear a sweater");
} else {
    console.log("Wear light clothing");
}


// Switch Problems

// 1. Day Planner
// Create a program that takes the day of the week as input (e.g., "Monday").
// Based on the day, print an activity:
// Monday-Friday: "Go to work."
// Saturday: "Relax and watch a movie."
// Sunday: "Prepare for the week ahead."
let day = prompt("What day it is? ")

switch (day) {
    case "Monday":
        console.log("Go to work.");
        break;
    case "Tuesday":
        console.log("Go to work.");
        break;
    case "Wednesday":
        console.log("Go to work.");
        break;
    case "Thursday":
        console.log("Go to work.");
        break;
    case "Friday":
        console.log("Go to work.");
        break;
    case "Saturday":
        console.log("Relax and watch a movie.");
        break;
    case "Sunday":
        console.log("Prepare for the week ahead.");
        break;
    default:
        console.log("Invalid day.");
        break;
}

// 2. Menu Selector
// Write a program that takes a food item (e.g., "pizza") and displays its price:
// "burger": $5
// "pizza": $8
// "salad": $7
// Default: "Item not on the menu."

let menu = prompt("What is in the menu? ")

switch (menu) {
    case "Burger":
        console.log("$5");
        break;
    case "Pizza":
        console.log("$8");
        break;
    case "Salad":
        console.log("$7");
        break;
    default:
        console.log("Item not on the menu.");
        break;
}


// Ternary Problems
// Even or Odd Checker
// Write a program that checks if a number is even or odd using a ternary operator.
let number = parseInt(prompt("Please write a Number: "));

let result = (number % 2 === 0) ? "Even number" : "Odd number";
console.log(result);

// Discount Eligibility
// Create a variable totalAmount and set it to a purchase amount.
// Use a ternary operator to check:
// If the total is more than $100, print "You get a discount!"
// Otherwise, print "No discount for you."

let totalAmount = 100;
let discount = parseInt(prompt("Please write a Number: "));

totalAmount = (discount > 100) ? "You get a discount!" : "No discount for you."
console.log(totalAmount);