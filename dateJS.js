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

