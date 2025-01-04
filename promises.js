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

//Promises chaining


function getMenu() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const menu = [
                { name: "Pizza Margherita", price: 20 },
                { name: "Spaghetti Bolognese", price: 15 },
                { name: "Caesar Salad", price: 10 },
            ];
            resolve(menu);
        }, 2000);
    });
}

function selectDish(menu, index) {
    return new Promise((resolve, reject) => {
        if (index >= 0 && index < menu.length) {
            resolve(menu[index]);
        } else {
            reject("Wrong dish's index");
        }
    });
}

function calculateTotal(selectedDishes) {
    return new Promise((resolve) => {
        const total = selectedDishes.reduce(
            (acc, dish) => acc + dish.price,
            0
        );
        resolve(total);
    });
}

function confirmOrder(total) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                "Zamowienie potwierdzone. Laczna kwota: " + total + " zl"
            );
        }, 1500);
    });
}

getMenu()
    .then((menu) => {
        console.log("Menu:", menu);
        return selectDish(menu, 0);
    })
    .then((selectedDish) => {
        console.log("Wybrane danie:", selectedDish);
        return calculateTotal([selectedDish]);
    })
    .then((total) => {
        console.log("Laczna cena zamowienia:", total, "zl");
        return confirmOrder(total);
    })
    .then((confirmation) => {
        console.log(confirmation);
    })
    .catch((error) => {
        console.log("Blad:", error);
    });

    //Finally

    function downloadFile(_url) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const fileContent = "To jest zawartosc pobranego pliku.";
                const success = true;
 
                if (success) {
                    resolve(fileContent);
                } else {
                    reject("Blad podczas pobierania pliku.");
                }
            }, 2000);
        }).finally(() => {
            console.log("Pobieranie zakonczone");
        });
    }
 
    downloadFile("http://example.com/file.txt")
        .then((content) => {
            console.log("Zawartosc pliku:", content);
        })
        .catch((error) => {
            console.log("Blad:", error);
        });