 function calculateArea(width, height){
    let area = width * height;
    
    const printArea = () => { //arrow function refers to the Window object and not to parent
        console.log(this); 
        let result = `Rectangle area: ${area}`;
        console.log(result);
    }
    printArea();
    
}

calculateArea(5,3)

//This with creating objects

function Person() {
    const self = this;
    self.name= ""; 
    self.setName = function(name){
        self.name = name;
    };
}

const person = new Person();
person.setName("John");
console.log(person.name);
