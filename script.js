// Have an array of answers
const answers = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Get the computers choice by selcting from the array randomly and return that choice
let computer = function computerSelection() {
    let random = Math.floor(Math.random() * answers.length);
    let computerChoice = (answers[random]);
    return computerChoice;
};

// Get the player's choice by prompting them for input and return the input
let player = function playerSelection() {
    let userChoice = prompt(`rock, paper, or scissors? `).toLowerCase().trim();
    return userChoice;
};

//  Play a round by comparing both players' choices and print the outcome and return the outcome
function playRound(player, computer) {
    
    computer = computer();
    const div = document.querySelector(".result");
    const computerResult = document.querySelector(".computerResult")
    const userScore = document.querySelector(".score")
    const comScore = document.querySelector(".comScore");
    

    
    userScore.textContent = `Your score: ${playerScore}`;
    comScore.textContent = `Computer score ${computerScore}`;
    

    if (computer == `rock` && player == `paper`) {
        computerResult.textContent = `computer chose ${computer}`;
        div.textContent = `player wins`;
        playerScore += 1;
        if (playerScore == 5) {
            div.textContent = `player wins the whole game`;
        }
        return `player wins`;
    }
    else if (computer == `rock` && player == `scissors`) {
        computerResult.textContent = `computer chose ${computer}`;
        div.textContent = `computer wins`;
        computerScore += 1;
        if (computerScore == 5) {
            div.textContent = `computer wins the whole game`;
            return `computer wins`
        }
        return 'computer wins';
    }
    else if (computer == `rock` && player == `rock`) {
        computerResult.textContent = `computer chose ${computer}`;
        div.textContent = `Draw`;

        return `draw`;
    }
    else if (computer == `paper` && player == `rock`) {
        computerResult.textContent = `computer chose ${computer}`;
        div.textContent = `computer wins`;
        
        return `computer wins`;
    }
    else if (computer == `paper` && player == `paper`) {
        computerResult.textContent = `computer chose ${computer}`;
        div.textContent = `Draw`;

        return `draw`;
    }
    else if (computer == `paper` && player == `scissors`) {
        computerResult.textContent = `computer chose ${computer}`;
        div.textContent = `player wins`;
        
        return `player wins`;
    }
    else if (computer == `scissors` && player == `rock`) {
        computerResult.textContent = `computer chose ${computer}`;
        div.textContent = `player wins`;
        
        return `player wins`;
    }
    else if (computer == `scissors` && player == `paper`) {
        computerResult.textContent = `computer chose ${computer}`;
        div.textContent = `computer wins`;
        
        return `computer wins`;
    }
    else {
        computerResult.textContent = `computer chose ${computer}`;
        div.textContent = `Draw`;

        return `draw`;
    }
    

};

// Play the game by having 5 rounds. Keep score. Add a point to the score whether user or computer wins round. 
// Display the winner depending on who has more points.
function playGame() {
    const winner = document.querySelector(".winner");
    
    
    if (playerScore > computerScore) {
        console.log(`player wins the game`);
    }
    else if (playerScore < computerScore) {
        console.log(`computer wins the game`);
    }
    console.log(`You're score: ${playerScore}`);
    console.log(`Computer's score: ${computerScore}`);
};

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    playRound(`rock`, computer);
});

paper.addEventListener("click", () => {
    playRound(`paper`, computer);
});

scissors.addEventListener("click", () => {
    playRound(`scissors`, computer);
});

// call the game funciton
playGame();






