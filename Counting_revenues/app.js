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