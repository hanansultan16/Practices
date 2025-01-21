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
