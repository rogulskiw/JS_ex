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

//APPLY

function findMax(numbers) {
    return Math.max.apply(null, numbers);
}

function findMin(numbers) {
    return Math.min.apply(null, numbers);
}

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

const numbers = [12, 6, 8, 17, 3, 10];

const max = findMax.apply(null, [numbers]);
console.log("The highest number is:", max);

const min = findMin.apply(null, [numbers]);
console.log("The lowest number is", min);

const average = calculateAverage.apply(null, [numbers]);
console.log("Average:", Number(average.toFixed(2)));

