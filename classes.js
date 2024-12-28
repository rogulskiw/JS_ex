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
