function fetchData(callback) {
    setTimeout(function() {
        const data = "Witaj, swiecie";
        callback(data);
    }, 2000);
}
fetchData((response) => {
    console.log(response);
});

//MORE CALLBACKS

function getUsersFromDatabase(callback){
    setTimeout(function() {
       const users = [
           { id: 1, name: "Jan Kowalski" },
           { id: 2, name: "Anna Nowak" },
           { id: 3, name: "Piotr Wisniewski" },
           ];
           callback(users);
    }, 2000);
}


function getEmail(userId, callback){
    setTimeout(function(){
        const email = userId + "@example.com";
        callback(email);
    }, 1500);
}

function mainFunction(){
    getUsersFromDatabase((users)=>{
       console.log("Uzytkownicy:", users);
       users.forEach(function(user){
           getEmail(user.id, function(email){
               console.log(`Uzytkownik ${user.name} ma adres e-mail: ${email}`);
           });
       });
   });
}

mainFunction();