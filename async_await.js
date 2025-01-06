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

  //ADDITIONAL TASK

  function compressFile(file) {
    return new Promise((resolve) => {
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            resolve(`Skompresowano plik: ${file}`);
        }, randomDelay);
    });
}
 
 const filesToCompress = [
"obrazek.jpg",
"dokument.docx",
"muzyka.mp3",
"video.mp4",
];

async function compressFiles(){
    const compressedFiles = [];
    for(const file of filesToCompress){
        const result = await(2000);
    compressedFiles.push(result);
    console.log(result);
    }
    return compressedFiles;
};

compressFiles()
.then((compressedFiles)=>{
console.log("Proces kompresji zakonczony.");
console.log("Skompresowane pliki:");
console.log(compressedFiles);
})
.catch((error)=>{
console.error("Wystapil blad podczas kompresji plikow:", error);
})