/* 1. User Profile
Create an object to represent a user profile. The object should include the following properties:

name: The user's name.
email: The user's email.
age: The user's age.
Tasks:

Add a method greet that prints: "Hello, my name is [name]!".
Add a new property called phoneNumber.
Update the email property to a new value. */

const user = {
    name: "Hanan Sultan",
    email: "hanan@gmail.com",
    age: 27,
}

console.log(`Hello my name is ${user.name}.`);
user.phone = "03124572388",
console.log(user);
user.email = "hanan@devsinc.com"
console.log(user.email);


/* 2. Inventory System
Create an object to represent a product in a store. The object should include:

productName: Name of the product.
price: Price of the product.
quantity: Quantity of the product in stock.

Tasks:
Add a method updateStock that increases the quantity by a given number.
Add a method getPriceWithTax to calculate and return the price with 10% tax.
Change the price of the product. */

const products = {
    productName: "Butter",
    price: 500,
    quantity: 50,
}

/* 3. Car Object
Create an object to represent a car. The object should have the following properties:

brand: The car's brand.
model: The car's model.
year: The year the car was made.
Tasks:

Add a method getCarDetails that returns a string: "Brand: [brand], Model: [model], Year: [year]".
Add a new property color to the car.
Update the year to the current year. */


/* 4. Library System
Create an object to represent a book in a library. The object should include:

title: Title of the book.
author: Author of the book.
isAvailable: Whether the book is available (true or false).
Tasks:

Add a method toggleAvailability to switch the isAvailable status.
Add a property borrowerName and set it to "Unknown".
Update the title of the book. */


/* 5. Weather App
Create an object to represent the weather of a city. The object should include:

city: The name of the city.
temperature: Current temperature.
condition: Current weather condition (e.g., sunny, cloudy).
Tasks:

Add a method displayWeather to print a message like: "The weather in [city] is [temperature]°C and [condition].".
Add a new property humidity.
Update the temperature and condition values. */