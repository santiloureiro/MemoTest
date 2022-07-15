let score = 0;

const cards = ["🚓", "🍕", "💣", "🚕", "🍌", "🚓", "🍕", "💣", "🚕", "🍌" ];

let cardsSelected = [];

cardsSelected.push(cards[2]);
cardsSelected.push(cards[1]);

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

const player1 = new Player(prompt("Enter Player One's Name"), 0);

const player2 = new Player(prompt("Enter Player Two's Name"), 0);