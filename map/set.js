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

