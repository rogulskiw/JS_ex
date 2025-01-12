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

//TASK 3
//DANIA.JS

export const danie1 = {
  nazwa: 'Pizza Margherita',
  cena: 25.99,
  ilosc: 2
};
 
export const danie2 = {
  nazwa: 'Spaghetti Bolognese',
  cena: 18.5,
  ilosc: 1
};
 
export const danie3 = {
  nazwa: 'Sałatka Cezar',
  cena: 12.99,
  ilosc: 3
};

//KALKULATOR.JS

import * as dania from './dania.js';


function obliczCalkowitaWartoscZamowienia(dania) {
  let wartoscZamowienia = 0;
  Object.values(dania).forEach(value => {
    wartoscZamowienia += value.cena*value.ilosc;
})
  return wartoscZamowienia.toFixed(2);
}

const calkowitaWartoscZamowienia = obliczCalkowitaWartoscZamowienia(dania)

console.log("Calkowita wartosc zamowienia: ", calkowitaWartoscZamowienia);

//IMPORT * AS TASK4
//main.js:

import * as zadania from './zadania.js';
 
zadania.dodajZadanie('Zrobic zakupy');
zadania.dodajZadanie('Napisac raport');
zadania.dodajZadanie('Odwiedzic przyjaciela');
 
zadania.wyswietlZadania();


//zadania.js:

let listaZadan = [];
 
export function dodajZadanie(tekstZadania) {
  listaZadan.push(tekstZadania);
}
 
export function wyswietlZadania() {
  console.log('Lista zadan:');
  for (let i = 0; i < listaZadan.length; i++) {
console.log(`${i + 1}. ${listaZadan[i]}`);
  }
}