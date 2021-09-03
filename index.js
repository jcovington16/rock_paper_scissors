"user strict";

let {player, human, ai} = require('./player');
let user_prompt = require('prompt-sync')();



console.log("Chose your gesture:\n 1: Rock\n 2: Paper\n 3: Scissors\n 4: Lizard\n 5: Spock\n")

let user_gesture = user_prompt();

console.log(user_gesture)
