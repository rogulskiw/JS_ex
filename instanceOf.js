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

//INSTANCE OF

class Vehicle{
    constructor(brand, year, numberOfWheels){
        this.brand = brand; 
        this.year = year; 
        this.numberOfWheels = numberOfWheels;
    }
    
    honk(){
        console.log("Dzwiek klaksonu: Beep beep!");
    }
    
    getAge(){
        return 2023 - this.year;
    }
}

class Car extends Vehicle{
    constructor(brand, year, numberOfWheels, engineCapacity){
        super(brand, year, numberOfWheels);
        this.engineCapacity = engineCapacity;
    }
    
    startEngine(){
        console.log("Silnik uruchomiony!")
    }
}

class Bicycle extends Vehicle{
    constructor(brand, year, numberOfWheels, gearCount){
        super(brand, year, numberOfWheels);
        this.gearCount = gearCount;
    }
    
    ringBell(){
        console.log("Ding ding!")
    }
}

const vehicle = new Vehicle("Fiat", 2005, 4);
vehicle.honk();
console.log("Wiek pojazdu:", vehicle.getAge());

const car = new Car("Ford", 2018, 4, "2.0L");
car.startEngine();
console.log("Wiek pojazdu:", car.getAge());

const bicycle = new Bicycle("Trek", 2020, 2, 7);
bicycle.ringBell();
console.log("Wiek pojazdu:", bicycle.getAge());

console.log("Czy car jest instancja Vehicle?", car instanceof Vehicle);
console.log("Czy bicycle jest instancja Vehicle?", bicycle instanceof Vehicle);