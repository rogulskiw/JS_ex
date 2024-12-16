function calculateAverage(...numbers){
    let sum = 0; 
    for (let el of numbers) {
        sum += el;
    }
    const avg = (sum / numbers.length).toFixed(2)
    return avg; 
}
     let result = calculateAverage(4, 8, 6, 2, 10);
    console.log("Srednia liczb:", result);

    