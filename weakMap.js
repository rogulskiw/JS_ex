const employee1 = { id: 1, firstName: "John", lastName: "Doe" };
const employee2 = { id: 2, firstName: "Jane", lastName: "Smith" };

const employeeMap = new WeakMap(); 
employeeMap.set(employee1, { position: "Manager", salary: 5000 });
employeeMap.set(employee2, { position: "Developer", salary: 4000 });

console.log("Sprawdzanie danych pracownika:")
if(employeeMap.has(employee1)){
    console.log("Dane pracownika 1 sa dostepne.")
}
console.log("Informacje o pracowniku:")
const employee1Data = employeeMap.get(employee1);
console.log("ID:", employee1.id);
console.log("Imie:", employee1.firstName);
console.log("Nazwisko:", employee1.lastName);
console.log("Stanowisko:", employee1Data.position);
console.log("Wynagrodzenie:", employee1Data.salary);

employeeMap.delete(employee2)


console.log("Sprawdzanie danych dla usunietego pracownika:");
if (employeeMap.has(employee2)) {
    console.log("Dane pracownika 2 sa dostepne.");
} else {
    console.log("Brak danych dla pracownika 2.");
}


