let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const info = document.querySelector("#round-info");
const result = document.querySelector("#result");
const playedMove = document.querySelectorAll(".played");
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const playAgainButton = document.querySelector("#reset");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerChoice = event.target.getAttribute("id");
    playRound(playerChoice, getComputerChoice());
  });
});

playAgainButton.style.display = "none";
playAgainButton.addEventListener("click", (event) => {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
  result.textContent = "Choose your weapon";
  info.textContent = "First to 5 points wins";
  playAgainButton.style.display = "none";
});

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "Rock";
  } else if (computerChoice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerScore === 5 || computerScore === 5) return;
  if (playerSelection === "Rock") playedMove[0].textContent = "🪨";
  else if (playerSelection === "Paper") playedMove[0].textContent = "📃";
  else playedMove[0].textContent = "✂";
  if (computerSelection === "Rock") playedMove[1].textContent = "🪨";
  else if (computerSelection === "Paper") playedMove[1].textContent = "📃";
  else playedMove[1].textContent = "✂";
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    playerScore++;
    result.textContent = `You Win!`;
    info.textContent = `${playerSelection} beats ${computerSelection}`;
    playerScoreElement.textContent = `${playerScore}`;
  } else if (playerSelection == computerSelection) {
    result.textContent = `It's a tie!`;
    info.textContent = `Both played ${playerSelection}`;
  } else {
    computerScore++;
    result.textContent = `You Lose!`;
    info.textContent = `${playerSelection} loses to ${computerSelection}`;
    computerScoreElement.textContent = `${computerScore}`;
  }
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      result.textContent = "You win the game (:";
    } else {
      result.textContent = "You lose the game ):";
    }
    playAgainButton.style.display = "block";
  }
}
