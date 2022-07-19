let score = 0;

const cards = ["🚓", "🍕", "💣", "🚕", "🍌", "🚓", "🍕", "💣", "🚕", "🍌" ];

let cardsSelected = [];

cardsSelected.push(cards[2]);
cardsSelecte_d.push(cards[1]);

function compareCards(){
    if(cardsSelected[1] === cardsSelected[0]){
        console.log("Son pareja");
    } else{
        console.log("No son pareja");
    }
}

compareCards();

function shuffleCards () {
    var j, x, index;
    for (index = cards.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = cards[index];
        cards[index] = cards[j];
        cards[j] = x;
    }
    return cards;
}

shuffleCards()

class Player {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
}

function createPlayers(){
    const player1 = new Player(prompt("Enter Player One's Name"), 0);

    const player2 = new Player(prompt("Enter Player Two's Name"), 0);

    alert("Jugador 1: " + player1.name + "\nJugador 2: " + player2.name);
}

cards.forEach(el => {
    console.log(el)
});

const hayAutito = cards.find(el => el === "🚕");

const cardsString = cards.join()

console.log(hayAutito)

console.log(cardsString)