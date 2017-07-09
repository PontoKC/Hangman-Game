// JavaScript for Hangman Game Assignment

// Program will have an array of 5 words which will be chosen in order


// var wordList = {
// 	firstWord: ["p", "r", "o", "c", "e", "s", "s", "o", "r"],
// 	secondWord: ["v", "e", "c", "t", "o", "r"],
// 	thirdWord: ["w", "i", "r", "e", "f", "r", "a", "m", "e"],
// 	fourthWord: ["k", "e", "r", "n", "i", "n", "g"],
// 	fifthWord: ["s", "y", "n", "t", "a", "x"]
// };



var wordList = ["cat", "dog", "mouse"];

 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var incorrectLetter = 0;

var currentWord = wordList[Math.floor(Math.random() * wordList.length)];

console.log(currentWord.length);
console.log(currentWord);

if (currentWord.length == 3) {
	$("#puzzle").html("__ __ __");
}



// document.onkeyup = function(event) {

// var userGuess = event.key;

// var str = currentWord;


// var n = str.includes("world");


// $("#drink-options").append(newDrinkDiv);