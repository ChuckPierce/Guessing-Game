function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

var num = getRandomNum(1,100);

console.log(num);

$('#submit').click(function() {
	var guess = $('#guess').val();
	console.log(guess);
	console.log(num);
	if(guess == num) {
	$('.answer p').replaceWith("<p>By jove you got it! <br> Good form ol'chap!</p>");
	$('.mascot div').removeClass().addClass('youwin');
} else if (guess >= num + 20 || guess <= num - 20) {
	$('.answer p').replaceWith("<p>You're freezing your arse off ol'chap.  Guess again!</p>");
	$('.mascot div').removeClass().addClass('youaresupercold');
} else if (guess < num + 20 && guess >= num + 10) {
	$('.answer p').replaceWith("<p>You are getting hotter...keep guessing ol'chap</p>");
	$('.mascot div').removeClass().addClass('youonfire');
}
$('#guess').val('');
});

$('#hint').click(function() {

	$('.button-group').append("<p>" + num + "</p>");
	$('#hint').off("click");
});

$('#reset').click(function(){
	num = getRandomNum(1,100);
	console.log(num);
	$('.answer p').replaceWith("<p>Guess a number between 1 and 100<br><br>Feeling lucky ol' chap?</p>");
	$('div.youwin').removeClass('youwin').addClass('begin');
});




