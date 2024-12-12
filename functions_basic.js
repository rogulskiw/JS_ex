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

 

