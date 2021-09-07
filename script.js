let ctnbt = document.getElementById("panelbt");
let arrbt = ctnbt.getElementsByTagName("button");
let woprChoice = "starter"
let playerChoice = "starter"
let playerRound = 0
let woprRound = 0
let playerScore = 0
let woprScore = 0
const choices = ['rock','paper','scissors','lizard','spock'];
let hands = {
    starter :"transparent",
    rock :"#ffd6d6",
    paper:"#fef6d4",
    scissors:"#f6d6ff",
    lizard:"#d8f3d8",
    spock:"#d5e5ff"
}
console.log(arrbt)

window.addEventListener("load", init); 
function init() {
    if(!localStorage.getItem('pStreak')) {
        localStorage.setItem('pStreak',0)
    }
    if(!localStorage.getItem('wStreak')) {
        localStorage.setItem('wStreak', 0)
    }
    playerScore = localStorage.getItem('pStreak');
    woprScore = localStorage.getItem('wStreak');
    display();
    for (let i = 0; i < arrbt.length; i++) {
        arrbt[i].addEventListener("click", function(){
            // console.log(arrbt[i].id)
            playerChoice = arrbt[i].id;
            round()
        })
    }
}

function clearStrg() {
    localStorage.clear();
    init();
}

function round() {
    console.log(playerChoice)
    woprChoice = choices[getRand(choices.length)]
    console.log(woprChoice)
    if (woprChoice == playerChoice) {tieRound();}
    else if ((playerChoice == "rock" && (woprChoice == "scissors" || woprChoice == "lizard"))
            || (playerChoice == "paper" && (woprChoice == "rock" || woprChoice == "spock"))
            || (playerChoice == "scissors" && (woprChoice == "paper" || woprChoice == "lizard"))
            || (playerChoice == "lizard" && (woprChoice == "paper" || woprChoice == "spock")) 
            || (playerChoice == "spock" && (woprChoice == "rock" || woprChoice == "scissors"))) {
                winRound();
            } else { loseRound()}
}

function tieRound() {
    console.log("tie")
    messagePopUp("Tie !")
    setTimeout(closePopUp, 1500)
    display()
}

function winRound() {
    playerRound ++
    console.log("Win round")
    messagePopUp(playerChoice + " beats " + woprChoice + "!")
    setTimeout(closePopUp, 1500)
    display()
    if (playerRound == 3) {
        console.log("Player won the match")
        setTimeout(function() {winMatch("player")},1500) 
    }

}

function loseRound() {
    woprRound ++
    console.log("lose Round")
    messagePopUp(woprChoice + " beats " + playerChoice + "!")
    setTimeout(closePopUp, 1500)
    display()
    if (woprRound == 3) {
        console.log("Player lost the match")
        setTimeout(function(){winMatch("wopr")},1500) 
    }

}

function winMatch(who) {
    messagePopUp(who + " won the match!")
    setTimeout(closePopUp, 1500)
    playerRound = 0
    woprRound = 0
    playerChoice = "starter";
    woprChoice = "starter";
    switch(who) {
        case "player" : playerScore ++; localStorage.setItem('pStreak', playerScore); break;
        case "wopr" : woprScore ++; localStorage.setItem('wStreak', woprScore); break;
    }
    console.log(playerScore, woprScore)
    display()

}

function display() {
    //display donuts player
    let nbrRoundPlayer = document.getElementById("pRound");
    nbrRoundPlayer.innerHTML= "";
    for (let j = 1; j <= playerRound; j++) {
    let donut = document.createElement("img");
    donut.src = "images/donut_"+j+".svg";
    donut.alt = "donut";
    nbrRoundPlayer.appendChild(donut);
    }

    //display donuts wopr
    let nbrRoundWopr = document.getElementById("wRound");
    nbrRoundWopr.innerHTML= "";
    for (let j = 1; j <= woprRound; j++) {
    let donut = document.createElement("img");
    donut.src = "images/donut_"+j+".svg";
    donut.alt = "donut";
    nbrRoundWopr.appendChild(donut);
    }
    //display Scores
    let spanScorePlayer = document.getElementById("scorePlayer")
    let spanScoreWopr = document.getElementById("scoreWopr")
    spanScorePlayer.innerHTML= playerScore;
    spanScoreWopr.innerHTML= woprScore;

    console.log(localStorage)

    //display hands
    let pAnim = document.getElementById("playerAnimation");
    pAnim.style.backgroundColor = hands[playerChoice];
    pAnim.innerHTML = "<img src='images/"+playerChoice+".svg' alt='"+playerChoice+"'>";
    let wAnim = document.getElementById("woprAnimation");
    wAnim.style.backgroundColor = hands[woprChoice];
    wAnim.innerHTML = "<img src='images/"+woprChoice+".svg' alt='"+woprChoice+"'>";
}

let popUp = document.getElementById("popUp")

function messagePopUp(msg) {
    popUp.innerHTML= msg;
    popUp.style.display = "flex"
}

function closePopUp() {
    popUp.style.display = "none"

}




// function getHand(choice) {
//     // const arrhands = [["rock","#ffd6d6"],["paper","#fef6d4"],["scissors","#f6d6ff"],["lizard", "#d8f3d8"], ["spock", "#d5e5ff"]]

// }


function getRand(max){
    
        return(Math.floor(Math.random() * max))
    }





