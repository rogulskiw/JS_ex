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

//