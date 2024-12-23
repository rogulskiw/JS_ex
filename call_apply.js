//FUNC CALL INTRO
function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
  
}

function subtract(a,b){
    return a - b;
}

const calculator = {
    x: 5, 
    y: 3,
    result: null,
}

calculator.result = sum.call(calculator,calculator.x,calculator.y);
console.log(`Sum result: ${calculator.result}`)
calculator.result = multiply.call(calculator,calculator.x,calculator.y);
console.log(`Multiplication result: ${calculator.result}`)
calculator.result = subtract.call(calculator,calculator.x,calculator.y);
console.log(`Subtraction result: ${calculator.result}`)

//