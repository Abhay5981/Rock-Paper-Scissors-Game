let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // rock paper scissors
   const randomInx =  Math.floor(Math.random() * 3);
   return options[randomInx];
}; 

const drawGame = () => {
    
    msg.innerText = "Game Draw. Play again!";
    msg.style.backgroundColor = "yellow";
    
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++
        compScorePara.innerText = compScore;
        
        
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // to generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {   // drow condition
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {   // scissors, paper
         userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") { // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {   //rock, paper
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});