//Spread

function calculateAverage(...numbers){
    let sum = 0; 
    for (let el of numbers) {
        sum += el;
    }
    const avg = (sum / numbers.length).toFixed(2)
    return avg; 
}
     let result = calculateAverage(4, 8, 6, 2, 10);
    console.log("Srednia liczb:", result);

//...REST
    const products = ["Coffee", "Tea", "Orange"];
 
    function addProduct(...newProducts) {
        products.push(...newProducts);
    }
 
    addProduct("Milk", "Bread", "Chocolate");
 
    console.log("[All products]");
    products.forEach((element) => {
        console.log(element);
    });
 
    function deleteProducts(...indexes) {
        indexes.forEach((index) => {
            products.splice(index, 1);
        });
    }
 
    deleteProducts(1, 2);
 
    console.log("[Products after deleting]");
    products.forEach((element) => {
        console.log(element);
    });