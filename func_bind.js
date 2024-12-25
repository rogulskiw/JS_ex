function calculateDiscount(percent){
    return this.price * (percent/100);
}

const product = {
    price: 250,
}

let calculateProductDiscount = calculateDiscount.bind(product);

const discount = calculateProductDiscount(20);

console.log("Discount:", discount)
