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