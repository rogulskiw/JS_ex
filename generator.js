//Introduction
function* randomNumberGenerator(){
    while(true){
        yield Math.random();
    }
}

const generator = randomNumberGenerator();
for(let i=0; i<5;i++){
    console.log(generator.next().value.toFixed(2));
}

//PASSWORD GENERATOR

function* productCodeGenerator(length, prefix = ""){
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codeLength = length - prefix.length;
    
    while(true){
        let code = prefix; 
        for(let i = 0; i <= codeLength; i++){
            const randomIndex = Math.floor(Math.random()*characters.length);
            code += characters.charAt(randomIndex);
        }
        yield code;
    }
}

let generator1 = productCodeGenerator(8, "PRD");
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//LOTTERY NUMBER GENERATOR

function *lotteryNumberGenerator(){
    const count = 5;
    for(let i = 0 ; i<count; i++){
        yield Math.floor(Math.random()*100); 
    }
}

const generator2 = lotteryNumberGenerator(); 
for(let number of generator2){
    console.log(number);
}

//ORDERS FOR AN INTERNET SHOP

class Order {
    constructor(productName, quantity, unitPrice, orderDate = new Date()){
        this.productName = productName;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.orderDate = orderDate; 
    }
    
    getTotalPrice(){
        const price = parseInt(this.unitPrice * this.quantity);
        return price;
    }
}

function *orderGeneretor(){
    const products = [
       { productName: "Produkt A", quantity: 3, unitPrice: 10 },
       { productName: "Produkt B", quantity: 2, unitPrice: 20 },
       { productName: "Produkt C", quantity: 1, unitPrice: 15 },
   ];
   for(let product of products){
       const order = new Order(product.productName, product.quantity, product.unitPrice);
       yield order;
   }
   
}

let generator3 = orderGeneretor();
for (const order of generator3) {
   console.log("Produkt:", order.productName);
   console.log("Ilosc:", order.quantity);
   console.log("Cena jednostkowa:", order.unitPrice);
   console.log("Data zamowienia:", order.orderDate.toISOString());
   console.log("Cena calkowita:", order.getTotalPrice());
   console.log("-------------------------");
}

//POINTS WITH THROW TRY CATCH

function* kasyno(){
    let sumaPunktow = 0;
    while(true){
        const wynikRzutu = Math.floor(Math.random() *6)+ 1;
        sumaPunktow += wynikRzutu;
        if(sumaPunktow > 20){
            throw new Error("Przekroczono limit punktow!");
        } 
        yield sumaPunktow;
    }
}
const generator4 = kasyno();
try {
    while(true){
        const wynik = generator4.next().value;
        console.log("Suma punktow:", wynik);
    }
} catch (error) {
    console.log(error.message);

}

//ASYNCHRONOUS ITERATION

// Definiujemy funkcję generatora zadania()
async function* zadania() {
    const listaZadan = [
        {
            id: 1,
            opis: "Przygotowanie raportu",
            status: "W trakcie",
        },
        {
            id: 2,
            opis: "Sprawdzenie wiadomości",
            status: "Zakończone",
        },
        {
            id: 3,
            opis: "Spotkanie z klientem",
            status: "W trakcie",
        },
    ];

    for (const zadanie of listaZadan) {
        // Symulujemy operację asynchroniczną za pomocą setTimeout i Promise
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Używamy yield do zwracania informacji o zadaniu
        yield zadanie;
    }
}

// Tworzymy instancję generatora
const generatorZadan = zadania();

// Używamy pętli for await...of do iteracji po generatorze
(async () => {
    for await (const zadanie of generatorZadan) {
        console.log("ID:", zadanie.id);
        console.log("Opis:", zadanie.opis);
        console.log("Status:", zadanie.status);
        console.log("--------------------");
    }
})();
