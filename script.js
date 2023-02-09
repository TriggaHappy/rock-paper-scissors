//function getComputerChoice
const computerSelection = getComputerChoice()

//randomly return Rock / Paper Scissors 
function getComputerChoice() {
    //örray rock paper scissors
    let computerSelect = ["Rock", "Paper", "Scissors"];
    //randomize answer
    let randomSelect = (Math.floor(Math.random() * computerSelect.length))

    //conditions
    if (randomSelect === 1) {
        return "Rock";
    };
    if (randomSelect === 2) {
        return "Paper";
    }
    if (randomSelect === 3) {
        return "Scissors";
    }
}
console.log(getComputerChoice())
