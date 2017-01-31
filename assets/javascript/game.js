//This array hold the words for the game
var selectionArr = ["patron", "tequilla", "micheladas"];
//Selects a random word each time the game is loaded/reset
var currentWord = selectionArr[Math.floor(Math.random() * selectionArr.length)];
console.log(currentWord);

	// var userGuess = event.key.toLowerCase();
	//created some globals for function gameStart()
	var s;
	var answerArr = [ ];
	var charGuessed = [ ];

	var game = {

		wins: 0,
		guessLimit: 10,

		//Arrange the answer array with "_"
		loadGame: function() {

			for (var i = 0; i < currentWord.length; i++) {
				answerArr[i] = "_";
			}

			s = answerArr.join(" ");
			document.getElementById("answerWord").innerHTML = s;
		},
		startGame: function() {
			// if(userGuess === indexOf(currentWord))
		} 

	}
document.onkeyup = function(event) {
	//determine which key was pressed
	var userGuess = event.key.toLowerCase();
	console.log(userGuess);
	
	
	if (userGuess.match(/^[a-z]$/i)) {
	//grabs keys pressed
	charGuessed.push(userGuess);
}
	var html = "<p> " + charGuessed.join(", ") + "</p>";
	document.querySelector("#gameEvent").innerHTML = html;	
}


// function Letter() {
// 	//get letter that user pressed on keyboard
// 	var userGuess = event.key;

// 	if (userGuess.length > 0)
// }