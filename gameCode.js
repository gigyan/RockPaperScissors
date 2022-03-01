




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}




 function computerSelect(intChoice) {

    const choices = ["rock" , "paper" , "scissors"];
    
    return choices[intChoice];
   
}

 let match_result = document.querySelector("#match_result");
 


function playgame(user, computer){
    
    if (user == "rock" && computer == "scissors"){

    match_result.innerHTML = "You win " + user + " beats " + computer;
     userScore++;

    } else if( user == "rock" && computer == "paper"){
      
        match_result.innerHTML =  "You lose " + computer +" beats " + user;
        compScore++;
    } 
    else if ( user == "paper" && computer == "rock") {
        match_result.innerHTML =  "You win " + user +" beats " + computer;
        userScore++;
    } 
    else if (user == "paper" && computer == "scissors"){
        match_result.innerHTML =  "You lose " + computer +" beats " + user; 
        compScore++;
    }
    else if( user == "scissors" && computer == "paper"){
        match_result.innerHTML = "You win " + user +" beats " + computer ;
        userScore++;
    } 
    else if( user == "scissors" && computer == "rock"){
        match_result.innerHTML =  "You lose " + computer +" beats " + user;
        compScore++;
    } 
    else {
        match_result.innerHTML = "You tied";
       
    }

}




let btnClickCount = 0;
let userChoice = "";
let userScore = 0;
let compScore = 0;


function checkScore(userScore , compScore){
    if(userScore == 5 || compScore == 5){
        console.log("Stop game");


          const buttonDiv = document.querySelector(".btn_container");

        let child = buttonDiv.lastElementChild;

        while(child){
            buttonDiv.removeChild(child);
            child = buttonDiv.lastElementChild;
        }

         const body = document.querySelector("body");
        

        
        let playAgain = document.createElement("button");

        playAgain.textContent = "Play Again";


        
        buttonDiv.appendChild(playAgain);

        buttonDiv.style.justifyContent = "center";

        playAgain.onclick = () => {
            window.location.reload();
        };

       


        
        


    }
}

//Rock button click event
let rock_btn = document.querySelector("#rock_btn");

rock_btn.onclick = () => {

userChoice = "rock";



let number = getRandomInt(3);
let computerChoice = computerSelect(number);

console.log(computerChoice);

playgame( userChoice , computerChoice);

let currentUserScore = document.getElementById("currentUserScore");
console.log(currentUserScore.innerHTML = userScore);   


let currentCompScore = document.getElementById("currentCompScore");
console.log(currentCompScore.innerHTML = compScore);   

checkScore(userScore , compScore);


};



let paper_btn = document.querySelector("#paper_btn");

paper_btn.onclick = () => {

userChoice = "paper";



let number = getRandomInt(3);
let computerChoice = computerSelect(number);

console.log(computerChoice);

playgame( userChoice , computerChoice);

let currentUserScore = document.getElementById("currentUserScore");
console.log(currentUserScore.innerHTML = userScore);   


let currentCompScore = document.getElementById("currentCompScore");
console.log(currentCompScore.innerHTML = compScore);  

checkScore(userScore , compScore);



};

let scissors_btn = document.querySelector("#scissors_btn");

scissors_btn.onclick = () => {

userChoice = "scissors";


let number = getRandomInt(3);
let computerChoice = computerSelect(number);

console.log(computerChoice);

playgame( userChoice , computerChoice);

let currentUserScore = document.getElementById("currentUserScore");
console.log(currentUserScore.innerHTML = userScore);   


let currentCompScore = document.getElementById("currentCompScore");
console.log(currentCompScore.innerHTML = compScore);   

checkScore(userScore , compScore);

};


    
    


 












