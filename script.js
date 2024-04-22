function getComputerChoice() {
    // Will randomly return rock, paper or scissor
    // Math.floor(Math.random() * (max - min + 1)) + min;
    // used for getting random numbers in a specific range
    let random = Math.floor(Math.random() * (3)) + 1;
    if (random == 1)
    {
        return "Rock";
    }
    else if (random == 2)
    {
        return "Paper";
    }
    else if (random == 3)
    {
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // Depending on the combination of the two selections, return a string that declares the winner
    // if player chooses rock
    if (playerSelection === "rock")
    {
        // if computer chooses rock
        if (computerSelection === "rock")
        {
            return "Tie!";
        }
        // else if computer chooses paper
        else if (computerSelection === "paper")
        {
            return "You lose!";
        }
        // else if computer chooses scissor
        else if (computerSelection === "scissor")
        {
            return "You win!";
        }
    }
    // else if player chooses paper
    else if (playerSelection === "paper")
    {
        // if computer chooses rock
        if (computerSelection === "rock")
        {
            return "You win!";
        }
        // else if computer chooses paper
        else if (computerSelection === "paper")
        {
            return "Tie!";
        }
        // else if computer chooses scissor
        else if (computerSelection === "scissor")
        {
            return "You lose!";
        }
    }
    // else if player chooses scissor
    else if (playerSelection === "scissor")
    {
        // if computer chooses rock
        if (computerSelection === "rock")
        {
            return "You lose!";
        }
        // else if computer chooses paper
        else if (computerSelection === "paper")
        {
            return "You win!";
        }
        // else if computer chooses scissor
        else if (computerSelection === "scissor")
        {
            return "Tie!";
        }
    }
}

let message = "";
result = document.querySelector("#result");
playerScore = document.querySelector("#player");
computerScore = document.querySelector("#computer");
btns = document.querySelectorAll("button");
// Scores
let player = 0;
let computer = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        message = playRound(btn.textContent, getComputerChoice());
        result.textContent = message;
        // If you win, add a point to you
        if (message === "You win!")
        {
            player++;
        }
        // if you lose, add a point to the computer
        else if (message === "You lose!")
        {
            computer++;
        }
        // if you or computer gets 5 points, then declare winner and restart the game
        if (computer == 5)
        {
            result.textContent = "The computer won the game";
            computer = 0;
            player = 0;
        }
        else if (player == 5)
        {
            result.textContent = "The player won the game";
            computer = 0;
            player = 0;
        }
        // update scoreboard
        playerScore.textContent = player;
        computerScore.textContent = computer;
    });
});
