//Global Variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;

//event listeners
//remember, # means id selection
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame)

initializeGame();

function initializeGame(){
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);
    attempts = 0;

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";

    //showing the Guess button
    document.querySelector("#guessBtn").style.display = "inline";

    //adding focus to textbox
    //document.querySelector("#playerGuess").focus();
    let playerGuess = document.querySelector("#playerGuess"); //assigning variable for conciseness
    playerGuess.focus(); //adding focus to textBox
    playerGuess.value = ""; //clearing the textBox

    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; //clearing the feedback

    //clearing previous guesses
    document.querySelector("#guesses").textContent = "";
}

function checkGuess(){
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);

    if(guess < 1 || guess > 99){
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }

    attempts++;
    document.querySelector("#attempts").textContent = attempts;
    console.log("Attempts: " + attempts);
    feedback.style.color = "blue";

    if(guess == randomNumber){
        feedback.textContent = "You guessed correctly! You Won!";
        feedback.style.color = "blue";
        wins++;
        document.querySelector("#wins").textContent = wins;
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += "(Attempt " + attempts + ": " + guess + "), ";
        
        if(attempts == 7){
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "crimson";
            losses++;
            document.querySelector("#losses").textContent = losses;
            gameOver();
        } else if(guess > randomNumber) {
            feedback.textContent = "Guess was high";
        } else {
            feedback.textContent = "Guess was low";
        }

    }

    function gameOver(){
        let guessBtn = document.querySelector("#guessBtn");
        let resetBtn = document.querySelector("#resetBtn");
        guessBtn.style = "none"; //hides the Guess button
        resetBtn.style = "inline"; //displays the Reset button
    }
}