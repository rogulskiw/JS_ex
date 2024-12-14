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


