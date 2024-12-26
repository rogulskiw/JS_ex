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

// CONFIGURABLE

const car = {};
     
Object.defineProperties(car, {
   brand: {
       value: "Toyota",
       writable: false,
       enumerable: true,
       configurable: false,
       },
   model: {
       value: "Camry",
       writable: false,
       enumerable: true,
       configurable: false,
       },
   })

   console.log("Initial object 'car':", car);
   
   car.brand = "Honda"; //writable is set to false and there is no change
   
   console.log(car); 
   
   delete car.model; //configurable is set to false and there is no change
   
   console.log(car)

//getOwnPropertyDescriptors()

const person = {
    name: "John",
    age: 30, 
    city: "New York",
}

const propertyDescriptors = Object.getOwnPropertyDescriptors(person) //setting propertiy descriptions

console.log(propertyDescriptors) //showing all descriptors

console.log("Property 'name' value:", person.name);
console.log("Property 'age' value:", person.age);
console.log("Property 'city' value:", person.city);

person.name = "Mike";

console.log("Property 'name' value after the change:", person.name);
console.log("Property 'age' value:", person.age);
console.log("Property 'city' value:", person.city);

delete person.age;

console.log("Property 'age' after deleting:", person.age); 

console.log(propertyDescriptors)

