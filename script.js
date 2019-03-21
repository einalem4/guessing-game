var secretNumber = Math.floor((Math.random() * 10) + 1);

//guess is a variable representing the value returned by the prompt aka what the user typed in
var guess = Number(prompt ("Guess a number"));

if (guess === secretNumber) {
  //first guess was correct
  alert ("YOU GOT IT RIGHT!!! On your first guess!!");
} else if (guess > secretNumber) {
  //first guess was too high
    alert ("Your First Guess Was Too high.  Guess Again");  
    //ask the user for a second guess
    guess = Number(prompt ("Guess another number"));
    //second guess was correct
    if (guess === secretNumber) {
      alert ("YOU GOT IT RIGHT!!! On your second guess!!");
    }
    //second guess was too high
    else if (guess > secretNumber) {
      alert ("Too high.  You lost");
    }
    //second guess was too low
    else {
      alert ("Your Second Guess Was Too low.  You lost");
    }
} else {
  //first guess was too low
  alert ("First Guess Was Too low.  Guess Again");
  //ask the user for a second guess
  guess = Number(prompt ("Guess a number"));
   //second guess was correct
  if (guess === secretNumber) {
    alert ("YOU GOT IT RIGHT!!! On your Second Guess");
     //second guess was too high
  } else if (guess > secretNumber) {
      alert ("Your Second Guess Was Too high.  You lost");
    //second guess was too low
    } else {
      alert ("Your Second Guess Was Too low.  You lost");
    }
}










