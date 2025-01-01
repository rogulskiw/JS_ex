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

