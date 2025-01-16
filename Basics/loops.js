// While Loop: Real-World Problem
// Problem: ATM Withdrawal
// Write a program that asks the user how much money they want to withdraw.
// The ATM has $1000.
// If the user tries to withdraw more than $1000, display a message: "Insufficient funds."
// Allow the user to try again until they enter a valid amount or type 0 to cancel the transaction.

let amount = 1000;
let prompt = require('prompt-sync')();
let withdrawAmount = parseInt(prompt("How much money you want to withdraw? "));

while (withdrawAmount > 0) {
    if (withdrawAmount > amount) {
        console.log("Insufficient balance. Try again.");
    } else {
        amount -= withdrawAmount; 
        console.log(`${withdrawAmount} withdrawn. Remaining balance: ${amount}`);
    }
    // Ask for another withdrawal amount or to exit (enter 0)
    withdrawAmount = parseInt(prompt("Do you want to withdraw again or enter 0 to exit."));
}

console.log("Transaction complete. Have a nice day!");


// For Loop: Real-World Problem
// Problem: Fitness Tracker
// Write a program that calculates the total calories burned in a week.
// Assume the user burns 300 calories per day for a workout.
// Use a for loop to calculate the total calories burned over 7 days.
// Display the total calories burned at the end.

let totalCalories = 0;
let perDayburnt = 300;

for (let i = 1; i <= 7; i++) {
    totalCalories += perDayburnt;
    console.log(`Day ${i}: ${perDayburnt} calories burned`);
}

console.log(`Total Calories burned in a week: ${totalCalories}`);


// 3. For...of Loop: Real-World Problem
// Problem: Shopping List
// You have a list of items to buy: ["Milk", "Bread", "Eggs", "Butter"].

// Use a for...of loop to print each item with the message:
// I need to buy [item].

const items = ["Milk", "Bread", "Eggs", "Butter"];

for (const item of items) {
    console.log(`I need to buy ${item}.`);
}


// 4. For...in Loop: Real-World Problem
// Problem: Display Student Info
// You have an object that stores a student's details:
// let student = {
//     name: "Sarah",
//     age: 21,
//     grade: "A"
// };
// Use a for...in loop to print each key-value pair in the format:
// [key]: [value].

let student = {
    name: "Sarah",
    age: 21,
    grade: "A"
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}