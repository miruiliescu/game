function getComputerChoice(){
    let n = [];
    n[0] = "rock";
    n[1] = "paper";
    n[2] = "scissor";
    let i = Math.floor(Math.random() * 3);
    return n[i];
}

 

function playRound() {

    let computerSelection = getComputerChoice();
    let playerSelection = prompt("your choice: ").toLowerCase();
    
    console.log(`computer's choice: ${computerSelection}`);
   
 
    if (playerSelection == computerSelection){
        console.log( "equality!")
        return 0;
    }

    if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats rock :(")
        return 1;
    }

    if (playerSelection == "rock" && computerSelection == "scissor"){
        console.log("You win! Rock beats scissor :)")
        return 2;
    }

    if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats rock :) ")
        return 2;
    }

    if (playerSelection == "paper" && computerSelection == "scissor"){
        console.log("You lose! Scissor beats paper :(")
        return 1;
    }

    if (playerSelection == "scissor" && computerSelection == "rock"){
        console.log( " You lose! Rock beats scissor :(")
        return 1;
    }

    if (playerSelection == "scissor" && computerSelection == "paper"){
        console.log( "You win! Scissor beats paper :)")
        return 2;
    }
    
}




function game () {
    let playerScore = 0;
    let computerScore = 0;
    let score = 0;
    let numberOfRounds = 0;
    do {
        score = playRound();
       
        if(score== 1) {
            computerScore ++;
            

        } 
        
        
        if (score == 2) {
            playerScore ++;
        }

        numberOfRounds ++;
        
           
        
    } while (numberOfRounds < 5)
    
    if (playerScore > computerScore) {
        console.log ("YOU WIN!!");
    }
   else if (computerScore > playerScore) {
        console.log ("YOU LOSE!")
    }
    if (playerScore == computerScore) {
        console.log ("TIE!");
    }
}

game();