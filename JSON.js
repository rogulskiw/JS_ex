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

