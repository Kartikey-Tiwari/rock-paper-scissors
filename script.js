let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const info = document.querySelector('p');
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const resultArea = document.querySelector("#round-result");
const playAgainButton = document.querySelector("#reset");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    playRound(event.target.textContent, getComputerChoice());
  });
});

playAgainButton.style.display = "none";
playAgainButton.addEventListener("click", (event) => {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
  resultArea.textContent = "";
  playAgainButton.style.display = "none";
  info.textContent = "First to 5 points wins";
});

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) return "Rock";
  else if (computerChoice === 2) return "Paper";
  else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  if (playerScore === 5 || computerScore === 5) return;
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    playerScore++;
    resultArea.textContent = `You Win! ${playerSelection} beats ${computerSelection}\n`;
    playerScoreElement.textContent = `${playerScore}`;
  } else if (playerSelection == computerSelection) {
    resultArea.textContent = `You tied! Both played ${playerSelection}\n`;
  } else {
    computerScore++;
    resultArea.textContent = `You Lose! ${computerSelection} beats ${playerSelection}\n`;
    computerScoreElement.textContent = `${computerScore}`;
  }
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      info.textContent = "\nYou win the game!!";
    } else {
      info.textContent = "\nYou lose the game!!";
    }
    playAgainButton.style.display = "block";
  }
}
