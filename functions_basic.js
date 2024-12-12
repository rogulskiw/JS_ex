"use strict";
//simple funtion without parameteres
function greet () {
    const languageCode = "fr";
    switch (languageCode){
        case "en":
            console.log("Hello !");
            break;
        case "es":
            console.log("Hola !");
            break;
        case "fr":
            console.log("Bonjour !");
            break;
        default:
            console.log("Unsupported language");
    }
}

greet();

//EASY BMI CALCULATOR

function calculateBMI(height, weight) {
    const heightInMeters = height / 100; // cm to meters
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi;
}

const height = 180; // in cm
const weight = 75; // in kg

const bmiResult = calculateBMI(height, weight);
console.log("Twoj wskaznik BMI wynosi: " + bmiResult.toFixed(2));

//CALCULATING VAT TAX

function calculateTax(value, taxRate = 0.23){ //default value which can be overwitten
    const tax = value * taxRate;
    return tax;
}
 
 console.log(calculateTax(100)) // basic counting
 console.log(calculateTax(100, 0.15)) //overwriting default value of taxRate

 //AVERAGE OF MARKS ARRAY

 const marks = [4, 3.5, 5, 4.5, 3, 4];
 const countAvg = function(x){
     let sum = 0; 
     for(let el of marks){
         sum += el;
     }
     
     const avg = sum / marks.length;
     return avg;
 }
 
 const result = countAvg(marks);
 console.log(`An average of marks is: ${result}`);

 //AVERAGE TEMPERATURE

 function calculateAverageTemperature(temperatureData, callback){
    let sum = 0;
    for(let el of temperatureData){
        sum += el;
    }
    const average = sum / temperatureData.length;
    callback(average);
}

const temperatures = [23, 24, 22, 25, 21];

function displayAverageTemperature(avg){
    console.log(`An average temperature: ${avg}`);
}
 
calculateAverageTemperature(temperatures, displayAverageTemperature);

//FUNCTION WITH FOREACH

const numbers = [1,2,3,4,5];

const calculateSum = (arr) => {
    let sum = 0; 
    arr.forEach((el) => sum+=el);
    return sum;
    }
    
    const result1 = calculateSum(numbers);
    console.log(result);

//BANK FEE

function calculateBankFee(amount, type, commission = 0.05){
    let sum = 0;
    if(transactionType ==="transfer"){
        sum += 1.5;
    } else if (transactionType ==="deposit") {
        sum +=0.5;
    }
    sum += amount * commission;
    console.log(`Bank fee: ${sum}`)
    return sum;
}

const transactionAmount = 1000; 
const type = "transfer"; 
const bankFee = calculateBankFee(transactionAmount, type)

//ARROW FUNCTION WITH FILTER

const products = [
    { name: "Shirt", price: 49.99 },
    { name: "Trousers", price: 79.99 },
    { name: "Shoes", price: 129.99 },
    { name: "Jacket", price: 149.99 },
  ];
  
  const filterProducts = (foo) => {
      const filtering = products.filter(foo);
      return filtering;
  }
  
  const filteredProducts = filterProducts((products) => products.price < 100);
  console.log(filteredProducts[0].name + ": " + filteredProducts[0].price);
  console.log(filteredProducts[1].name + ": " + filteredProducts[1].price);
  

//ARROW FUNCTION WITH THIS INSIDE FUNCTION 

function calculateArea(width, height){
    let area = width * height;
    const printArea = () => {
        console.log(this);
        let result = `Pole prostokata: ${area}`;
        console.log(result)
    }
     printArea();
}

calculateArea(5,3);

//OBJECT CONSTRUCTOR

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