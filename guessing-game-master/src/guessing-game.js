class GuessingGame {
    constructor() {
        this.min=0
        this.max=0
        this._guessedValue=0
    }

    setRange(min, max) {
        this._min=min
        this._max=max

    }

    guess() {
        var resultValue=this._max-this._min
        this._guessedValue=this._min+Math.round(resultValue/2)
        return this._guessedValue

    }

    lower() {
        this._max=this._guessedValue

    }

    greater() {
        this._min=this._guessedValue

    }
}

module.exports = GuessingGame;
