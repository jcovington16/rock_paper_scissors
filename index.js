"user strict";

let {human, ai} = require('./player');
let {game} = require('./game');
let user_prompt = require('prompt-sync')();

// start of the game
function runGame() {
    let newGame = new game();
    newGame.startGame();

    console.log("What is your name?\n ")
    let player_name = user_prompt() + '\n';
    let player1 = new human(player_name);

    console.log("1: Single Player\n2: Multiplayer\n3: Exit")
    let player_option = user_prompt();
    let game_option = gameOption(player_option, player1)

    return game_option
}

// allows the user to chose which game option they want
function gameOption(option, player) {
    switch(option) {
        case '1':
            singlePlayerGame(player);
            break;

        case '2':
            multiPlayerGame(player);
            break;

        case '3':
            console.log('Exiting...')
            break;
    }
}

// Single Player Mode
function singlePlayerGame(player){
    let computer = new ai('Computer');
    
    console.log("Chose your gesture:\n 1: Rock\n 2: Paper\n 3: Scissors\n 4: Lizard\n 5: Spock\n")

    let user_gesture = user_prompt();
    let user_results = player.getGesture(user_gesture)

    let computer_gesture = computer.getGesture();
    
    console.log(user_results);
    console.log(computer_gesture);
}

// Multi Player Mode
function multiPlayerGame(){

}

// Checks the gesture and returns the results on who won.
function checkGestures(gesture1, guesture2) {

}




runGame();

