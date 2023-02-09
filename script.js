//declare getComputerChoice, playersChoise
const computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()
//randomly return Rock / Paper Scissors 
function getComputerChoice() {
    //örray rock paper scissors
    let computerSelect = ["Rock", "Paper", "Scissors"];
    //randomize answer
    let randomSelect = (Math.floor(Math.random() * computerSelect.length))

    //conditions
    if (randomSelect === 0) {
        return "Rock";
    };
    if (randomSelect === 1) {
        return "Paper";
    }
    if (randomSelect === 2) {
        return "Scissors";
    }
}
console.log(getComputerChoice())

//function PlayerChoice
function getPlayerChoice() {

    let playerSelect = ["Rock", "Paper", "Scissors"];
    const input = prompt("123?")

    if (playerSelect === "Rock") {
        return "Rock";
    }
    if (playerSelect === "Paper") {
        return "Paper";
    }
    if (playerSelect === "Scissors") {
        return "Scissors";
    }
}
console.log(getPlayerChoice("Rock", "Paper", "Scissors"))
