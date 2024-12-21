//JSON.stringify()

function convertToJSON(a){
    const jason = JSON.stringify(a);
    console.log(jason);
 }

const person = {
    name: "John", 
    age: 30,
    city: "New York",
}


convertToJSON(person);


//JSON.parse()

const jsonUser = '{"name": "John Doe", "age": 30, "email": "john@example.com"}';
function parseUser(user1) {
    const user = JSON.parse(user1);
    return user;
}

const user = parseUser(jsonUser);

console.log("Name:", user.name);
console.log("Age:", user.age)
console.log("Email:", user.email)