//Introduction
function* randomNumberGenerator(){
    while(true){
        yield Math.random();
    }
}

const generator = randomNumberGenerator();
for(let i=0; i<5;i++){
    console.log(generator.next().value.toFixed(2));
}

//PASSWORD GENERATOR

function* productCodeGenerator(length, prefix = ""){
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codeLength = length - prefix.length;
    
    while(true){
        let code = prefix; 
        for(let i = 0; i <= codeLength; i++){
            const randomIndex = Math.floor(Math.random()*characters.length);
            code += characters.charAt(randomIndex);
        }
        yield code;
    }
}

let generator1 = productCodeGenerator(8, "PRD");
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//LOTTERY NUMBER GENERATOR

function *lotteryNumberGenerator(){
    const count = 5;
    for(let i = 0 ; i<count; i++){
        yield Math.floor(Math.random()*100); 
    }
}

const generator2 = lotteryNumberGenerator(); 
for(let number of generator){
    console.log(number);
}