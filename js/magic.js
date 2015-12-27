// Magic Card Guesser Processing

var cards = ["#one", "#two", "#three", "#four", "#five", "#six"];
var card;
var guess;
function beginGame () {
	$('#game').toggleClass('hide');
	$('#intro').toggleClass('hide');
	card = 0;
	guess = 0;
}
function select (onCard) {
	// Handle card value
	if (onCard == 'yes') {
		console.log('aaa');
		guess = guess + Math.pow(2, card);
	} else {
		console.log('bbb')
	}
	// Final card
	if (card == 5) {
		guessCard();
	} else {
		nextCard();
	}
}

function nextCard () {
	$(cards[card]).toggleClass('hide');
	card += 1;
	$(cards[card]).toggleClass('hide');
}

function guessCard () {
	if (guess == 0) { guess = 1 }
	alert('Was your number ' + guess + ' ?');
	location.reload();
}
