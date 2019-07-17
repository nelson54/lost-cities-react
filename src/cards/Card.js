class Card {

    constructor(suite, value) {
        this.value = value;
        this.suite = suite;
    }

    isMultiplier() {
        return this.value === 0;
    }

    toString() {
        return `${this.suite} - ${this.value}`
    }
}

export default Card;
