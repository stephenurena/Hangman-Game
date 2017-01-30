//This array hold the words for the game
var selectionArr = ["patron", "tequilla", "mezcal"];
//Selects a random word each time the game is loaded/reset
var currentWord = selectionArr[Math.floor(Math.random() * selectionArr.length)];
console.log(currentWord);

//created some globals for function gameStart()
var s;
var answerArr = [ ];

//Arrange the answer array with "_"
function gameStart() {

	for (var i = 0; i < currentWord.length; i++) {
		answerArr[i] = "_";
	}

	s = answerArr.join(" ");
	document.getElementById("answerWord").innerHTML = s;
}

function Letter() {
	//get letter that user pressed on keyboard
	var userGuess = event.key;

	if (userGuess.length > 0)
}
// document.getElementById("answerWord").innerHTML = answerArr.join(" ");

// document.onkeyup = function(event) {}
// var userGuess = event.key;

// var remainingLetters = currentWord.length;
