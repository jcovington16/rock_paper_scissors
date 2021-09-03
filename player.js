class Player {

    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
}

class Human extends Player {
    constructor(name) {
        super(name)
        this.wins = 0;
    }

    getGesture(input){
        return this.gesture[input]; 
    }
}

class AI extends Player {
    constructor(name) {
        super(name)
        this.wins = 0;
    }

    getGesture() {
        const randomGesture = Math.floor(Math.random() * this.gesture.length);
        return this.gesture[randomGesture];
    }
}

module.exports = {
    player : Player,
    human : Human,
    ai : AI
}