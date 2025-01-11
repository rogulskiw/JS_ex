//TASK 1
//SCRIPT.JS

import { calculateTotalOrder } from './order.js';

const total = calculateTotalOrder();
console.log('Suma zamówień: ' + total);

//ORDERS.JS

const orders = [
    { produkt: 'Telewizor', cena: 1500 },
    { produkt: 'Smartfon', cena: 800 },
    { produkt: 'Laptop', cena: 2000 },
    { produkt: 'Słuchawki', cena: 150 },
  ];
  
  function calculateTotalOrder() {
      let total = 0; 
      orders.forEach((element) => {
        console.log(element.cena)
          total += element.cena;
      });
      return total;
  };
  
  export { calculateTotalOrder };

  //TASK 2
  