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

//ERRORS

function checkUsernameAvailability(username){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const takenUsernames = ["john", "emma", "alex"];
            if(!takenUsernames.includes(username)){
                resolve(true);
            } else {
                reject("Nazwa uzytkownika jest juz zajeta.");
            }
        }, 2000);
    });
}
checkUsernameAvailability("james")
.then((available) => {
   console.log("Czy nazwa uzytkownika jest dostepna? (james):", available);
})
.catch((error) => {
   console.error("Blad:", error);
});

checkUsernameAvailability("alexander")
.then((available) => {
   console.log("Czy nazwa uzytkownika jest dostepna? (alexander):", available);
})
.catch((error) => {
   console.error("Blad:", error);
});

checkUsernameAvailability("lucy")
.then((available) => {
   console.log("Czy nazwa uzytkownika jest dostepna? (lucy):", available);
})
.catch((error) => {
   console.error("Blad:", error);
});

//PROMISE ALL

const getUserData = () => {
    return new Promise ((resolve) => {
        setTimeout(function() {
            const userData = { name: "John", age: 30 };
            resolve(userData); 
        }, 2000);
    });
};
    
const getOrderData = () => {
   return new Promise ((resolve) => {
        setTimeout(function() {
            const orderData = { id: 123, total: 50 };
            resolve(orderData);
        }, 2000);
    });
};

function getProductData() {
    return new Promise ((resolve) => {
        setTimeout(function() {
            const productData = { name: "Phone", price: 500 };
            resolve(productData);
        },2000);
    });
}

Promise.all([getUserData(), getOrderData(), getProductData()])
.then((results) => {
    const userData = results[0];
    const orderData = results[1];
    const productData = results[2];
    
   console.log("Dane uzytkownika:", userData);
   console.log("Dane zamowienia:", orderData);
   console.log("Dane produktu:", productData);
})
.catch((error) => {
   console.log("Wystapil blad:", error);
});

