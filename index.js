"user strict";

let {human, ai} = require('./player');
let {game} = require('./game');
let user_prompt = require('prompt-sync')();

// start of the game
function runGame() {
    let newGame = new game();
    newGame.startGame();

    console.log("1: Single Player\n2: Multiplayer\n3: Exit\n")
    let player_option = user_prompt();
    let game_option = gameOption(player_option)

    return game_option
}

// allows the user to chose which game option they want
function gameOption(option) {
    switch(option) {
        case '1':
            singlePlayerGame();
            break;

        case '2':
            multiPlayerGame();
            break;

        case '3':
            console.log('Exiting...')
            break;
    }
}

// Single Player Mode
function singlePlayerGame(player){

    console.log("What is your name?\n")
    let player_name = user_prompt() + '\n\n';
    let player1 = new human(player_name);

    let computer = new ai('Computer');
    
    console.log("Chose your gesture:\n 1: Rock\n 2: Paper\n 3: Scissors\n 4: Lizard\n 5: Spock\n")

    let user_option = user_prompt();
    let user_gesture = player1.getGesture(user_option)

    let computer_gesture = computer.getGesture();

    //let resutls = checkGestures(user_gesture, computer_gesture)
    
    console.log(user_gesture);
    console.log(computer_gesture)
}

// Multi Player Mode
function multiPlayerGame(){
    console.log("Multiplayer Mode Selected....\nPlayer 1 enter your name\n")

    let player1_name = user_prompt();

    console.log("Player 2 please enter your name...");

    let player2_name = user_prompt();

    let player1 = new human(player1_name);
    let player2 = new human(player2_name);

    console.log(player1);
    console.log(player2);


}

// Checks the gesture and returns the results on who won.
function checkGestures(gesture1, gesture2) {

}




runGame();

