// Magic Card Guesser Processing

var cards = ["#one", "#two", "#three", "#four", "#five", "#six"];
var card;
var guess;

function sum (array) {
    var tot = 0;
    if (array.length == 1) {
        return array[0];
    } else {
        for (var i = array.length - 1; i >= 0; i--) {
            tot += array[i];
        };
        return tot;
    }
}

function beginGame () {
    $('#game').toggleClass('hide');
    $('#intro').toggleClass('hide');
    card = 0;
    guess = [];
}
function select (onCard) {
    // Handle card value
    if (onCard == 'yes') {
        // guess = guess + Math.pow(2, card);
        guess.push(Math.pow(2, card));
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

function lastCard () {
    if (card != 0) {
        $(cards[card]).toggleClass('hide');
        card -= 1;
        $(cards[card]).toggleClass('hide');
    } else {
        beginGame();
    }
}

function guessCard () {
    if (length.guess == 0) { 
        alert('Was your number ' + 1 + '?');
    } else {
        alert('Was your number ' + sum(guess) + '?');
        location.reload();
    }
}