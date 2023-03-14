console.log("Hi");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}
console.log(getComputerChoice());

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection === "scissors") ||
    (playerSelection == "scissors" && computerSelection === "paper") ||
    (playerSelection == "paper" && computerSelection === "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "Its a Tie! No one wins...";
  } else if (result == "Player")
    return `Oh man, you won! ${playerSelection} beats ${computerSelection}.`;
  else result == "Computer";
  {
    return "Dang the machine won buddy...";
  }
}

function game() {
  console.log("Welcome");
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("rock, paper, scissors");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
