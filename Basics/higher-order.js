/* 1: Calculate Discounts
Scenario:
You have a list of prices for products in an online store. 
You want to calculate the discounted price for each product. 
Use a higher-order function to apply a 10% discount to all items.
Input:
An array of product prices, e.g., [100, 200, 300, 400].
Output:
An array of discounted prices, e.g., [90, 180, 270, 360].
Hint:
Use a higher-order function like .map() to transform each price. */

let prices = [100, 200, 300, 400];

const discountedPrices = prices.map((price) => price * 0.90);

console.log(discountedPrices);


/* 2: Filter Passing Students
Scenario:
A teacher has a list of student scores. 
You need to find out which students passed the exam (a score of 40 or more). 
Use a higher-order function to filter out failing scores.
Input:
An array of student scores, e.g., [35, 50, 40, 20, 70].
Output:
An array of passing scores, e.g., [50, 40, 70].
Hint:
Use a higher-order function like .filter() to select only scores greater than or equal to 40.*/

let scores = [35, 50, 40, 20, 33, 70, 85, 55, 76, 26];

const passingScore = scores.filter((score) => score >= 40);

console.log(passingScore);


/* 3: Find the Most Expensive Item
Scenario:
You are managing an inventory of products. You need to find the most expensive item in the inventory.
Input:
An array of product prices, e.g., [100, 350, 200, 400, 150].
Output:
The most expensive price, e.g., 400.
Hint:
Use a higher-order function like .reduce() to determine the highest value. */

let productPrices = [350, 250, 140, 220, 333, 670, 185, 155, 476, 526];

const mostExpensive = productPrices.reduce((maxPrice, currentPrice) => {
    return currentPrice > maxPrice ? currentPrice : maxPrice;
}, 0);

console.log(mostExpensive);