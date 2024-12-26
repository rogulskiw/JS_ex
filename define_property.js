//writable property
const person = {
    name: "John", 
    age: 25,
   
}

Object.defineProperty(person, "name",{writable: false});

Object.defineProperty(person, "age",{writable: true});

    person.birthday = function () {
   this.age++;
};

person.introduce = function () {
   console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

person.introduce();
person.birthday();
person.introduce();

//ENUMERABLE is set as true as a default and can be iterated
// when enumerability is changed to false we can observe example below

const person = new Object(); 
person.name = "John";
person.age = 30;
person.city = "New York";

Object.defineProperty(person, "name", {enumerable: true});
Object.defineProperty(person, "age", {enumerable: false}); //age is set to enumerable: false and that's why for of loop does not show this property
Object.defineProperty(person, "city", {enumerable: true});

function printProperties(person){
    for(const [key, value] of Object.entries(person)) {
       console.log(`${key}: ${value}`)}
       
}
printProperties(person);

//
