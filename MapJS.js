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

//GET HAS SIZE

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
   
   //DELETE & CLEAR

   const shoppingList = new Map(); 
     
   shoppingList.set('Jablka', 5);
   shoppingList.set('Chleb', 2);
   shoppingList.set('Mleko', 1);
   console.log(`Zawartosc listy zakupow:`)
   for(const [produkt, ilosc] of shoppingList.entries()){
       console.log(`${produkt}: ${ilosc}`)
   }
   
   shoppingList.delete('Chleb')
   console.log(`Zawartosc listy zakupow po usunieciu:`)
   for(const [produkt, ilosc] of shoppingList.entries()){
       console.log(`${produkt}: ${ilosc}`)
   }
   
   shoppingList.clear(); 
   console.log(`Zawartosc listy zakupow po zakupach:`)
   for(const [produkt, ilosc] of shoppingList.entries()){
       console.log(`${produkt}: ${ilosc}`)
   }

   //KEYS AND VALUES

   const myMap = new Map();
     
   myMap.set("Jablka", 5);
   myMap.set("Chleb", 2);
   myMap.set("Mleko", 1);
   console.log("Klucze z mapy:")
   const iterator = myMap.keys(); 
   for(const key of iterator){
       console.log(key)
   }
   console.log("Wartosci z mapy:")
   const iterator1 = myMap.values(); 
   for(const value of iterator1){
       console.log(value)
   }

//SET AND NEW SET ADD

const mySet = new Set();
     
mySet.add("jabkko");
mySet.add("banan");
mySet.add("pomarancza");
mySet.add("truskawka");
console.log("Zawartosc zbioru:")
for(const element of mySet){
    console.log(element)
}

//HAS AND SIZE

const programmingLanguages = new Set();
    
programmingLanguages.add("JavaScript");
programmingLanguages.add("Java");
programmingLanguages.add("Python");

if(programmingLanguages.has('Java')){
    console.log(`Element [Java] zostal znaleziony w zbiorze.`)
}
const setSize = programmingLanguages.size;
console.log(`Liczba elementow w zbiorze: ${setSize}`)

//DELETE CLEAR

const favoriteMovies = new Set();
favoriteMovies.add("Incepcja");
favoriteMovies.add("Interstellar");
favoriteMovies.add("Prestiz");

console.log("[Moje ulubione filmy]")
for(const movie of favoriteMovies){
   console.log(movie)
}

favoriteMovies.delete("Interstellar")

console.log("[Moje ulubione filmy po usunieciu filmu Interstellar]")
for(const movie of favoriteMovies){
   console.log(movie)
}

favoriteMovies.clear();
console.log("[Moje ulubione filmy po wyczyszczeniu]")
for(const movie of favoriteMovies){
   console.log(movie)
}

//KEY VALUES ENTRTIES

const students = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
    { id: 3, firstName: 'David', lastName: 'Johnson' },
];

const studentSet = new Set(); 
for(const student of students){
    studentSet.add(student); 
}
console.log("[Numer identyfikacyjny studentow]")
const itr = studentSet.keys(); 
for(const student of itr){
    console.log(student.id)
}

console.log("[Imiona i nazwiska studentow]")
const itr1 = studentSet.values(); 
for(const student of itr1){
    console.log(student.firstName, student.lastName);
}

console.log("[Dane studentow]")
for(const entry of studentSet.entries(students)){
    console.log(entry[0].id, entry[1].firstName, entry[1].lastName);
}

