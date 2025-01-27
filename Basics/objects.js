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

let product = {
    productName: "Wireless Headphones",
    price: 150,
    quantity: 30,

    updateStock: function (newStock) {
        this.quantity += newStock;
        console.log(`Stock updated. New quantity: ${this.quantity}`);
    },

    getPriceWithTax: function () {
        const priceWithTax = this.price * 1.10; 
        return priceWithTax.toFixed(2); 
    }
};

product.updateStock(20); 

console.log(`Price with 10% tax: $${product.getPriceWithTax()}`);

product.price = 180;
console.log(`The updated price of ${product.productName} is $${product.price}.`);


/* 3. Car Object
Create an object to represent a car. The object should have the following properties:

brand: The car's brand.
model: The car's model.
year: The year the car was made.
Tasks:

Add a method getCarDetails that returns a string: "Brand: [brand], Model: [model], Year: [year]".
Add a new property color to the car.
Update the year to the current year. */

let car = {
    brand: "Hyundai",
    model: "Sonata",
    year: 2020,
}

let keys = Object.keys(car); // to show values in string
console.log("Keys of the car object:", keys);

car.color = "Yellow"; // add color
car.year = new Date().getFullYear(); // to update year
console.log("Updated car object:", car);


/* 4. Library System
Create an object to represent a book in a library. The object should include:

title: Title of the book.
author: Author of the book.
isAvailable: Whether the book is available (true or false).
Tasks:

Add a method toggleAvailability to switch the isAvailable status.
Add a property borrowerName and set it to "Unknown".
Update the title of the book. */

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isAvailable: true,
    toggleAvailability: function () {
        this.isAvailable = !this.isAvailable;
    }
};

book.borrowerName = "Unknown";

book.title = "The Great Gatsby - Updated Edition";

console.log("Updated Book Object:", book);

book.toggleAvailability();
console.log("Availability after toggle:", book.isAvailable);


/* 5. Weather App
Create an object to represent the weather of a city. The object should include:

city: The name of the city.
temperature: Current temperature.
condition: Current weather condition (e.g., sunny, cloudy).
Tasks:

Add a method displayWeather to print a message like: "The weather in [city] is [temperature]°C and [condition].".
Add a new property humidity.
Update the temperature and condition values. */

let weather = {
    city: "Lahore",
    temperature: 25,
    condition: "Sunny",
}

let displayWeather = `The weather in ${weather.city} is ${weather.temperature}°C and ${weather.condition}.`;
console.log(displayWeather);
weather.humidity = "39%";
weather.temperature = 21;
weather.condition = "Cloudy";

console.log("Update Weather in Lahore", weather);