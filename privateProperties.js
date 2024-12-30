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