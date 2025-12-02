let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    //const options = ["Iron Man","Captain America","Thor"];
    const randIdx = Math.floor(Math.random() * 3);//try to generate numbers randomly and changes to non decimal form
    return options[randIdx];
};

const drawGame = () => {
    //console.log("The game is Draw");
    msg.innerText = "Game was Draw, Play Again!";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
     userScore++;
     userScorePara.innerText = userScore;
     // console.log("Congratulation, You Win");
     msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
     msg.style.backgroundColor = "blue";
    } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You Lose");
    msg.innerText = `Oh, You Lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //console.log("User Choice = ", userChoice);
    //generate compter choice -> modular
    const compChoice = genCompChoice();
    // console.log("Comp Choice = ", compChoice);
    if(userChoice === compChoice) {
        //draw
        drawGame();
    } else {
        let userWin=true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice == "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //paper, scissors
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
          const userChoice = choice.getAttribute("id");
          console.log("Choice Was Clicked", userChoice);
          playGame(userChoice);
    });
});