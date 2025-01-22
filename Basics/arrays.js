/* 1: Grocery List
You are making a grocery list for shopping.

Create an array to store the items: ["Milk", "Bread", "Eggs", "Butter"].
Add a new item, "Cheese", to the end of the list.
Remove the last item from the list.
Display the total number of items in the grocery list. */

const groceryList = ["Milk", "Bread", "Eggs", "Butter"];
groceryList.push("Cheese");
groceryList.pop();
console.log(groceryList.length);

/* 2: Favorite Movies
You want to keep a list of your top 5 favorite movies.

Create an array to store the names of your favorite movies.
Replace the 3rd movie with "The Dark Knight".
Display the updated list of movies.
Display the name of the first movie in the list. */

const favoriteMovies = ["Lord of the Rings", "Fast & furius", "Gemini", "Persuit of Hapyness"];
favoriteMovies.splice(2,1, "The Dark Knight");
console.log(favoriteMovies);
console.log(favoriteMovies[0]);

/* 3: Student Marks
A teacher wants to calculate the average marks of a student in 5 subjects.

Create an array to store the marks: [85, 90, 78, 92, 88].
Calculate and display the average marks.
Add a bonus of 5 marks to each subject and display the updated marks. */

const marks = [85, 90, 78, 92, 88];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log(sum);
const updatedMarks = marks.map(addMarks);
function addMarks(num) {
    return num + 5;
}
console.log(updatedMarks);

/* 4: Daily Temperatures
You recorded the temperatures for each day of the week: [22, 25, 20, 23, 19, 24, 21].

Find and display the highest temperature of the week.
Find and display the lowest temperature of the week.
Add 2 degrees to each temperature (to simulate a temperature rise) and display the updated temperatures. */




/* 5: Shopping Cart
You have a shopping cart with the prices of items: [100, 250, 75, 300, 150].

Calculate and display the total cost of all items.
Remove the cheapest item from the cart and display the updated list of prices.
Add a new item priced at 200 and display the updated cart. */

