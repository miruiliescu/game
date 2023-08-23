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
    }

    if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats rock :(")
    }

    if (playerSelection == "rock" && computerSelection == "scissor"){
        console.log("You win! Rock beats scissor :)")
    }

    if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats rock :) ")
    }

    if (playerSelection == "paper" && computerSelection == "scissor"){
        console.log("You lose! Scissor beats paper :(")
    }

    if (playerSelection == "scissor" && computerSelection == "rock"){
        console.log( " You lose! Rock beats scissor :(")
    }

    if (playerSelection == "scissor" && computerSelection == "paper"){
        console.log( "You win! Scissor beats paper :)")
    }
    
}


playRound();