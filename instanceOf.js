class Animal{
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }
    
    eat(){
        console.log(`Zwierze ${this.name} je.`)
    }
}

class Cat extends Animal{
    constructor(name, age){
    super(name,age);
    }
    meow(){
        console.log(`Kot ${this.name} miauczy.`);
        
    }

}

class Dog extends Animal{
    constructor(name,age){
    super(name,age);
    }
    bark(){
        console.log(`Pies ${this.name} szczeka.`);
    }
}    

const animal1 = new Animal("Rex", 3);
const cat1 = new Cat("Mruczek", 5);
const dog1 = new Dog("Kajtek", 2);

animal1.eat(); 
cat1.eat();
dog1.eat();

cat1.meow();
dog1.bark(); 

console.log(animal1 instanceof Animal); 
console.log(cat1 instanceof Cat); 
console.log(dog1 instanceof Dog); 
console.log(animal1 instanceof Cat); 
console.log(dog1 instanceof Animal); 

