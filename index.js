"user strict";

let {human, ai} = require('./player');
let {game} = require('./game');
let user_prompt = require('prompt-sync')();

function runGame() {
    let newGame = new game();
    newGame.startGame();

    console.log("What is your name?\n ")
    let player_name = user_prompt();
    let player1 = new human(player_name);

    console.log("1: Single Player\n 2: Multiplayer\n 3: Exit")
    let player_option = user_prompt();
    let game_option = gameOption(player_option)

    return game_option
}

function gameOption(option) {
    switch(option) {
        case '1':

    }
}

function singlePlayerGame(){

}

function multiPlayerGame(){
    
}

console.log("Chose your gesture:\n 1: Rock\n 2: Paper\n 3: Scissors\n 4: Lizard\n 5: Spock\n")

let user_gesture = user_prompt();
let user_results = player1.getGesture(user_gesture)

console.log(user_results);

runGame();

