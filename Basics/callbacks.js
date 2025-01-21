// 1: Greeting a User
// Write a function called welcomeUser(name, callback):

// It takes two arguments:
// name: The name of the user (a string).
// callback: A function that decides how to greet the user.
// Inside welcomeUser, call the callback function with the name as its argument.

let prompt = require('prompt-sync')();
// let name = prompt("Please write your name: ");

// function welcomeUser(name, callback) {
//     console.log("Welcome to the system!");
//     callback(name); 
// }

// function greetUser(name) {
//     console.log(`Hello, ${name}! We're glad to have you here.`);
// }

// welcomeUser(name, greetUser);

/* 2: Fetching Data
Simulate fetching data from a server using a callback:

Create a function called fetchData(callback).
Inside the function:
Use setTimeout to simulate a delay (e.g., 2 seconds).
After the delay, pass a hardcoded object (e.g., { id: 101, title: "Callback Example" }) to the callback.
Pass a function to fetchData that prints the data. */

// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         const data = { id: 101, title: "Callback Example" };
//         callback(data); 
//     }, 2000); 
// }

// function displayData(data) {
//     console.log("Data fetched:", data);
// }

// fetchData(displayData);

/* 3: Array Processing
Write a function called processArray:

It takes two arguments:
arr: An array of numbers.
callback: A function to process each number.
Inside processArray:
Loop through the array and apply the callback to each element.
Examples of callback functions to test:
Double each number.
Find the square of each number. */

let number = parseInt(prompt("Please enter a number: "));
function checkNumber (callback) {
    if (number % 2 === 0){
        console.log(`${number} is an even number`);
    } else {
        console.log(`${number} is an Odd number`);
    }
    callback();
} 

function checker() {
    console.log("The number check is complete");
}

checkNumber(checker);

