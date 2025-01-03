const fetchData = new Promise((resolve) => {
    setTimeout(function() {
        const data = [1,2,3,4,5];
        resolve(data);
    }, 2000);
});

fetchData.then((data)=>{
   console.log("Dane z serwera:", data);
});

fetchData.catch((error)=> {
   console.log("Blad podczas pobierania danych:", error);
});

