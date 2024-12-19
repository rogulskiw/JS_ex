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

