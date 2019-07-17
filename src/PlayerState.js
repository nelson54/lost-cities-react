import Colors from "./cards/Colors";

class PlayerState {

    constructor(name) {
        this.name = name;
        this.hand = [];

        this.inPlay = Colors
            .reduce((inPlay, color) => inPlay[color] = [], {})
    }

    play(card) {
        this.removeFromHand(card);
        this.inPlay[card.suite].unshift(card)
    }

    peekPlay(color) {
        return this.inPlay[0]
    }

    removeFromHand(card) {
        this.hand = this.hand
            .filter((cardInHand) => cardInHand.suite !== card.suite && cardInHand.value !== card.value);
    }

    currentScore() {
        return Colors
            .map(this.colorScore)
            .reduce((totalScore, colorScore) => totalScore + colorScore, 0)
    }

    colorScore(color) {
        let cards = this.inPlay[color];
        let score = 0;
        let multipliers = 1;

        if(cards.length > 0) {
            score = -20;

            cards.forEach((card) => {
                if(card.value === 0) {
                    multipliers++;
                }

                score += card.value;
            })

        }

        return score * multipliers;
    }
}

export default PlayerState;
