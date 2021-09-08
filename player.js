const user_prompt = require('prompt-sync')();

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

    getGesture(){
        let answers = ['1','2','3','4','5']
    
        console.log("Chose your gesture:\n 1: Rock\n 2: Paper\n 3: Scissors\n 4: Lizard\n 5: Spock\n");
        let user_option = user_prompt();
        if(answers.includes(user_option)){
            return this.gesture[user_option - 1];
        }else{
            console.log('Invalid input. Try Again!')
            this.getGesture();
        } 
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