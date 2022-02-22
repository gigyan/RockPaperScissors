
let userScore = 0;
let compScore = 0;

for(let i = 0; i < 5 ; i++){

let response = prompt(" Choose rock, paper, or scissors.");
let userChoice =  response.toLowerCase();
 



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let number = getRandomInt(3);


 function computerSelect(intChoice) {

    const choices = ["rock" , "paper" , "scissors"];
    
    return choices[intChoice];
   
}

let computerChoice = computerSelect(number);




function playgame(user, computer){
    if (user == "rock" && computer == "scissors"){
    console.log( "You win " + user +" beats " + computer );
    userScore++;
    } else if( user == "rock" && computer == "paper"){
        console.log( "You lose " + computer +" beats " + user );
        compScore++;
    } 
    else if ( user == "paper" && computer == "rock") {
        console.log( "You win " + user +" beats " + computer );
        userScore++;
    } 
    else if (user == "paper" && computer == "scissors"){
        console.log( "You lose " + computer +" beats " + user ); 
        compScore++;
    }
    else if( user == "scissors" && computer == "paper"){
        console.log( "You win " + user +" beats " + computer );
        userScore++;
    } 
    else if( user == "scissors" && computer == "rock"){
        console.log( "You lose " + computer +" beats " + user );
        compScore++;
    } 
    else {
        console.log("You tied");
        userScore++;
        compScore++;
    }

}

playgame(userChoice, computerChoice);

}

if(userScore > compScore){
console.log("You won!");
} else {
    console.log("You lost");
}








