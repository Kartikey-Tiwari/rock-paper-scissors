function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1)
        return "rock";
    else if (computerChoice === 2)
        return "paper";
    else
        return "scissors";
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock"||
        playerSelection == "scissors" && computerSelection == "paper")
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
        const playerSelection = prompt("Choose Rock, Paper or Scissors: ");
        const computerSelection = getComputerChoice();
        let winner = playRound(playerSelection,computerSelection);
        if (winner == "player"){
            playerScore++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        }
        else if (winner == "computer"){
            computerScore++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        }
        else{
            console.log(`You tied! Both played ${playerSelection}`);
        }
    }
    if (playerScore > computerScore){
        console.log(`You Won the game ${playerScore} - ${computerScore}!`);
    }
    else if (computerScore > playerScore){
        console.log(`You Lost the game ${playerScore} - ${computerScore}!`);
    }
    else {
        console.log(`Game tied! ${playerScore} - ${computerScore}`);
    }
}