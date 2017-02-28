var userGuess
var possible = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = possible.charAt(Math.floor(Math.random() * possible.length))
var wins = 0
var loss = 0
var guessLeft = 5

document.onkeydown =function(event) {
	console.log(event.key);
}


console.log(computerGuess)