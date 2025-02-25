let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was Draw. Play again";
    msg.backgroundColore="#081b00"

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColore="green";
    } 

    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} bets your ${userChoice}`;
        msg.style.backgroundColore="red";


    }
};


const playGame=(userChoice)=>{
// Generate Computer choice->modular
const compChoice=genCompChoice();
console.log("comp choice=",compChoice);


if(userScore===compChoice){
drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
       userWin= compChoice==="paper"?false: true;


    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;

    }
    else{
       userWin= compChoice==="rock"?false:true;
    }

    showWinner(userWin,userChoice,compChoice);
}

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("It was click",userChoice);
playGame(userChoice);
    });
});
