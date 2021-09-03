class Players {

    constructor(name, wins) {
        this.name = name;
        this.wins = wins;
        this.gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
}

class Human extends Players {
    constructor(name, wins) {
        super(name, wins)
    }

    getGesture(){
        
    }
}

class AI extends Players {
    constructor(name, wins) {
        super(name, wins)
    }

    getGesture() {
        const randomGesture = Math.floor(Math.random() * this.gesture.length);
        return this.gesture[randomGesture];
    }
}

exports.module = {
    player : Player
}