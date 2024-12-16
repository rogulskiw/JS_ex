let magazyn = new Map();
magazyn.set("Telewizor", 5);
magazyn.set("Laptop", 10);
magazyn.set("Smartfon", 20);
magazyn.set("Konsola", 15);
     
console.log("Zawartosc magazynu:");
magazyn.forEach((ilosc, produkt) => {
    console.log(produkt + ": " + ilosc);
});
     
magazyn.set("Telewizor", 3);
magazyn.set("Laptop", 8);

console.log("Zaktualizowana zawartosc magazynu:");
magazyn.forEach((ilosc, produkt) => {
    console.log(produkt + ": " + ilosc);
});

magazyn.delete("Smartfon");

console.log("Finalna zawartosc magazynu:");
magazyn.forEach((ilosc, produkt) => {
    console.log(produkt + ": " + ilosc);
});

const orders = new Map();
const order1 = {
   id: "order001",
   customerName: "John Doe",
   items: ["Shirt", "Pants", "Shoes"],
   };
const order2 = {
   id: "order002",
   customerName: "Jane Smith",
   items: ["Dress", "Hat"],
   };
   
   orders.set(order1.id, order1)
   orders.set(order2.id, order2)
   
   console.log(`Liczba zamowien w systemie: ${orders.size}`);
   console.log("Zamowienia w systemie:");
  
   for(const [orderId, order] of orders.entries()){
       console.log(`[ID zamowienia: ${orderId}]`);
       console.log(`Klient: ${order.customerName}`);
       console.log(`Przedmioty: ${order.items.join(", ")}`);
   }
   
   const orderIdToCheck = "order001";
   if(orders.has("order001")){
       console.log("Zamowienie o ID order001 istnieje w systemie.")
   } else {
       console.log("Zamowienie o ID order001 nie istnieje w systemie.")
   }
   
   const orderIdToGet = "order002";
   const orderToGet = orders.get(orderIdToGet);
   if (orderToGet) {
       console.log("[Informacje o zamowieniu:]");
       console.log(`ID zamowienia: ${orderToGet.id}`);
       console.log(`Klient: ${orderToGet.customerName}`);
       console.log(`Przedmioty: ${orderToGet.items.join(", ")}`);
   } else {
       console.log(`Nie znaleziono zamowienia o ID ${orderIdToGet}.`);
   }
   
   