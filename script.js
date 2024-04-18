// Have an array of answers
const answers = ["rock", "paper", "scissors"];

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
    player = player()
    computer = computer()

    if (computer == `rock` && player == `paper`) {
        console.log(`computer chose ${computer}`)
        console.log(`player wins`);
        
        return `player wins`;
    }
    else if (computer == `rock` && player == `scissors`) {
        console.log(`computer chose ${computer}`)
        console.log(`computer wins`);
        
        return 'computer wins';
    }
    else if (computer == `rock` && player == `rock`) {
        console.log(`computer chose ${computer}`)
        console.log(`Draw`);

        return `draw`;
    }
    else if (computer == `paper` && player == `rock`) {
        console.log(`computer chose ${computer}`)
        console.log(`computer wins`);
        
        return `computer wins`;
    }
    else if (computer == `paper` && player == `paper`) {
        console.log(`computer chose ${computer}`)
        console.log(`Draw`);

        return `draw`;
    }
    else if (computer == `paper` && player == `scissors`) {
        console.log(`computer chose ${computer}`)
        console.log(`player wins`);
        
        return `player wins`;
    }
    else if (computer == `scissors` && player == `rock`) {
        console.log(`computer chose ${computer}`)
        console.log(`player wins`);
        
        return `player wins`;
    }
    else if (computer == `scissors` && player == `paper`) {
        console.log(`computer chose ${computer}`)
        console.log(`computer wins`);
        
        return `computer wins`;
    }
    else {
        console.log(`computer chose ${computer}`)
        console.log(`Draw`);

        return `draw`;
    }

};

// Play the game by having 5 rounds. Keep score. Add a point to the score whether user or computer wins round. 
// Display the winner depending on who has more points.
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let x  = playRound(player, computer);
    if (x == `player wins`) {
        playerScore++;
    }
    else if (x == `computer wins`) {
        computerScore++;
    }
    let y = playRound(player, computer);
    if (y == `player wins`) {
        playerScore++;
    }
    else if (y == `computer wins`) {
        computerScore++;
    }
    z = playRound(player, computer);
    if (z == `player wins`) {
        playerScore++;
    }
    else if (z == `computer wins`) {
        computerScore++;
    }
    let a = playRound(player, computer);
    if (a == `player wins`) {
        playerScore++;
    }
    else if (a == `computer wins`) {
        computerScore++;
    }
    let b = playRound(player, computer);
    if (b == `player wins`) {
        playerScore++;
    }
    else if (b == `computer wins`) {
        computerScore++;
    }
    if (playerScore > computerScore) {
        console.log(`player wins the game`);
    }
    else if (playerScore < computerScore) {
        console.log(`computer wins the game`);
    }
    console.log(`You're score: ${playerScore}`);
    console.log(`Computer's score: ${computerScore}`);
};

// call the game funciton
playGame();






