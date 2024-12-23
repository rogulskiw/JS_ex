//BOILING EGGS USING INTERVAL

const boilEggs = () =>{
    let cookingTime = 0;
    function checkEggs(){
        cookingTime ++;
        if(checkEggs ===5){
            console.log("Eggs are half way there")
        }
        if (checkEggs===8){
            console.log("Almost done!")
        } 
        if(checkEggs ===10){
           console.log("Eggs are ready")
    }
    setTimeout(checkEggs, 1000);
}
checkEggs()
}

setTimeout(boilEggs,3000)

