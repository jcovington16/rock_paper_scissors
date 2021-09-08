"user strict";

let {player, human, ai} = require('./player');
let user_prompt = require('prompt-sync')();



console.log("Chose your gesture:\n 1: Rock\n 2: Paper\n 3: Scissors\n 4: Lizard\n 5: Spock\n")

let user_gesture = user_prompt();

console.log(user_gesture)
    return game_option
}
//console.log("Chose your gesture:\n 1: Rock\n 2: Paper\n 3: Scissors\n 4: Lizard\n 5: Spock\n")

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
    
    while(player1.wins < 3 || computer.wins < 3){
        console.log("Chose your gesture:\n 1: Rock\n 2: Paper\n 3: Scissors\n 4: Lizard\n 5: Spock\n")

        let user_option = user_prompt();
        let user_gesture = player1.getGesture(user_option)
    
        let computer_gesture = computer.getGesture();
        let results = checkGestures(user_gesture, computer_gesture)
        if(results = true){
        player1.wins += 1
        }
        else{
        computer.wins += 1
        }
    }

    //let resutls = checkGestures(user_gesture, computer_gesture)
    
   
    // console.log(user_gesture);
    // console.log(computer_gesture)
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
    if (gesture1 === 'Rock' && gesture2 === 'Scissor') {
        return true
    }
    if (gesture1 === 'Rock' && gesture2 === 'Lizard') {
        return true
    }
    if (gesture1 === 'Scissor' && gesture2 === 'Paper') {
        return true
    }
    if (gesture1 === 'Scissor' && gesture2 === 'Lizard') {
        return true
    }
    if (gesture1 === 'Paper' && gesture2 === 'Rock') {
        return true
    }
    if (gesture1 === 'Paper' && gesture2 === 'Spock') {
        return true
    }
    if (gesture1 === 'Lizard' && gesture2 === 'Paper') {
        return true
    }
    if (gesture1 === 'Lizard' && gesture2 === 'Spock') {
        return true
    }
    if (gesture1 === 'Spock' && gesture2 === 'Rock') {
        return true
    }
    return false;
}





runGame();





