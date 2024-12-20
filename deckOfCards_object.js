
const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A', //it is easier to split such string, and showing different option than array
                                            //it would be hard to split it of string would look like '2345678910...'
    initizeDeck(){
        const {suits, values, deck} = this;
        for(let value of values.split(',')) {
            for(let suit of suits){
                deck.push({value, suit})
            }
        }
        return deck;
    },

    drawCard(){
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards){
        const cards = [];
        for(let i = 0; i < numCards; i++){
            cards.push(this.drawCard());
        }
        return cards; 
    },

   shuffle() {
    const {deck} = this;
        //loop over array bakcwards
        for (let i = deck.length - 1; i > 0; i--){
            //pick random index before current element
            let j = Math.floor(Math.random() * (i+1));
            //swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    } 

}

myDeck.initizeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2); 
const h3 = myDeck.drawMultiple(5);