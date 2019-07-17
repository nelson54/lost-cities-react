import Card from "./Card";
import Colors from "./Colors";
function createDeck() {
    let deck = [];


    let types = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    Colors.forEach((color) => {
        types.forEach((type) => {
            deck.push(new Card(color, type));
        });
    });

    return deck;
}

export default createDeck;
