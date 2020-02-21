const userScore = 0;
const computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector("score-board");
const resultDiv = document.querySelector(".result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
//cache the dom : storing these for later use. Instead of having to do this time and time again, we have them available in variables.
//*STEPS*
//When we click on rock we need to take the value of rock and compare it with the computer's choice (a random number)
//Check who wins
//Display who wins on the dom

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor((Math.random() * 3));
    return choices[randomNumber];
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS");
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("USER LOSES.");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("It's a draw.");
            break;
    }
}

function main() {
    rockDiv.addEventListener("click", function () {
        game("r");
    });

    paperDiv.addEventListener("click", function () {
        game("p");
    });

    scissorsDiv.addEventListener("click", function () {
        game("s");
    });
}

main()