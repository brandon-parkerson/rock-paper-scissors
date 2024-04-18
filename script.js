const answers = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random = Math.floor(Math.random() * answers.length);
    let computerChoice = (answers[random]);
    return computerChoice;
}

