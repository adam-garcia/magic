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
    $('#game').removeClass('hide');
    $('#one').removeClass('hide');
    $('#intro').addClass('hide');
    $('#guess').addClass('hide');
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
    if (sum(guess) == 0) { 
        alert('Hmm. Are you sure your number is between 1 and 63?');
        location.reload();
    } else {
        // alert('Was your number ' + sum(guess) + '?');
        guess = sum(guess);
        $("#six").addClass('hide');
        $("#game").addClass('hide');
        $("#guess-text").text("Was your card " + guess + "?");
        $("#guess").removeClass('hide');
        // location.reload();
    }
}