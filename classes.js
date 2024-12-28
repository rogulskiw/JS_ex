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


