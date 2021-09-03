class Player {

    constructor(name, wins) {
        this.name = name;
        this.wins = wins;
        this.gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
}

class Human extends Player {
    constructor(name, wins) {
        super(name, wins)
    }

    getGesture(input){
        return this.gesture[input]; 
    }
}

class AI extends Player {
    constructor(name, wins) {
        super(name, wins)
    }

    getGesture() {
        const randomGesture = Math.floor(Math.random() * this.gesture.length);
        return this.gesture[randomGesture];
    }
}

exports.module = {
    player : Player,
    human : Human,
    ai : AI
}