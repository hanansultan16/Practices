// 1. String (Test)
let firstName = "John";
let address = "123 Elm Street, Springfield";
let favoriteQuote = "The only limit to our realization of tomorrow is our doubts of today.";

// 2. Number (Numeric values)
let age = 25;
let totalBill = 150.75;
let numberOfGuests = 20;

// 3. Boolean (True or False)
let isLoggedIn = true;
let hasDiscount = false;
let isAvailable = true;

// 4. Null 
let middleName = null; // No middle name
let lastSeen = null;   // Data not available

// 5. Undefined (Unassigned value)
let username;
let salary; // Both are undefined

// 6. Object (Complex structures or data grouping)
let student = {
    name: "Emily",
    age: 20,
    grade: "A",
    enrolled: true,
};

// 7. Array (List of items)
let colors = ["red", "blue", "green"];
let scores = [90, 85, 100];
let shoppingList = ["Milk", "Eggs", "Bread"];

// 8. BigInt (Very large numbers)
let bigNumber = 123456789012345678901234567890n;

// 9. Symbol (Unique identifiers)
let uniqueId = Symbol("id");

// 10. Function (Reusable blocks of code)
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));  