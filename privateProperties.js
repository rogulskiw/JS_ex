//PRIVATE CLASS PROPERTIES
class Person {
    constructor(name, age, address) {
        this._name = name;
        this._age = age;
        this._address = address;
    }

    introduce() {
        return `Czesc, nazywam sie ${this._name}, mam ${this._age} lat i mieszkam na ${this._address}.`;
    }

    changeAddress(newAddress) {
        this._address = newAddress;
    }
}

const person1 = new Person("Jan Kowalski", 30, "ul. Kwiatowa 1");
console.log(person1.introduce());

person1.changeAddress("ul. Sloneczna 10");
console.log(person1.introduce());

//BANK ACCOUNT AND METHODS

class BankAccount{
    constructor(accountNumber, balance){
        this._accountNumber = accountNumber;
        this._balance = balance;
    }
    _checkMinimumBalance(amount){
        const minimumBalance = 100;
        if(this._balance < minimumBalance){
            console.log(`Saldo jest zbyt niskie`)
        }
    }
    
    getBalance(){
        return this._balance;
    }
    
    deposit(amount){
        return this._balance +=amount
    }
    
   withdraw(amount) {
       this._checkMinimumBalance();
       this._balance -= amount;
   }

}

const account1 = new BankAccount("1234567890", 500);
account1.deposit(200);
account1.withdraw(100);

console.log(account1.getBalance());

//TASKS LIST

class TaskList {
    #tasks;

    constructor() {
        this.#tasks = [];
    }

    addTask(title) {
        const task = {
            title: title,
            status: "niezakonczone",
        };
        this.#tasks.push(task);
    }

    removeTask(title) {
        const index = this.#tasks.findIndex((task) => task.title === title);
        if (index !== -1) {
            this.#tasks.splice(index, 1);
        }
    }

    markTaskAsDone(title) {
        const task = this.#tasks.find((task) => task.title === title);
        if (task) {
            task.status = "zakonczone";
        }
    }

    showTasks() {
        this.#tasks.forEach((task) => {
            console.log(`Tytul: ${task.title} | Status: ${task.status}`);
        });
    }
}

const myTasks = new TaskList();
myTasks.addTask("Zadanie 1");
myTasks.addTask("Zadanie 2");
myTasks.addTask("Zadanie 3");
myTasks.showTasks();

myTasks.markTaskAsDone("Zadanie 2");
myTasks.removeTask("Zadanie 3");
myTasks.showTasks();


//SHOPPING LIST WITH CHECKING


    class ShoppingList {
        #items;
 
        constructor() {
            this.#items = [];
        }
 
        #isDuplicate(item) {
            return this.#items.some((existingItem) => existingItem === item);
        }
 
        addItem(item) {
            if (this.#isDuplicate(item)) {
                console.log("Produkt juz istnieje na liscie.");
            } else {
                this.#items.push(item);
                console.log("Produkt dodany do listy.");
            }
        }
 
        removeItem(item) {
            const index = this.#items.findIndex(
                (existingItem) => existingItem === item
            );
            if (index !== -1) {
                this.#items.splice(index, 1);
                console.log("Produkt usuniety z listy.");
            } else {
                console.log("Produkt nie istnieje na liscie.");
            }
        }
 
        showItems() {
            if (this.#items.length === 0) {
                console.log("Lista zakupow jest pusta.");
            } else {
                console.log("Lista zakupow:");
                this.#items.forEach((item) => {
                    console.log("- " + item);
                });
            }
        }
    }
 
    const myList = new ShoppingList();
    myList.addItem("Jablka");
    myList.addItem("Mleko");
    myList.addItem("Chleb");
    myList.addItem("Mleko");
    myList.showItems();
 
    myList.removeItem("Mleko");
    myList.showItems();
