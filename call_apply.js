//FUNC CALL INTRO
function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
  
}

function subtract(a,b){
    return a - b;
}

const calculator = {
    x: 5, 
    y: 3,
    result: null,
}

calculator.result = sum.call(calculator,calculator.x,calculator.y);
console.log(`Sum result: ${calculator.result}`)
calculator.result = multiply.call(calculator,calculator.x,calculator.y);
console.log(`Multiplication result: ${calculator.result}`)
calculator.result = subtract.call(calculator,calculator.x,calculator.y);
console.log(`Subtraction result: ${calculator.result}`)

//APPLY

function findMax(numbers) {
    return Math.max.apply(null, numbers);
}

function findMin(numbers) {
    return Math.min.apply(null, numbers);
}

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

const numbers = [12, 6, 8, 17, 3, 10];

const max = findMax.apply(null, [numbers]);
console.log("The highest number is:", max);

const min = findMin.apply(null, [numbers]);
console.log("The lowest number is", min);

const average = calculateAverage.apply(null, [numbers]);
console.log("Average:", Number(average.toFixed(2)));

//THE MOST PROFITABLE PRODUCT

function calculateTotalRevenue(transactions) {
    const totalRevenue = transactions.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
    );
    return totalRevenue;
}

function findBestSellingProduct(transactions) {
    const bestSellingProduct = transactions.reduce(
        (maxProduct, currProduct) => {
            return currProduct.quantity > maxProduct.quantity
                ? currProduct
                : maxProduct;
        }
    );
    return bestSellingProduct.name;
}

function findMostProfitableProduct(transactions) {
    const mostProfitableProduct = transactions.reduce(
        (maxProduct, currProduct) => {
            const currProfit =
                (currProduct.price - currProduct.cost) *
                currProduct.quantity;
            const maxProfit =
                (maxProduct.price - maxProduct.cost) * maxProduct.quantity;
            return currProfit > maxProfit ? currProduct : maxProduct;
        }
    );
    return mostProfitableProduct.name;
}

const transactions = [
    { name: "Product A", price: 10, cost: 5, quantity: 20 },
    { name: "Product B", price: 8, cost: 4, quantity: 30 },
    { name: "Product C", price: 12, cost: 6, quantity: 15 },
];

const totalRevenue = calculateTotalRevenue.apply(null, [transactions]);
console.log("Total revenues:", totalRevenue);

const bestSellingProduct = findBestSellingProduct.apply(null, [
    transactions,
]);
console.log("The best selling product:", bestSellingProduct);

const mostProfitableProduct = findMostProfitableProduct.apply(null, [
    transactions,
]);
console.log("The most profitable product:", mostProfitableProduct);