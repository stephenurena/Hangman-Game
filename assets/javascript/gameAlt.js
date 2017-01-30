//This array hold the words for the game
var selectionArr = ["patron", "tequilla", "mezcal"];


document.onkeyup = function(event) {
var userGuess = event.key;

var currentWord = selectionArr[Math.floor(Math.random() * selectionArr.length)];
 console.log (currentWord);

}