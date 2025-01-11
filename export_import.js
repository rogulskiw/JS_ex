//~~~~~~TASK~~~~~~~~~~
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

  //~~~~~TASK 2~~~~~~~
  //SCRIPT.JS

  import {addOrder, getTotalOrderValue, displayOrders} from './module.js';

addOrder(1, 'Piłka', 10, 5);
addOrder(2, 'Ochraniacze', 20, 3);
addOrder(3, 'Koszulka', 15, 2);
 
console.log('Total Order Value:', getTotalOrderValue());
console.log('--- All Orders ---');
displayOrders();

//MODULE.JS
const orders1 = []; 

function addOrder(orderNumber, productName, unitPrice, quantity) {
  const order = {
  orderNumber,
  productName,
  unitPrice,
  quantity,
};
 
orders1.push(order);
}

const getTotalOrderValue = () => {
  let total = 0;
  orders1.forEach((order) => {
    total += order.unitPrice * order.quantity;
  })
  return total;
}

function displayOrders(){
  orders1.forEach((order)=>{
    console.log(`Order Number: ${order.orderNumber}, Product: ${order.productName}, Quantity: ${order.quantity}, Total Value: ${order.unitPrice * order.quantity}`);
  })
}

export { addOrder, getTotalOrderValue, displayOrders };

