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

//


