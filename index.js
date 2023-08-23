function getComputerChoice(){
    let n = [];
    n[0] = "rock";
    n[1] = "paper";
    n[2] = "scissor";
    let i = Math.floor(Math.random() * 3);
    return n[i];
}
console.log(getComputerChoice());  