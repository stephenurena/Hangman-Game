
//This array hold the words for the game
var selectionArr = ["patron", "tequilla", "micheladas"];
//Selects a random word each time the game is loaded/reset
var currentWord = selectionArr[Math.floor(Math.random() * selectionArr.length)];
console.log(currentWord);


//some globals for function load game
var answerArr = [ ];

function loadGame() {

		for (var i = 0; i < currentWord.length; i++) { 
			answerArr[i] = "_";
		}
		document.getElementById("wins").innerHTML = wins + "Wins";
		document.getElementById("remGuess").innerHTML = guessLimit + " Guesses remaining";
		document.getElementById("inChar").innerHTML = "<h2>Letters guessed so far</h2>" + "<br>" + "<p>" + charGuessed.join(" ") + "</p>";
		document.getElementById("answerWord").innerHTML = answerArr.join(" ");
}

var charGuessed = [ ];
var wins = 0;
var guessLimit = 10;


document.onkeyup = function(event) {
	//determine which key was pressed
	var userGuess = event.key.toLowerCase();
	// console.log(userGuess);

	if (userGuess.match(/^[a-z]$/i)) {

		var remainingLetters = currentWord.length;

		for (var i = 0; i < currentWord.length; i++){
			if (currentWord[i] === userGuess) {
				answerArr[i] = userGuess;
				// wins++; // try to only increment win if user mataches currentWord array
				console.log(answerArr[i]);
				document.getElementById("answerWord").innerHTML = answerArr.join(" ");
			} else if ((currentWord.length -1) > i ) {
				console.log("works");
			} else {
				guessLimit--;
				document.getElementById("remGuess").innerHTML = guessLimit + " Guesses remaining";
			}
			
			document.getElementById("wins").innerHTML = wins + "Wins";
		} 
	charGuessed.push(userGuess);
	// document.getElementById("remGuess").innerHTML = guessLimit + " Guesses remaining";
	document.getElementById("inChar").innerHTML = "<h2>Letters guessed so far</h2>" + "<br>" + "<p>" + charGuessed.join(" ") + "</p>";
	
	}
	else {
		alert("Bummer, please enter a character A-Z.");
	}
}


	

	
	// 	for (var i = 0; i < currentWord.length; i++) {
	// 		if (currentWord[i] === charGuessed){
	// 			answerArr[i] = charGuessed;
	// 		}
	// 	}
		
	// 	wins++;
	// 	document.getElementById("answerWord") = answerArr.join(" ");
	
	