import Colors from "./cards/Colors";

class DiscardState {

    constructor() {
        this.discardStack = Colors
            .reduce((discard, color) => discard[color] = [], {})
    }

    takeTop(color) {
        return this.discardStack[color].shift();
    }



    discard(card) {
        this.discardStack[card.suite].unshift(card)
    }
}

export default DiscardState;
