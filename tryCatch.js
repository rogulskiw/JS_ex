//TRY CATCH 
const divideNumbers = (a,b) => {
    try{
       if(b === 0){ 
               throw new Error("<Error> Nie mozna dzielic prze zero");
           }
           return a / b;
       }  catch (error) {
           console.log(error.message);
       }
    }

console.log(divideNumbers(25,5));
console.log(divideNumbers(8, 0));
console.log(divideNumbers(12, 4));

//TRY CATCH WITH CLASSES

class Product {
    constructor(name, price){
        this.name = name; 
        this.price = price;
    }
    
    calculateDiscount(discountPercentage){
        try{
            if(discountPercentage > 100 && discountPercentage < 0){
                throw new Error("Niewlasciwy procent znizki!");
            }
            const discountAmount = (discountPercentage * this.price) / 100;
            const discountedPrice = this.price - discountAmount;
            return discountedPrice;
        } catch(err){
               console.log(err.message)
           }
    } 
}

const product = new Product("TV", 2000); 
try{
    const discountedPrice = product.calculateDiscount(20);
    console.log(`Przed znizka: ${product.price}`);
    console.log(`Po znizce (20%): ${discountedPrice}`);
} catch(error){
    console.log(error.message)
}