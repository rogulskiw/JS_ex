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


