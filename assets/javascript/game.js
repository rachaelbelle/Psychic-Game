var wins = 0;
var losses = 0;
var Guesses Left = 0;

document.onkeyup = function(event) {
  var userGuess = event.key;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  var

}

computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];






document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Reworked our code from last step to use "else if" instead of lots of if statements.

  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

    if ((userGuess === "r" && computerGuess === "s") ||
      (userGuess === "s" && computerGuess === "p") ||
      (userGuess === "p" && computerGuess === "r")) {
      wins++;
    } else if (userGuess === computerGuess) {
      ties++;
    } else {
      losses++;
    }

    // Hide the directions
    directionsText.textContent = "";

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    tiesText.textContent = "ties: " + ties;
  }
};
