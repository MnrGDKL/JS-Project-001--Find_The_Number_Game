const inputNumber   = document.querySelector("#input-number");
const quessBtn      = document.querySelector(".quess-btn");
const quessResult   = document.querySelector(".quess-result");
const attemptNumber = document.querySelector(".attempt-left");
const prevAttempts  = document.querySelector(".prev-attempts")
const congrats      = document.querySelector("img");
const newGame       = document.querySelector(".new-game");

const myNumber = Math.trunc(Math.random() * 100 + 1);
console.log("My Number:", myNumber);

let min = 0;
let max = 100;
let count = 10;
let userNum = 0;
let quessNums = [];

quessBtn.addEventListener("click", ()=>{
    count--;
    userNum = +inputNumber.value;
    if (count > 0){
        if (0 < userNum && userNum <= 100){
            userNum = +inputNumber.value;
            quessNums.push(userNum);
        
            if (userNum !== myNumber) {
                if (userNum < myNumber) {
                    min = userNum;
                    quessResult.innerText = `Too Low!\nGo Up`;
                    prevAttempts.innerText = `Your Previous Quesses: \n${quessNums.join(" - ")}`;
                    attemptNumber.textContent = count + " left";
                    inputNumber.value = "";
                } else {
                    max = userNum;
                    quessResult.innerText = `Too High!\nGo Down`;
                    prevAttempts.innerText = `Your Previous Quesses: \n${quessNums.join(" - ")}`;
                    attemptNumber.textContent = count + " left";
                    inputNumber.value = "";
                }
            }
        
            else{
                quessResult.innerText = `YOU WIN!`;
                congrats.style.visibility = "visible";
                attemptNumber.textContent = count + " left";
            }
        }
        
        else{
            quessResult.innerText = `Please, Enter only a number between ${min} and ${max}.`;
            inputNumber.value = "";
            count++;
        }
    }
    else{
        quessResult.innerText = `YOU LOSE \nWould You like To Play Again?`;
        attemptNumber.textContent = count + " left";
    }
});

newGame.addEventListener("click", ()=>{
    window.location.reload();
})
