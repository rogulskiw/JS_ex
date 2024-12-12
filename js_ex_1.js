function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuwxyz'){
        if(!lowerCased.includes(char)){
            return false;
        }
    }
    return true
}

//Picking a card

function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard(){
    const values = ['2', '3', '4', '5', '6', '7','8', '9', '10', 'J',' Q', 'K', 'A'];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    return {value:pick(values), suit: pick(suits)}
}