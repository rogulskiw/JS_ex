//CLASS INTRODUCTION

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    setDescription(description) {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }

    printDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Description: ${this.description}`);
    }
}

const myBook = new Book("Lord of the Rings", "J.R.R. Tolkien");
myBook.setDescription(
    "An adventure book about friendship, belief and loyalty..."
);

console.log(myBook.getTitle());
console.log(myBook.getAuthor());
console.log(myBook.getDescription());

myBook.printDetails();

//TV IN CLASS

class TV {
    constructor(brand){
        this.brand = brand;
        this.on = false; 
        this.volume = 50;
        this.channel= 1;
    }
   switchOn(){
       this.on= true;
       console.log('TV has been switched on.')
   }
   
   switchOff(){
       this.on = false
       console.log('TV has been switched off.')
   }
   
   changeVolume(volume){
       if(volume > 0 && volume <=100){
           this.volume = volume;
       }
       console.log("Volume is now on level",glosnosc)
    }
    
    changeChannel(channel){
        this.channel = channel;
        console.log("Channel has been changed to", kanal)
    }
    
}

const myTv = new TV();
mojTelewizor.switchOn();
mojTelewizor.changeVolume(75);
mojTelewizor.changeChannel(5);
mojTelewizor.switchOff();

//SHOPPING LIST

class ShoppingList{
    constructor(shopping){
        this.shopping = [];
    }
    
    addElement(name){
        this.shopping.push(name);
        console.log(`Added ${name} to the Shopping List.`);
    }
    
   removeElement(name) {
   const index = this.shopping.indexOf(name);
   if (index !== -1) {
       this.shopping.splice(index, 1);
       console.log(`Removed ${name} from the Shopping List.`);
   } else {
       console.log(`${name} is not in a Shopping List.`);
       }
   };
    
   showList() {
       console.log("Shopping List:");
       this.shopping.forEach((element, index) => {
           console.log(`${index + 1}. ${element}`);
       });
   }
    
 }

const myShoppingList = new ShoppingList();

myShoppingList.addElement("Apples");
myShoppingList.addElement("Bread");
myShoppingList.addElement("Milk");
myShoppingList.removeElement("Bread");
myShoppingList.showList();

//INHERITANCE

    class KontoBankowe {
        constructor(numer, saldo) {
            this.numer = numer;
            this.saldo = saldo;
        }
 
        wplac(kwota) {
            this.saldo += kwota;
            console.log(
                `Wplacono ${kwota} zl na konto ${this.numer}. Aktualne saldo: ${this.saldo} zl`
            );
        }
 
        wyplac(kwota) {
            if (kwota <= this.saldo) {
                this.saldo -= kwota;
                console.log(
                    `Wyplacono ${kwota} zl z konta ${this.numer}. Aktualne saldo: ${this.saldo} zl`
                );
            } else {
                console.log(
                    `Brak wystarczających srodkow na koncie ${this.numer}.`
                );
            }
        }
    }
 
    class KontoOszczednosciowe extends KontoBankowe {
        constructor(numer, saldo, oprocentowanie) {
            super(numer, saldo);
            this.oprocentowanie = oprocentowanie;
        }
 
        obliczOdsetki() {
            const odsetki = this.saldo * this.oprocentowanie;
            this.saldo += odsetki;
            console.log(
                `Obliczono odsetki dla konta oszczednosciowego ${this.numer}. Aktualne saldo: ${this.saldo} zl`
            );
        }
    }

    const mojeKonto = new KontoBankowe("123456789", 1000);
    mojeKonto.wplac(500);
    mojeKonto.wyplac(200);
 
    const mojeKontoOszczednosciowe = new KontoOszczednosciowe(
        "987654321",
        2000,
        0.05
    );
    mojeKontoOszczednosciowe.wplac(1000);
    mojeKontoOszczednosciowe.wyplac(500);
    mojeKontoOszczednosciowe.obliczOdsetki();

    //Methods

    class Produkt{
        constructor(name,price,desc){
            this.name = name;
            this.price = price;
            this.desc = desc;
        }
        
        informacje(){
           console.log(`Product: ${this.name}`);
           console.log(`Price: ${this.price} zl`);
           console.log(`Description: ${this.desc}`);
        }
        
    }
    
    class Elektronika extends Produkt{
        constructor(name, price, desc, brand){
            super(name, price, desc);
            this.brand = brand;
        }
            informacje(){
                super.informacje();
                console.log(`Brand: ${this.brand}`);
            }
            
        }
    
    class Odziez extends Produkt{
        constructor(name, price, desc, size){
            super(name, price, desc);
            this.size = size;
           }
            informacje(){
                super.informacje();
                console.log(`Size: ${this.size}`);
            }

        
    }
    
    const laptop = new Produkt("Laptop", 4500, "Great laptop."); 
    const telewizor = new Elektronika("Telewizor", 3500, "A big 4K TV.", "Samsung")
    const spodnie = new Odziez("Spodnie", 100, "Dark trousers.", "M");
    
    laptop.informacje(); 
    telewizor.informacje(); 
    spodnie.informacje(); 

    //STATIC Property

    class Product {
        constructor(nazwa, cena){
            this.nazwa = nazwa;
            this.cena = cena;
        }
        
        pobierzNazwe(){
            return this.nazwa
        }
        
        pobierzCene(){
            return this.cena
        }
    }
    
    class Klient{
        constructor(koszyk){
            this.koszyk = [];
        }
       static licznikProduktow = 0; 
       
       dodajProdukt(produkt){
           this.koszyk.push(produkt);
           Klient.licznikProduktow++; 
       }
       
       usunProdukt(produkt){
           this.koszyk.splice(indeks,1);
           Klient.licznikProduktow--;
       }
       
       obliczWartoscKoszyka(){
           let suma = 0;
           for(let produkt of this.koszyk){
               suma +=produkt.pobierzCene();
           }
           return suma;
       }
    }
    
    const klient1 = new Klient();
    const klient2 = new Klient(); 
    
    const produkt1 = new Product("Telewizor", 1999.99);
    const produkt2 = new Product("Smartfon", 1299.99);
    
    klient1.dodajProdukt(produkt1);
    klient1.dodajProdukt(produkt2);
    
    klient2.dodajProdukt(produkt2);
    
    console.log("Wartosc koszyka klienta 1:", klient1.obliczWartoscKoszyka());
    console.log("Wartosc koszyka klienta 2:", klient2.obliczWartoscKoszyka());
    
    console.log("Liczba produktow we wszystkich koszykach:", Klient.licznikProduktow);

    //STATIC METHOD

    class RachunekGieldowy{
        constructor(imie, nazwisko){
            this.imie = imie; 
            this.nazwisko = nazwisko;
        }
        static obliczWartoscAkcji(cenaAkcji){
            return cenaAkcji * 100;
        }
        
    }
    
    const rachunek = new RachunekGieldowy("Jan", "Kowalski");
    
    const cenaAkcji = 10.5; 
    
    const wartoscAkcji = RachunekGieldowy.obliczWartoscAkcji(cenaAkcji);
    
    console.log(`Imie i nazwisko: ${rachunek.imie} ${rachunek.nazwisko}`)
    console.log(`Wartosc akcji wynosi: ${wartoscAkcji}`)

    //INHERITANCE OF STATIC METHODS

    class Stock{
        constructor(symbol, price, quantity){
            this.symbol = symbol;
            this.price = price; 
            this.quantity = quantity;
        }
        
        static formatPrice(price){
            return price.toLocaleString("en-US", {
                style: "currency", 
                currency: "USD",
            });
        }
        
        getValue(){
            return this.quantity * this.price;
        }
        
    }
    
    class DividendStock extends Stock{
        constructor(symbol, price, quantity, dividend){
            super(symbol, price, quantity)
            this.dividend = dividend;
        }
        
        static calculateDividendYield(dividend, price){
            const pointer = dividend / price; 
            return pointer; 
        }
        
        getDividendValue(){
            return this.quantity * this.dividend ;
            
        }
        
    }
    
    const myStock = new Stock("AAPL", 150.25, 100);
    console.log("Wartosc moich akcji:", myStock.getValue());
    
    const myDividendStock = new DividendStock("GOOGL", 1200.75, 50, 2.5);
    console.log("Wartosc moich akcji z dywidenda:", myDividendStock.getValue());
    
    console.log("Wartosc dywidendy:", myDividendStock.getDividendValue());
