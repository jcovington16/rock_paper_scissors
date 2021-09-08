const { human, ai } = require("./player");
let user_prompt = require('prompt-sync')();

class Game {
    
    constructor() {
        this.player1 = new human();
        this.player2 = null;
    }

    gameRules() {
        console.log(`Rules of the game:\n
        Rock crushes Scissors
        Scissors cuts Paper
        Paper covers Rock
        Rock crushes Lizard
        Lizard poisons Spock
        Spock smashes Scissor
        Scissors decapitates Lizard
        Lizard eats Paper
        Paper disproves Spoc
        Spock vaporizes Rock\n`)
    }

    startGame() {
        this.gameRules();
        console.log("1: Single Player\n2: Multiplayer\n3: Exit\n")
        let player_option = user_prompt();
        let game_option = this.gameOption(player_option)
    
        return game_option
    }

    gameOption(option) {
        switch(option) {
            case '1':
                this.singlePlayerGame();
                break;
    
            case '2':
                this.multiPlayerGame();
                break;
    
            case '3':
                console.log('Exiting...')
                break;
        }
    }

    // Single Player Mode
    singlePlayerGame(){

        console.log("What is your name?\n")
        let player_name = user_prompt();
        this.player1.name = player_name;

        this.player2 = new ai();

        this.singleMatchUp(this.player1, this.player2);
    }

    singleMatchUp(player, computer){
        console.log("Chose your gesture:\n 1: Rock\n 2: Paper\n 3: Scissors\n 4: Lizard\n 5: Spock\n");
        let i = 0;
        while(i < 3) {
            let user_option = user_prompt();
            let user_gesture = player.getGesture(user_option);
        
            let computer_gesture = computer.getGesture();
            console.log(user_gesture, computer_gesture);
        
            let results = this.checkGestures(user_gesture, computer_gesture);
            this.checkScores(results);
            i++
        }

        console.log(player.wins, computer.wins);
    }

    // Multi Player Mode
    multiPlayerGame(){
        console.log("Multiplayer Mode Selected....\nPlayer 1 enter your name\n")

        let player1_name = user_prompt();
        this.player1.name = player1_name
        

        console.log("Player 2 please enter your name...");

        this.player2 = new human;
        let player2_name = user_prompt();
        this.player2.name = player2_name;

        console.log(this.player1);
        console.log(this.player2);

    }

    multiplayerMatchUp(){

    }

    // Checks the gesture and returns the results on who won.
    checkGestures(gesture1, gesture2) {
        if (gesture1 === 'Rock' && gesture2 === 'Scissors') {
            return true
        }
        else if (gesture1 === 'Rock' && gesture2 === 'Lizard') {
            return true
        }
        else if (gesture1 === 'Scissors' && gesture2 === 'Paper') {
            return true
        }
        else if (gesture1 === 'Scissors' && gesture2 === 'Lizard') {
            return true
        }
        else if (gesture1 === 'Paper' && gesture2 === 'Rock') {
            return true
        }
        else if (gesture1 === 'Paper' && gesture2 === 'Spock') {
            return true
        }
        else if (gesture1 === 'Lizard' && gesture2 === 'Paper') {
            return true
        }
        else if (gesture1 === 'Lizard' && gesture2 === 'Spock') {
            return true
        }
        else if (gesture1 === 'Spock' && gesture2 === 'Rock') {
            return true
        }
        else if (gesture1 === gesture2){
            return `Draw!`
        }
        return false;
    }

    checkScores(results) {
        if(results === true) {
            this.player1.wins += 1
        }
        else if(results === 'Draw!') {
            console.log('No Score');
        }
        else {
            this.player2.wins += 1
        }
    }
}

module.exports = {
    game : Game
}

