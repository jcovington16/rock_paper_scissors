class Player {

    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.gesture = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        this.selectGesture = "";
    }
}

class Human extends Player {
    constructor(name) {
        super()
        this.name = name;
    }

    getGesture(input){
        return this.gesture[input - 1]; 
    }
}

class AI extends Player {
    constructor() {
        super()
        this.name = 'CP30';
    }

    getGesture() {
        let randomGesture = Math.floor(Math.random() * this.gesture.length);
        this.selectGesture = this.gesture[randomGesture];
        return this.selectGesture;
    }
}

module.exports = {
    player : Player,
    human : Human,
    ai : AI
}