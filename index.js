var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
    
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function  selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";   
    const opponent = Math.floor(Math.random() * choices.length);     
    document.getElementById("opponent-choice").src = choices[opponent] + ".png";

    
    if (you == 'rock' && opponent == 0) {
        yourScore ++;
        opponentScore ++;
    } 

    if (you == 'rock' && opponent == 2) {
        yourScore ++;        
    } 

    if (you == 'rock' && opponent == 1) {
        opponentScore ++;        
    } 

    if (you == 'paper' && opponent == 1) {
        yourScore ++;
        opponentScore ++;
    } 

    if (you == 'paper' && opponent == 0) {
        yourScore ++;        
    } 

    if (you == 'paper' && opponent == 2) {
        opponentScore ++;        
    } 

    if (you == 'scissors' && opponent == 2) {
        yourScore ++;
        opponentScore ++;
    } 

    if (you == 'scissors' && opponent == 1) {
        yourScore ++;        
    } 

    if (you == 'scissors' && opponent == 0) {
        opponentScore ++;        
    } 


    
   

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;

    
}