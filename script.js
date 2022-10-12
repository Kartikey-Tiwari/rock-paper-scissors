function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1)
        return "Rock";
    else if (computerChoice === 2)
        return "Paper";
    else
        return "Scissors";
}

function getPlayerChoice(){
    let playerChoice;
    do {
        playerChoice = prompt("Choose Rock, Paper or Scissors: ");
        playerChoice = playerChoice.toLowerCase();
    } while(playerChoice != "rock" && 
            playerChoice != "paper" && 
            playerChoice != "scissors");
    return playerChoice;
}

function playRound(playerSelection, computerSelection){

    if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Pock"||
        playerSelection == "Scissors" && computerSelection == "Paper")
        return "player";
    else if (playerSelection == computerSelection)
        return "tie";
    else
        return "computer";
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
        const computerSelection = getComputerChoice();
        let winner = playRound(playerSelection,computerSelection);
        if (winner == "player"){
            playerScore++;
            alert(`You Win! ${playerSelection} beats ${computerSelection}\n` + 
            `Current Score: ${playerScore} - ${computerScore}`);
        }
        else if (winner == "computer"){
            computerScore++;
            alert(`You Lose! ${computerSelection} beats ${playerSelection}\n` + 
            `Current Score: ${playerScore} - ${computerScore}`);
        }
        else{
            alert(`You tied! Both played ${playerSelection}\n` +
            `Current Score: ${playerScore} - ${computerScore}`);
        }
    }
    if (playerScore > computerScore){
        alert(`You Won the game ${playerScore} - ${computerScore}!`);
    }
    else if (computerScore > playerScore){
        alert(`You Lost the game ${playerScore} - ${computerScore}!`);
    }
    else {
        alert(`Game tied! ${playerScore} - ${computerScore}`);
    }
}

game();