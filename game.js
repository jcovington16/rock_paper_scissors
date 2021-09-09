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
            default:
                console.log(`${option} is not a valid option. Please enter a valid option`)
                this.startGame();
        }
    }

    // Single Player Mode
    singlePlayerGame(){

        console.log("What is your name?\n")
        let player_name = user_prompt();
        this.player1.name = player_name;

        this.player2 = new ai();

        let matchup = this.singleMatchUp(this.player1, this.player2);
        this.checkScores(matchup);
    }

    singleMatchUp(player, computer){
        
        while(player.wins < 3 && computer.wins < 3) {

            let user_gesture = player.getGesture(player);
        
            let computer_gesture = computer.getGesture();
            console.log(`${player.name}: ${user_gesture}\n${computer.name}: ${computer_gesture}\n`);
        
            let results = this.checkGestures(user_gesture, computer_gesture);
            this.checkResults(results);
            
        }

        return [player.wins, computer.wins];
    }

    // Multi Player Mode
    multiPlayerGame(){
        console.log("Multiplayer Mode Selected....\nPlayer 1 enter your name\n")
        let player1_name = user_prompt();
        this.player1.name = player1_name
        
        this.player2 = new human();
        console.log("Player 2 please enter your name...");
        
        let player2_name = user_prompt();
        this.player2.name = player2_name;

        let matchup = this.multiplayerMatchUp(this.player1, this.player2);
        this.checkScores(matchup);
    }

    multiplayerMatchUp(player1, player2){
        while(player1.wins < 3 && player2.wins < 3){
            let player1_gesture = player1.getGesture();

            let player2_gesture = player2.getGesture();

            console.log(`${player1.name}: ${player1_gesture}\n${player2.name}: ${player2_gesture}\n`);

            let results = this.checkGestures(player1_gesture, player2_gesture);
            this.checkResults(results);
        }

        return [player1.wins, player2.wins];
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
            return `Draw!\n`
        }
        return false;
    }

    checkResults(results) {
        if(results === true) {
            console.log(`${this.player1.name} wins this round!\n`)
            this.player1.wins += 1
        }
        else if(results === 'Draw!') {
            console.log('Draw!\n');

        }
        else {
            console.log(`${this.player2.name} wins this round!\n`)
            this.player2.wins += 1
        }
    }

    checkScores(scores) {
        if (scores[0] > scores[1]){
            console.log(`${this.player1.name} wins!\n`)
        }else{
            console.log(`${this.player2.name} wins!\n`)
        }

        this.startGame();
    }
}

module.exports = {
    game : Game
}

