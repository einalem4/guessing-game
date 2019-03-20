var secretNumber = Math.floor((Math.random() * 10) + 1);

var stringGuess = Number(prompt ("Guess a number"));
var guess = Number(stringGuess);

if (guess === secretNumber) {
  alert ("YOU GOT IT RIGHT!!!");
}

else if (guess > secretNumber) {
    alert ("Too high.  Guess Again");
}

else {
  alert ("Too low.  Guess Again");
}