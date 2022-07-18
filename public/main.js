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

const hayAutito = cards.find(el => el === "🚕");

const cardsString = cards.join()

console.log(hayAutito)

console.log(cardsString)