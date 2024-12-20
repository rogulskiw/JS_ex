//FUNCTION GIVING ALL DAYS IN A WEEK

function countDaysOfWeek(){
    let currentDate = new Date();
    let daysOfWeek = [];
    for(let i = 0; i<7; i++){
        let dateCopy = new Date(currentDate.getTime());
        dateCopy.setDate(currentDate.getDate() + i);
        let theDay= dateCopy.toLocaleDateString('pl-PL', { weekday: 'long' });
        daysOfWeek.push(theDay)
   }
   
   daysOfWeek.forEach((day) => {
   console.log(day);
   });
}

//DISPLAYING CURRENT DATE AND TIME

function displayCurrentDateTime(){
    let currentDate = new Date();
   let year = currentDate.getFullYear();
   let month = currentDate.getMonth();
   let day = currentDate.getDate();
   let hours = currentDate.getHours();
   let minutes = currentDate.getMinutes();
   let seconds = currentDate.getSeconds();
   let milliseconds = currentDate.getMilliseconds();
   
   console.log(`Current Date: ${day}/${month + 1}/${year}`);
   console.log(`Current Time: ${hours}:${minutes}:${seconds}.${milliseconds}`);
}
displayCurrentDateTime();

//CALCULATING FUTURE DATE AND TIME

function calculateFutureDate(){
    const currentDate = new Date();
    let year = currentDate.setFullYear(currentDate.getFullYear() + 3);
    let month = currentDate.setMonth(2)
    let day = currentDate.setDate(15)
    let hour = currentDate.setHours(18)
    let minutes = currentDate.setMinutes(30)
    let seconds = currentDate.setSeconds(45)
    let milliseconds = currentDate.setMilliseconds(500)
    console.log(`Future Date: ${currentDate.toLocaleString()}`);
}
calculateFutureDate();

//COUNTING REMAINING TIME

let sum = 0;
let wynik = 0;
function calculateElapsedTime() {
    const startTime = Date.now(); 
    for(let i = 0; i < 1000000; i++){
        sum+=i;
    }
 const endTime = Date.now();
 wynik = endTime - startTime;
 console.log(`Czas wykonania operacji: ${wynik} ms`)
}

calculateElapsedTime();