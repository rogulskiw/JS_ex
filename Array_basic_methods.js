//ARRAY.AT
const myArray = ['jablko', 'banan', 'cytryna', 'pomarancza'];

function accessArrayElements(index) {
    return myArray.at(index)
}

console.log(accessArrayElements(0));
console.log(accessArrayElements(2));
console.log(accessArrayElements(3));

//PUSH() ANS POP()
let shoppingList = [];
shoppingList.push('Apples');
shoppingList.push('Milk');
shoppingList.push('Bread');
shoppingList.push('Joghurt');
shoppingList.push('Cheese');

console.log(`Shopping list: ${shoppingList}`);
shoppingList.pop(shoppingList.length - 1);
console.log(`Updated shopping list: ${shoppingList}`);

//SHIFT & UNSHIFT
const schedule = [];
schedule.unshift("Meeting with the client")
schedule.unshift("Project presentation")
schedule.unshift("Stand-up event")
console.log(schedule)
schedule.shift();
console.log(schedule)

//SLICE & CONCAT

let part1 = 'That is the first text. '
let part2 = "And that is the second one."

const wholeText = part1.concat(part2); 

console.log(wholeText)
console.log(wholeText.slice(0,10))

//ARRAY.FOREACH
let allExpenses = 0;
     
const expenses = [
    { name: "Food", amount: 50 },
    { name: "Bills", amount: 100 },
    { name: "Transport", amount: 30 },
    { name: "Shopping", amount: 70 },
];

expenses.forEach(function(n){
    allExpenses += n.amount;
})

console.log(`All expenses: ${allExpenses}`)

//INDEXOF AND LASTINDEXOF

const nums= [5,10,15,20,15,30,35];
console.log('Index of first 15: ' + liczby.indexOf(15)) //it shows te first situation when given number appears
console.log('Index of last 15: ' + liczby.lastIndexOf(15)) //it shows te last situation where given number appears


//FIND
const library = [
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling",year: 1997},
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
    { title: "Fantastic Beasts and Where to Find Them", author: "J.K. Rowling", year: 2001},
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1994},
    { title: "Go Set a Watchman", author: "Harper Lee", year: 2015},
];

//Step 1
const title = "Fantastic Beasts and Where to Find Them";

const foundBook = library.find((book) => book.title === title);
if(foundBook) {
    console.log("Step 1:");
    console.log("Title:", foundBook.title);
    console.log("Author:", foundBook.author);
    console.log("Published in:", foundBook.year);
} else {
    console.log("Step 1:");
    console.log("The book with given title has been found.");
}

//Step 2
const author = "Harper Lee"
const index = library.findIndex((book) => book.author === author);
if(index !==-1){
       console.log("Step 2:");
        console.log("Book's index:", index);
    } else {
        console.log("Step 2:");
        console.log("The book with given author is missing.");
    }
    
//Step 3 
    const lastIndex = library.reduceRight((acc, book, index) => {
        if (book.author === author && acc === -1) {
        return index;
     }
        return acc;
     }, -1);

if (lastIndex !== -1) {
console.log("Step 3:");
console.log("Last book index: ", lastIndeks);
} else {
console.log("Step 3:");
console.log("The book with given author is missing.");
}
     
