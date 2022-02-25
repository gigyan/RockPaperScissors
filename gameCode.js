
//for(let i = 0; i < 5 ; i++){



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}




 function computerSelect(intChoice) {

    const choices = ["rock" , "paper" , "scissors"];
    
    return choices[intChoice];
   
}

// let match_result = document.querySelector("#match_result");


function playgame(user, computer){
    if (user == "rock" && computer == "scissors"){
    console.log( "You win " + user +" beats " + computer ); // I want to display this to the user
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

let userChoice = "";
let userScore = 0;
let compScore = 0;

//Buttons
let rock_btn = document.querySelector("#rock_btn");

rock_btn.onclick = () => {
userChoice = "rock";


let number = getRandomInt(3);
let computerChoice = computerSelect(number);

console.log(computerChoice);

playgame( userChoice , computerChoice);

let currentUserScore = document.getElementById("currentUserScore");
console.log(currentUserScore.innerHTML = userScore);   // I figured out how to change the score


let currentCompScore = document.getElementById("currentCompScore");
console.log(currentCompScore.innerHTML = compScore);   // I figured out how to change the score


};



let paper_btn = document.querySelector("#paper_btn");

paper_btn.onclick = () => {userChoice = "paper";

let number = getRandomInt(3);
let computerChoice = computerSelect(number);

console.log(computerChoice);

playgame( userChoice , computerChoice);

let currentUserScore = document.getElementById("currentUserScore");
console.log(currentUserScore.innerHTML = userScore);   


let currentCompScore = document.getElementById("currentCompScore");
console.log(currentCompScore.innerHTML = compScore);   



};

let scissors_btn = document.querySelector("#scissors_btn");

scissors_btn.onclick = () => {userChoice = "scissors";

let number = getRandomInt(3);
let computerChoice = computerSelect(number);

console.log(computerChoice);

playgame( userChoice , computerChoice);

let currentUserScore = document.getElementById("currentUserScore");
console.log(currentUserScore.innerHTML = userScore);   


let currentCompScore = document.getElementById("currentCompScore");
console.log(currentCompScore.innerHTML = compScore);   

};

 

//}

// if(userScore > compScore){
// console.log("You won!");
// } else {
//     console.log("You lost");
// }








