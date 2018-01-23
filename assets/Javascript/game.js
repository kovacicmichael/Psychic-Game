

//letter choices abailable for computer
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//sets all variable to zero
var win = 0;
var lose = 0;
var guesses = 9;
var guessesLeft = 9;
var pastGuesses = [];
var letterToGuess = null;


//Enables the computer to choose
var compGuess = options [Math.floor(Math.random() * options.length)];

//document.getElementById('span1').innerHTML= win;
//document.getElementById('span2').innerHTML= lose;
//document.getElementById('span3').innerHTML= guessesLeft;
//document.getElementById('span4').innerHTML= pastGuess;


//these variables will update the previously mentioned variables above
var updateGuessesLeft = function(){
	document.querySelector('#span3').innerHTML = guessesLeft;
};

var updatePastGuesses = function(){
	document.querySelector('#span4').innerHTML = pastGuesses;
}

var updateWins = function(){
	document.querySelector('#span1').innerHTML = win;
}
var updateLoses = function(){
	document.querySelector('#span2').innerHTML = lose;
}

//reset function after 9 guesses
var reset = function() {
  guesses = 9;
  guessesLeft = 9;
  pastGuesses = [];

  updateGuessesLeft();
  updatePastGuesses();
}


//key function to allow for user and conputer guesses
document.onkeyup = function() {
		guessesLeft--
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		console.log(userGuess);

		var compGuess = options [Math.floor(Math.random() * options.length)]

		console.log(compGuess);

		updateGuessesLeft();
		pastGuesses.push(userGuess);
		updatePastGuesses();
		updateWins();
		updateLoses();


	if(guessesLeft > 0){
		if (userGuess === compGuess){
				win++;
		}
	}else if(guessesLeft === 0){
			lose++;
			reset();
	}

};



//the computer chooses a random letter
//then it needs to compare the choices
//it the choices are equal you win
//if they are not equal add the letter to the guess list
//subtract from guesses left
//when they run out of guresses add to loses and reset