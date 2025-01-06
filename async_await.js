function delay(ms){
    return new Promise(resolve => setTimeout(resolve, 10));
  }
   const tasks = [
   "Przygotuj sniadanie",
   "Umyj naczynia",
   "Posprzataj pokoj",
   "Obejrzyj ulubiony film",
   "Przeczytaj ksiazke",
];   
          
    async function processTasks(){
        for(let task of tasks){
            console.log(`Rozpoczynam zadanie: ${task}`);
            const x = await delay(2000);
            console.log(`Zadanie zakonczone: ${task}`);
        }
    }
  processTasks();

  