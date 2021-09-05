class Game {
    
    constructor(match, winner) {
        this.match = match;
        this.winner = winner;
    }

    startGame() {
        this.match = 0;
        this.winner = null;
    }
}

module.exports = {
    game : Game
}