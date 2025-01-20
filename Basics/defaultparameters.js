// 1: Salary Calculator
// Write a function to calculate the total monthly salary of an employee, including a bonus.

// Input:
// baseSalary (mandatory): The base salary of the employee.
// bonus (optional): A bonus amount, defaulting to $500 if not provided.
// Output: The total salary (base salary + bonus).

let prompt = require('prompt-sync')();
let baseSalary = parseInt(prompt("Please enter your basic salary: "));
let bonus = parseInt(prompt("Please enter bonus amount if any (press Enter to skip): ")) || undefined;

function calculateTotalSalary(baseSalary, bonus = 500) {
    let totalSalary = baseSalary + bonus;
    return totalSalary; 
}

console.log(`Your total salary is: $${calculateTotalSalary(baseSalary, bonus)}`);


// 2: Greeting Message
// Write a function to generate a personalized greeting message for users of a website.

// Input:
// name (mandatory): The name of the user.
// language (optional): The language of the greeting, defaulting to "English" if not provided.
// Output: A greeting message in the specified language. For example:
// "Hello, John!" (for English)
// "Hola, John!" (for Spanish)

let name = prompt("What is your name? ");
let language = prompt("In which language do you want your greeting? (English, Spanish, French, Urdu): ");

function generateGreeting(name, language = "English") {
    if (language === "English") {
        return `Hello, ${name}!`;
    } else if (language === "Spanish") {
        return `Hola, ${name}!`;
    } else if (language === "French") {
        return `Bonjour, ${name}!`;
    } else if (language === "Urdu") {
        return `Salam, ${name}!`;
    } else {
        return `Hello, ${name}!`; 
    }
}

console.log(generateGreeting(name, language));