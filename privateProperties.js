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

