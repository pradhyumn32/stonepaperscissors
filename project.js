let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let b = document.querySelector("#comp");
let a = document.querySelector("#user");
let i;
let x;
let rst = document.querySelector("button");
let msg = document.querySelector(".msg");
const compChoice = (userChoice) => {
     i = Math.floor(Math.random() * 3);
     x = choices[i].getAttribute("id");
    console.log("Comp choice ",x);
    playGame(userChoice);
}

const playGame = (userChoice) => {
    console.log("user choice ",userChoice);
    if(x === userChoice){
        msg.innerText = "The Game has Tied!";
        msg.style.backgroundColor = "black";
    } else{
        notTie(x,userChoice);
    }
}

choices.forEach((choice)  => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        compChoice(userChoice);
    }
    )
}
)
let notTie = (x,userChoice) => {
    if(x == "rock"){
        if(userChoice == "paper"){
            userWin();
        }
        else{
            compWin();
        }
    }
    else if(x == "paper"){
        if(userChoice == "rock"){
            userWin();
        }
        else{
            compWin();
        }
    }
    else{
        if(userChoice == "rock"){
            userWin();
        }
        else{
            compWin();
        }
    } 
}
const userWin = () => {
    userScore+=1;
    a.innerText = userScore;
    msg.innerText = "You Win!!!";
    msg.style.backgroundColor = "green";
}
const compWin = () => {
    compScore+=1;

    b.innerText = compScore;
    msg.innerText = "Computer Wins! You Lose!!!";
    msg.style.backgroundColor = "red";
}
let newBtn = () => {
    userScore = 0;
    compScore = 0;
    a.innerText = 0;
    b.innerText = 0;
    msg.style.backgroundColor = "black";
    msg.innerText = "Play Your Game!!";
     
}
rst.addEventListener("click",() => {
    newBtn();
});