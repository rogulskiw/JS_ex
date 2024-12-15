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

//FILTER AND INCLUDES

const products = [
    { name: "Phone Samsung", price: 1500, available: true },
    { name: "Laptop Lenovo", price: 2500, available: true },
    { name: "Smartwatch Apple", price: 800, available: false },
    { name: "TV LG", price: 3000, available: true },
    { name: "Headphones Sony", price: 200, available: true },
];

const availableProducts = products.filter(n => n.available===true)

console.log("Available products:");
availableProducts.forEach((product) => {
console.log("[Name]", product.name, "[Price]", product.price)
});

const price1500 = products.filter(n => n.price <= 1500)
console.log("Products cheaper than 1500:");
price1500.forEach((product) => {
console.log("[Name]", product.name, "[Price]", product.price);
});

const phone = products.filter(n => n.name.includes("Phone"));

console.log("Products with phone in their name:");
phone.forEach((product) => {
console.log("[Name]", product.nazwa, "[Price]", product.cena);
});

//MAP & REDUCE

const zamowienia = [
    {
        klient: "Jan Kowalski",
        produkty: [
            { nazwa: "Telefon", cena: 1500 },
            { nazwa: "Klawiatura", cena: 200 },
            { nazwa: "Myszka", cena: 50 },
        ],
    },
    {
        klient: "Anna Nowak",
        produkty: [
            { nazwa: "Laptop", cena: 2500 },
            { nazwa: "Monitor", cena: 1000 },
        ],
    },
    {
        klient: "Tomasz Krakowiak",
        produkty: [
            { nazwa: "Karta graficzna", cena: 2100 },
            { nazwa: "Procesor", cena: 1500 },
            { nazwa: "Pamiec RAM", cena: 800 },
        ],
    },
];


const wartosciZamowien = zamowienia.map((zamowienie) => { //map creates new array with values
const wartosc = zamowienie.produkty.reduce(  //reduce takes an array and cummulate it to one value
    (suma, produkt) => suma + produkt.cena,
    0
);
return {
    klient: zamowienie.klient,
    wartoscZamowienia: wartosc,
};
});

wartosciZamowien.forEach((zamowienie) => {
console.log(
    "[Klient]",
    zamowienie.klient,
    "[Wartosc zamowienia]",
    zamowienie.wartoscZamowienia
);
});


