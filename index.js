const buttons = document.querySelectorAll("button");
const rock = document.querySelector(".rockimg");
const paper = document.querySelector(".paperimg");
const scissor = document.querySelector(".scissorimg");
let userWinCount = document.querySelector("#UserCount");
let computerWinCount = document.querySelector("#ComputerCount");
   
function btnClick(userChoice,randomChoice){
    randomChoice= Math.round(Math.random() * 2 + 1 );
    document.querySelector(".computer").setAttribute("src", "/c" + [randomChoice] + ".png");
    evaluate(userChoice,randomChoice); 
}       

buttons.forEach(button => {
    button.addEventListener("click", function () {
             let userChoice = Number(button.value);
             btnClick(userChoice);
    });
});

let disAllBtn = () => {
    buttons.forEach(btn => {
       btn.disabled = true;
       });  
   }
   
let evaluate = (userChoice,randomChoice) => {
    let maxWin = 5;
       if ((userChoice === 1 && randomChoice === 3) || (userChoice === 3  && randomChoice === 2) || (userChoice === 2 && randomChoice === 1))  { 
        userWinCount.innerHTML = parseInt(userWinCount.innerHTML) +1;
        document.querySelector("h1").innerHTML = "You Win!";
       }else if((randomChoice === 1 && userChoice === 3) || (randomChoice === 3  && userChoice === 2) || (randomChoice === 2 && userChoice === 1)){
        computerWinCount.innerHTML = parseInt(computerWinCount.innerHTML) +1;
        document.querySelector("h1").innerHTML = "You Lose! Try Again!";
       }else{(randomChoice == userChoice)  
        document.querySelector("h1").innerHTML = "Draw! Play Again";
       }

       if (parseInt(userWinCount.innerHTML) >= maxWin || parseInt(computerWinCount.innerHTML) >= maxWin) {
        disAllBtn()
        evaluateWin();
        }
    }

let evaluateWin = () => {
    if (parseInt(userWinCount.innerHTML) > parseInt(computerWinCount.innerHTML)) {
        document.querySelector("h1").innerHTML = "VICTORY!";
    }else{(parseInt(userWinCount.innerHTML) > parseInt(computerWinCount.innerHTML))
        document.querySelector("h1").innerHTML = "YOU LOSE!! BETTER LUCK NEXT TIME!";
    }
}
