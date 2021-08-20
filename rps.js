
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    if (choice == 0){
        return "rock";
    }
    else if (choice == 1){
        return  "paper";
    }
    else if (choice == 2){
        return  "scissors";
    }
}

function playerChoice(){
    let choice = window.prompt("Do you pick Rock, Paper, or Scissors?").toLowerCase();
    return choice;
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerChoice();
    computerSelection = computerPlay();

    if(playerSelection == computerSelection){
        return "Computer chose " + computerSelection +". Its a Draw!\nPlayer score: " + playerScore +"\nComputer score: " +computerScore;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++; 
        return "Computer chose " + computerSelection +". You win! Rock beats Paper \nPlayer score: " + playerScore +"\nComputer score: " +computerScore;
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        return "Computer chose " + computerSelection +". You win! Paper beats Rock\nPlayer score: " + playerScore +"\nComputer score: " +computerScore;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        return "Computer chose " + computerSelection +". You win! Scissors beats Paper\nPlayer score: " + playerScore +"\nComputer score: " +computerScore;
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return "Computer chose " + computerSelection +". You lose! Paper beats Rock\nPlayer score: " + playerScore +"\nComputer score: " +computerScore;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        return "Computer chose " + computerSelection +". You lose! Scissors beats Paper\nPlayer score: " + playerScore +"\nComputer score: " +computerScore;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        return "Computer chose " + computerSelection +". You lose! Rock beats scissors\nPlayer score: " + playerScore +"\nComputer score: " +computerScore;
    }

}

function game(){
    
    while(playerScore != 3 && computerScore!= 3){
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore)
    {
        return "You win with a score of "+ playerScore + " to " + computerScore;
    }
    else if (playerScore < computerScore){
        return "You lose with a score of "+ playerScore + " to " + computerScore;
    }

}
console.log(game());


