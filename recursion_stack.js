//Recursion in using function inside of given function
function countdown(number){
    if(number <=0){
        console.log("Counting is over!")
        return;
    } else {
            console.log(number)
             countdown(number -1)
            
        }
        
    }
   
countdown(5);

//SUM OF NUMBERS HIGHER THAN 5
const calculateSum = (arr) =>{
    if(arr.length ==0){
        return 0;
    }
    let firstElement = arr[0];
    let sum = 0;
    if(firstElement > 5){
        sum+=firstElement;
    }
    let remainingArray = [...arr];
    remainingArray.shift();
    const recursiveSum = calculateSum(remainingArray)
    sum += recursiveSum;
    return sum;
}

const numbers = [1,2,4,5,7,8,9]
const result = calculateSum(numbers)
console.log("The sum of numbers higher than 5:", result)

//Recursion with factorial
function calculateFactorial(number){
    if(number===1 || number===0){
        return 1;
    } 
        let factorial = 1; 
        factorial = calculateFactorial(number-1)
            factorial*=number;
            return factorial;
}
const number = 5; 
const result1 = calculateFactorial(number)
console.log("Factorial of number", number, "is:", result);


//ADDING, REMOVING FROM STACK
let names = [];
function pushName(name){
    names.push(name);
}
function popName(){
    let name = names.pop()
    return name;
}

function peekName(){
    let name = names[names.length -1]
    return name;
}

pushName("Ann")
pushName("John")
pushName("Beatrice")
const last = popName();
console.log("Deleted name:",last)
const peek = peekName();
console.log("The last name on the stack:", peek)