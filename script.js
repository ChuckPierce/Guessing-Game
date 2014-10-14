function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

var num = getRandomNum(1,100);
var answers = 5;
var guessArr = [];
console.log(num);

$('#submit').click(function() {
	var guess = $('#guess').val();
	var status = "";
	console.log(typeof guess);
	console.log(num);

	if(guess > 100 || guess <= 0 || typeof guess == "NaN") {
		$('#guess').val('');
		return alert("You need to guess a number from 1 to 100 ol' boy!");
	}

	for(var i = 0; i < guessArr.length; i++) {
		if(guessArr[i] == guess) {
			$('#guess').val('');
			return alert("You already guessed that number!  Guess again ol' boy!");
		}
	}

	if(guess == num) {
	$('.answer p').replaceWith("<p>By jove you got it! <br> Good form ol'chap!</p>");
	$('.mascot div').removeClass().addClass('youwin');
	$('#submit').prop('disabled',true);
	$('#guess').prop('disabled',true);
	$('.answers p').remove();
	$('#guess').val('');
	return;
} else if (guess >= num + 35) {
	$('.answer p').replaceWith("<p>You're freezing your arse off ol'chap.  Guess lower!</p>");
	$('.mascot div').removeClass().addClass('youaresupercold');
	status = "Freezing! Guess lower!";
} else if (guess <= num - 35) {
	$('.answer p').replaceWith("<p>You're freezing your arse off ol'chap.  Guess higher!</p>");
	$('.mascot div').removeClass().addClass('youaresupercold');
	status = "Freezing! Guess higher!";
} else if(guess < num + 35 && guess >= num + 25) {
	$('.answer p').replaceWith("<p>You're cold ol'boy.  Guess lower!</p>");
	$('.mascot div').removeClass().addClass('youarecold');
	status = "Cold! Guess lower!";
} else if(guess > num - 35 && guess <= num - 25) {
	$('.answer p').replaceWith("<p>You're cold ol'boy.  Guess higher!</p>");
	$('.mascot div').removeClass().addClass('youarecold');
	status = "Cold! Guess higher!";
} else if(guess < num + 25 && guess >= num + 5) {
	$('.answer p').replaceWith("<p>You're getting warmer bud.  Guess lower!</p>");
	$('.mascot div').removeClass().addClass('youonfire');
	status = "Warmer! Guess lower!";
} else if(guess > num - 25 && guess <= num - 5) {
	$('.answer p').replaceWith("<p>You're getting warmer bud.  Guess higher!</p>");
	$('.mascot div').removeClass().addClass('youonfire');
	status = "Warmer! Guess higher!";
} else if(guess < num + 5 && guess >= num + 1) {
	$('.answer p').replaceWith("<p>You're getting burned!! Guess a little lower!</p>");
	$('.mascot div').removeClass().addClass('yousuperonfire');
	status = "Burning! Guess lower!";
} else if(guess > num - 5 && guess <= num - 1) {
	$('.answer p').replaceWith("<p>You're getting burned!!  Guess a little higher!</p>");
	$('.mascot div').removeClass().addClass('yousuperonfire');
	status = "Burning! Guess higher!";
}

$('.status').append("<p>You guessed " + guess + ". " + status + "</p>");
guessArr.push(guess);
console.log(guessArr);
$('#guess').val('');

answers--;

if(answers <= 0) {
	$('.answer p').replaceWith("<p>Game Over! Good try ol'chap.  Maybe next time?</p>");
	$('.mascot div').removeClass().addClass('gameover');
	$('.answers p').remove();
	$('.status p').remove();
	$('#submit').prop('disabled',true);
	$('#guess').prop('disabled',true);
	guessArr = [];
} else {
	$('.answers p').replaceWith("<p>You have <span>" + answers +"</span> guesses left");
}

});

$('#hint').click(function() {

	$('.button-group').append("<p>" + num + "</p>");
	$('#hint').prop('disabled',true);
});

$('#reset').click(function(){
	num = getRandomNum(1,100);
	console.log(num);
	answers = 5;
	$('.answer p').replaceWith("<p>Guess a number between 1 and 100<br><br>Feeling lucky ol' chap?</p>");
	$('.mascot div').removeClass().addClass('begin');
	$('.button-group p').remove();
	$('.status p').remove();
	$('#hint').prop('disabled',false);
	$('#submit').prop('disabled',false);
	$('#guess').prop('disabled',false);
	console.log($('.answers').val());
	if($('.answers').is(":empty")) {
		$('.answers').append("<p>You have <span>5</span> guesses.  Use them wisely...</p>");
	} else {
	$('.answers p').replaceWith("<p>You have <span>5</span> guesses.  Use them wisely...</p>");
	}
	guessArr = [];
});





