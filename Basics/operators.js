// 1. Age Verification for a Movie
// You’re building a movie booking system. A user must be at least 18 years old to watch an R-rated movie.

// Ask the user for their age.
// Check if they are eligible to book a ticket.

let prompt = require('prompt-sync')();
let age = parseInt(prompt("How old are you? "));

if (age >= 18) {
    console.log("Eligible to book a ticket");
} else {
    console.log("You are not eligible to book a ticket.");
}

// 2. Online Shopping Discount
// An online store offers a 10% discount if the total cart value is $100 or more.

// Ask the user for their total cart value.
// Check if they qualify for the discount.

let cart = parseInt(prompt("What is you cart value? "));

if (cart >= 100) {
    console.log("Congratulions you are qualified for 10% discount.");
} else {
    console.log("Thank you for shopping");
}

// 3. Exam Pass/Fail
// Students need at least 40 marks to pass an exam.

// Ask the user for their exam score.
// Check if they passed or failed.

let result = parseInt(prompt("What is your result "));

if (result >= 40) {
    console.log("Passed");
} else {
    console.log("Failed");
}


// 4. Voting Eligibility
// A person is eligible to vote if they are 18 years or older.

// Ask the user for their age.
// Check if they are eligible to vote.

let voterAge = parseInt(prompt("How old are you? "));

if (voterAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("You are not eligible to vote");
}


// 5. Speed Limit Checker
// A car is considered speeding if it’s traveling above 60 mph.

// Ask the user for the car's speed.
// Check if the car is speeding.

let speed = parseInt(prompt("Please tell us your car speed.")) 

if (speed > 60) {
    console.log("Car is speeding");
} else {
    console.log("Normal speed");
}


// 6. Weather Clothing Suggestion
// Suggest clothing based on temperature:

// If the temperature is below 10°C, suggest wearing a jacket.
// If it’s between 10°C and 20°C, suggest wearing a sweater.
// If it’s above 20°C, suggest wearing light clothing.

let temperature = parseInt(prompt("What is the temperature today in Celsius: "));

if (temperature < 10) {
    console.log("Wear a jacket");
} else if (temperature >= 10 && temperature <= 20) {
    console.log("Wear a sweater");
} else {
    console.log("Wear light clothing");
}

// 7. Bank Loan Eligibility
// To be eligible for a bank loan, a person must meet these conditions:

// Be 21 years or older.
// Have a monthly income of $2000 or more.
// Check if a user meets both conditions.

let eligibility = parseInt(prompt("How old are you? "));
let monthlyIncome = parseInt(prompt("Your monthly income?"));

if (eligibility >= 21 && monthlyIncome >= 2000) {
    console.log("Eligible to get a loan.");
} else {
    console.log("Not eligible to get a loan.");
}


// 8. Number Comparison
// Ask the user for two numbers.

// Determine which number is larger, smaller, or if they are equal.

let number1 = parseInt(prompt("Please enter number: "));
let number2 = parseInt(prompt("Please enter number again: "));

if (number1 > number2) {
    console.log(`${number1} is greater than ${number2}`);
} else if (number1 < number2) {
    console.log(`${number2} is greater than ${number1}`);
} else {
    console.log(`${number1} and ${number2} are equal.`);
}


// 9. Alarm Clock
// A smart alarm only rings if it’s a weekday and the time is between 6:00 AM and 8:00 AM.

// Ask the user for the day of the week and the current time.
// Check if the alarm should ring.

let day = prompt("Enter the day of the week (e.g., Monday, Tuesday): ").toLowerCase();
let time = parseInt(prompt("Enter the current time in 24-hour format (e.g., 6 for 6:00 AM, 18 for 6:00 PM): "));

// Check if it's a weekday (Monday to Friday) and the time is between 6 and 8
if ((day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") &&
    (time >= 6 && time <= 8)) {
    console.log("The alarm is ringing!");
} else {
    console.log("The alarm is off.");
}

// 10. Membership Upgrade
// A customer is eligible for a premium membership if they’ve spent more than $1000 in total purchases.

// Ask the user for their total spending.
// Check if they qualify for the upgrade.

let spent = parseInt(prompt("What are your total spending? "));

if (spent >= 1000) {
    console.log("Congratulions you are qualified for premium membership.");
} else {
    console.log("You are not eligible for premium membership");
}