function generateRandomNumbers() {
    const randomNumbers =[];
    while(randomNumbers.length < 6){
        const number = Math.floor(Math.random()*49) + 1; 
        if(randomNumbers.includes(number)){
            continue;
        } else {
            randomNumbers.push(number);
        }
    }
    return randomNumbers;
}

function checkResults(userNumbers, randomNumbers){
    let matches = 0; 
    for( let number of userNumbers) {
        if(randomNumbers.includes(number)){
            matches++; 
        }
    }
    return matches;
}

const randomNumbers = generateRandomNumbers();

const userNumbers = [24, 12, 8, 46, 33, 37]

const numberOfMatches = checkResults(userNumbers, randomNumbers);
console.log("Wylosowane liczby: " + randomNumbers.join(", "));
console.log("Twoje liczby: " + userNumbers.join(", "));
console.log("Liczba trafien: " + numberOfMatches);