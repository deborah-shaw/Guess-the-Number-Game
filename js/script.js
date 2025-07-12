//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;

initializeGame();

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log("randomNumber: " + randomNumber);
  attempts = 0;

  //hiding the Reset button
  document.querySelector("#resetBtn").style.display = "none";

  //showing the GUess button
  document.querySelector("#guessBtn").style.display = "inline";

  document.querySelector("#playerGuess").style.display = "inline";
  document.querySelector("#enterGuess").style.display = "inline";

  let playerGuess = document.querySelector("#playerGuess");
  playerGuess.focus();    //adding focus to textbox
  playerGuess.value = "";    //clearing the textbox

  let feedback = document.querySelector("#feedback");
  feedback.textContent = "";    //clearing the feedback

  //clearing previous guesses
  document.querySelector("#guesses").textContent = "";

  //displaying how many attempts left
  document.querySelector("#attemptsLeft").textContent = 7 - attempts;

  //displaying the wins and losses
  document.querySelector("#wins").textContent = wins;
  document.querySelector("#losses").textContent = losses;
}

function checkGuess() {
  let feedback = document.querySelector("#feedback")
  feedback.textContent = "";
  let guess = document.querySelector("#playerGuess").value;
  console.log("Player guess: " + guess);
  if(guess < 1 || guess > 99) {
    feedback.textContent = "Enter a number between 1 and 99";
    feedback.style.color = "red";
    playerGuess.focus();    //adding focus to textbox
    playerGuess.value = "";    //clearing the textbox
    return;
  }
  attempts++;
  console.log("Attempts: " + attempts);
  feedback.style.color = "purple";
  document.querySelector("#guesses").textContent += guess + ", ";
  document.querySelector("#attemptsLeft").textContent = 7 - attempts;    //reduce 1 remaining attempt for every guess
  if (guess == randomNumber) {
    wins++;
    document.querySelector("#wins").textContent = wins;
    feedback.textContent = "You guessed it! You Won!" + "The number was " + randomNumber;
    feedback.style.color = "darkgreen";
    gameOver();
  } else {
    if (attempts == 7) {
      losses++;
      document.querySelector("#losses").textContent = losses;
      feedback.textContent = "Sorry, you lost!" + " The number was " + randomNumber;
      feedback.style.color = "red";
      gameOver();
    } else if (guess > randomNumber) {
      feedback.textContent = "Guess was HIGH";
    } else {
      feedback.textContent = "Guess was LOW";
    }
  }
  playerGuess.focus();    //adding focus to textbox
  playerGuess.value = "";    //clearing the textbox
}

function gameOver() {
  let guessBtn = document.querySelector("#guessBtn");
  guessBtn.style.display = "none";  //hides Guess button
  let restBtn = document.querySelector("resetBtn");
  resetBtn.style.display = "inline";  //displays Reset button
  let enterGuess = document.querySelector("#enterGuess");
  enterGuess.style.display = "none";  //hides "Enter a guess" text
  let playerGuess = document.querySelector("#playerGuess");
  playerGuess.style.display = "none";  //hids playerGuess input textbox
}
