let cards = ["🚓", "🍕", "💣", "🚕", "🍌", "🚓", "🍕", "💣", "🚕", "🍌" ];

function compareCards(card1, card2){
    if(cards[card1] === cards[card2]){
        alert("Son pareja");
    } else{
        alert("No son pareja");
    }
}