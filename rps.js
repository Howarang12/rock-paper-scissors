
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector('#container')
const buttons = document.querySelectorAll("button");

const score = document.createElement('div');
score.textContent = "You: "+playerScore + "\nComputer: "+computerScore;
container.appendChild(score);

const round = document.createElement('div');
round.textContent = "";
container.appendChild(round);

const end = document.createElement('div');
end.textContent = "";
container.appendChild(end);

function computerChoice(){
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

function endGame(){
    if (playerScore == 5)
    {
        end.textContent = "You win with a score of "+ playerScore + " to " + computerScore;
    }
    if (computerScore == 5){
        end.textContent = "You lose with a score of "+ playerScore + " to " + computerScore;
    }
    else{
        return;
    }

}
function scoreKeep(){
    score.textContent = "You: "+playerScore + "\nComputer: "+computerScore;
}
function playRound(){
    computerSelection = computerChoice();
    
    if(playerSelection == computerSelection){
        round.textContent= "Computer chose " + computerSelection +". Its a Draw!";
        scoreKeep();
        endGame();
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++; 
        round.textContent= "Computer chose " + computerSelection +". You win! Rock beats Paper";
        scoreKeep();
        endGame();
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        round.textContent= "Computer chose " + computerSelection +". You win! Paper beats Rock";
        scoreKeep();
        endGame();
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        round.textContent= "Computer chose " + computerSelection +". You win! Scissors beats Paper";
        scoreKeep();
        endGame();
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        round.textContent= "Computer chose " + computerSelection +". You lose! Paper beats Rock";
        scoreKeep();
        endGame();
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        round.textContent="Computer chose " + computerSelection +". You lose! Scissors beats Paper";
        scoreKeep();
        endGame();
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        round.textContent="Computer chose " + computerSelection +". You lose! Rock beats scissors";
        scoreKeep();
        endGame();
    }

}
    


rock.addEventListener('click', function(){ playerSelection = "rock"; playRound() });
paper.addEventListener('click', function(){ playerSelection = "paper"; playRound() });
scissors.addEventListener('click', function(){ playerSelection = "scissors"; playRound() });



