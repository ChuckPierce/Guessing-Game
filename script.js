
//Variables

var num = getRandomNum(1,100);
var answers = 5;
var guessArr = [];
var high = "Guess higher!";
var low = "Guess lower!";

//jQuery Variables

var $answer = $('.answer p');
var $button = $('.button-group p');
var $mascot = $('.mascot div');
var $submit = $('#submit');
var $hint = $('#hint');
var $guess = $('#guess');
var $answers = $('.answers p');

//Getting Random Number function

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}


//Assessing the Guess function

function assessGuess(guess) {

	//If the guess is correct
	if(guess == num) {
		$answer.text("By jove you got it! Good form ol'chap!");
		$mascot.removeClass().addClass('youwin');
		$submit.prop('disabled',true);
		$guess.prop('disabled',true);
		$answers.remove();
		$guess.val('');
		return;

	//If guess is very far from number and lower	
	} else if (guess >= num + 35) {
		$answer.text("You're freezing your arse off ol'chap. " + low);
		$mascot.removeClass().addClass('youaresupercold');
		status = "Freezing! Guess lower!";

	//If guess is very far from number and higher
	} else if (guess <= num - 35) {
		$answer.text("You're freezing your arse off ol'chap. " + high);
		$mascot.removeClass().addClass('youaresupercold');
		status = "Freezing! Guess higher!";

	//If guess is far from number and lower
	} else if(guess < num + 35 && guess >= num + 25) {
		$answer.text("You're cold ol'boy. " + low);
		$mascot.removeClass().addClass('youarecold');
		status = "Cold! Guess lower!";

	//If guess is far from number and higher
	} else if(guess > num - 35 && guess <= num - 25) {
		$answer.text("You're cold ol'boy. " + high);
		$mascot.removeClass().addClass('youarecold');
		status = "Cold! Guess higher!";

	//If guess is closer to number and lower
	} else if(guess < num + 25 && guess >= num + 5) {
		$answer.text("You're getting warmer bud. " + low);
		$mascot.removeClass().addClass('youonfire');
		status = "Warmer! Guess lower!";

	//If guess is closer to number and higher
	} else if(guess > num - 25 && guess <= num - 5) {
		$answer.text("You're getting warmer bud. " + high);
		$mascot.removeClass().addClass('youonfire');
		status = "Warmer! Guess higher!";

	//If guess is very close to number and lower
	} else if(guess < num + 5 && guess >= num + 1) {
		$answer.text("You're getting burned!! Guess a little lower!");
		$mascot.removeClass().addClass('yousuperonfire');
		status = "Burning! Guess lower!";

	//If guess is very close to number and higher
	} else if(guess > num - 5 && guess <= num - 1) {
		$answer.text("You're getting burned!!  Guess a little higher!");
		$mascot.removeClass().addClass('yousuperonfire');
		status = "Burning! Guess higher!";
	}
	//Show what the user guessed
	$('.status').append("<p>You guessed " + guess + ". " + status + "</p>");
}

//Restarting the Game function on open of browser

restartGame();

//Check for enter keypress

$guess.keypress(function(enter) {
	if (enter.which === 13) {
		$submit.click();
	}

});


//Submit Click Function
$submit.click(function() {
	
	//Variables in Submit Click Function
	var guess = $guess.val();
	var status = "";

	//Checks if guess is between 1-100 and that its a number
	if(guess > 100 || guess <= 0 || typeof guess == "NaN") {
		$guess.val('');
		return alert("You need to guess a number from 1 to 100 ol' boy!");
	}

	//Checks if you've already guessed a number
	for(var i = 0; i < guessArr.length; i++) {
		if(guessArr[i] == guess) {
			$guess.val('');
			return alert("You already guessed that number!  Guess again ol' boy!");
		}
	}

	assessGuess(guess);
	
	//Push guess to array to check if user guessed already and reset input text
	guessArr.push(guess);
	$guess.val('');

	//Decrement answers
	answers--;

	//Check if user has run out of answers
	if(answers <= 0) {
		$answer.text("Game Over! Good try ol'chap.  Maybe next time?");
		$mascot.removeClass().addClass('gameover');
		$answers.remove();
		$('.status p').remove();
		$submit.prop('disabled',true);
		$guess.prop('disabled',true);
		guessArr = [];

	//Else print the current number of answers remaining	
	} else {
		$('.answers p').replaceWith("<p>You have <span>" + answers +"</span> guesses left");
	}

});

//Hint Click Function
$hint.click(function() {

	//Shows current number
	$('.button-group').append("<p>" + num + "</p>");
	$hint.prop('disabled',true);
});

//Reset Click Function
$('#reset').click(function(){
	restartGame();
});

function restartGame() {
//Create new number and rest variables
	num = getRandomNum(1,100);
	answers = 5;
	guessArr = [];

	//Reset buttons and messages
	$answer.text("Guess a number between 1 and 100.  Feeling lucky ol' chap?");
	$mascot.removeClass().addClass('begin');
	$('.button-group p').remove();
	$('.status p').remove();
	$hint.prop('disabled',false);
	$submit.prop('disabled',false);
	$guess.prop('disabled',false);
	
	//Check to see if answers section is empty before reseting it
	if($('.answers').is(":empty")) {
		$('.answers').append("<p>You have <span>5</span> guesses.  Use them wisely...</p>");
	} else {
	$('.answers p').replaceWith("<p>You have <span>5</span> guesses.  Use them wisely...</p>");
	}

}

