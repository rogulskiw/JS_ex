//BIND INTRODUCTION
function calculateDiscount(percent){
    return this.price * (percent/100);
}

const product = {
    price: 250,
}

let calculateProductDiscount = calculateDiscount.bind(product);

const discount = calculateProductDiscount(20);

console.log("Discount:", discount)

//SMALL ONLINE SHOP

function calculateTotal() {
    return this.unitPrices.reduce(
        (acc, curr, index) => acc + curr * this.quantities[index],
        0
    );
}

function displayOrderDetails() {
    console.log("Order details:");
    this.products.forEach((product, index) => {
        console.log(
            `${product} - quantity: ${this.quantities[index]}, price: ${this.unitPrices[index]}`
        );
    });
    const total = calculateTotal.call(this);
    console.log("Overall order cost:", total);
}

const order = {
    products: ["Shirt", "Trousers", "Shoes"],
    quantities: [2, 1, 1],
    unitPrices: [50, 80, 120],
};

const displayOrderDetailsForOrder = displayOrderDetails.bind(order);

displayOrderDetailsForOrder();

