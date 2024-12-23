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

//COUNTING TO THE NEW YEAR
function newYearCounting() {
    let count = 10;
    function displayCounter() {
        count--;

        if (count === 0) {
            console.log("HAPPY NEW YEAR!");
            clearInterval(intervalId);
            return;
        }

        console.log(count);
    }

    const intervalId = setInterval(displayCounter, 1000);
}

newYearCounting();

//ROUTE OF THE CAR

const route = [
    { x: 0, y: 0 },
    { x: 100, y: 50 },
    { x: 200, y: 100 },
    { x: 300, y: 150 },
    { x: 400, y: 200 },
];

const car = {
    position: 0,
    velocity: 10,
};

function moveCar(){
    if (car.position >= route.length) {
        console.log('The trip is over!');
        clearInterval(intervalId);
        return;
        }

 const pitStop = route[car.position];
 console.log(`The car is in position x: ${pitStop.x}, y: ${pitStop.y}`);
 
car.position++;
}
const intervalId = setInterval(moveCar, 1000);

