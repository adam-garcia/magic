// Magic Card Guesser Processing

var cards = ["#one", "#two", "#three", "#four", "#five", "#six"];
var card;
function select (onCard) {
	if (card == 5) {

	} else {

	}
	nextCard();
	if (onCard == 'yes') {
		console.log('aaa')
	} else {
		console.log('bbb')
	}
}

function nextCard () {
	$(cards[card]).toggleClass('hide');
	card += 1;
	$(cards[card]).toggleClass('hide');
}
function no () {
	alert('no');
}

function begin () {
	$('#game').toggleClass('hide');
	$('#intro').toggleClass('hide');
	card = 0;
}