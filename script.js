console.log("Hi");

const options = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;

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
  } else if (result == "Player") {
    playerWins++;
    return `Oh man, you won! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerWins++;
    return "Dang the machine won buddy...";
  }
}

function game() {
  console.log("Welcome");
  while (playerWins < 5 && computerWins < 5) {
    const playerSelection = prompt("rock, paper, scissors");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your current score is", playerWins);
    console.log("The computer score is", computerWins);
  }
  victoryCelebration();
}

function victoryCelebration() {
  //console.log("victory");
  if (playerWins == 5) {
    //console.log("victory 2");
    alert("You won the whole game.");
  } else {
    alert("The machine won.");
  }
}

game();
