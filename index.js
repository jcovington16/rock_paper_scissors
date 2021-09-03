"user strict";

let {human, ai} = require('./player');
let {game} = require('./game');
let user_prompt = require('prompt-sync')();

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

function singlePlayerGame(player){
    let computer = new ai('Computer');
    
    console.log("Chose your gesture:\n 1: Rock\n 2: Paper\n 3: Scissors\n 4: Lizard\n 5: Spock\n")

    let user_gesture = user_prompt();
    let user_results = player.getGesture(user_gesture)
    
    console.log(user_results);
}

function multiPlayerGame(){

}




runGame();

