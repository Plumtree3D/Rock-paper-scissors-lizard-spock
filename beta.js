    
    const signs = ['rock','paper','scissors','lizard','spock'];

    let woprRound = new Number(0);
    let playerRound = new Number(0);
    let playerStreak = new Number(0);
    let woprStreak = new Number(0);



    if(!localStorage.getItem('pStreak')) {
        populateStorage();
    } else {
        setValues();
        document.getElementById("streak").innerHTML = "Streak Player = " + playerStreak + " WOPR = " + woprStreak;
    }

    function populateStorage () {
        localStorage.setItem('pStreak', playerStreak);
        localStorage.setItem('wStreak', woprStreak);

        setValues();
    }

    function setValues() {
        let pStreak = localStorage.getItem('pStreak');
        let wStreak = localStorage.getItem('wStreak');
        playerStreak = pStreak;
        woprStreak = wStreak;
    }

    function Clear() {localStorage.clear(); document.location.reload()}


    //FUNCTIONS//



    
    function getId(btn) {
        console.log(woprRound, playerRound)
        if (playerRound < 3 && woprRound < 3) {

            // var x = document.getElementById("playerAnimation");
            //   var y = document.getElementById("woprAnimation");
            //  setTimeout(function(){ x.style.backgroundPositionX = "-450px", 
            //  y.style.backgroundPositionX = "-450px"  }, 150);
            //  setTimeout(function(){ x.style.backgroundPositionX = "-900px",
            //  y.style.backgroundPositionX = "-900px" }, 300);
            //  setTimeout(function(){ x.style.backgroundPositionX = "-1350px",
            //  y.style.backgroundPositionX = "-1350px" }, 450);
            //  setTimeout(function(){ x.style.backgroundPositionX = "-1800px",
            //  y.style.backgroundPositionX = "-1800px" }, 600);


            playerInput = btn.id;
            woprInput = signs[Math.floor(Math.random() * signs.length)];
            document.getElementById("results").style.cssText = "display: none; font-size : 90px"
            

            if (playerInput == "rock") {document.getElementById("playerAnimation").style.backgroundPositionX = "0px";
            document.getElementById("player").style.backgroundColor = "#ffd6d6" }
            if (playerInput == "paper") {document.getElementById("playerAnimation").style.backgroundPositionX = "-450px"; 
            document.getElementById("player").style.backgroundColor = "#fef6d4"}
            if (playerInput == "scissors") {document.getElementById("playerAnimation").style.backgroundPositionX = "-900px"; 
            document.getElementById("player").style.backgroundColor = "#f6d6ff"}
            if (playerInput == "lizard") {document.getElementById("playerAnimation").style.backgroundPositionX = "-1350px";
            document.getElementById("player").style.backgroundColor = "#d8f3d8"}
            if (playerInput == "spock") {document.getElementById("playerAnimation").style.backgroundPositionX = "-1800px";
            document.getElementById("player").style.backgroundColor = "#d5e5ff"}
            if (woprInput == "rock") {document.getElementById("woprAnimation").style.backgroundPositionX = "0px";
            document.getElementById("wopr").style.backgroundColor = "#ffd6d6" }
            if (woprInput == "paper") {document.getElementById("woprAnimation").style.backgroundPositionX = "-450px"; 
            document.getElementById("wopr").style.backgroundColor = "#fef6d4"}
            if (woprInput == "scissors") {document.getElementById("woprAnimation").style.backgroundPositionX = "-900px"; 
            document.getElementById("wopr").style.backgroundColor = "#f6d6ff"}
            if (woprInput == "lizard") {document.getElementById("woprAnimation").style.backgroundPositionX = "-1350px";
            document.getElementById("wopr").style.backgroundColor = "#d8f3d8"}
            if (woprInput == "spock") {document.getElementById("woprAnimation").style.backgroundPositionX = "-1800px";
            document.getElementById("wopr").style.backgroundColor = "#d5e5ff"}
       
            game()} }
            

    




    function game() {
 
                if (woprInput == playerInput) {tie();}
                else if ((playerInput == "rock" && (woprInput == "scissors" || woprInput == "lizard"))
                        || (playerInput == "paper" && (woprInput == "rock" || woprInput == "spock"))
                        || (playerInput == "scissors" && (woprInput == "paper" || woprInput == "lizard"))
                        || (playerInput == "lizard" && (woprInput == "paper" || woprInput == "spock")) 
                        || (playerInput == "spock" && (woprInput == "rock" || woprInput == "scissors"))) 
                { playerRound ++;
                document.getElementById("results").innerHTML= playerInput + " beats " + woprInput + " !";
                if (playerRound == 1) {document.getElementById("p1").style.display="inline"}
                if (playerRound == 2) {document.getElementById("p2").style.display="inline"}
                if (playerRound == 3) {document.getElementById("p3").style.display="inline", fin()}}
                
                else {            
                woprRound ++;
                document.getElementById("results").innerHTML= woprInput + " beats " + playerInput + " !";
                if (woprRound == 1) {document.getElementById("w1").style.display="inline"}
                if (woprRound == 2) {document.getElementById("w2").style.display="inline"}
                if (woprRound == 3) {document.getElementById("w3").style.display="inline", fin()}
            } document.getElementById("results").style.cssText = "display: inline; font-size : 110px"
            
    }

 

    function tie() {
        document.getElementById("results").innerHTML= "Tie!";
    }


    function fin() {
        let btn = document.createElement("div");
        btn.innerHTML = '<button onclick="rematch()"> REMATCH </button>';
        btn.id = "delete"
        document.getElementById("infos").appendChild(btn);
;
        
        if (playerRound > woprRound) {
            document.getElementById("results").innerHTML= "Game over, you won " + playerRound  + " to " + woprRound + " !", playerStreak++, document.getElementById("streak").innerHTML = "Streak Player = " + playerStreak + " WOPR = " + woprStreak, document.getElementById("wopr").style.backgroundColor = "red" }
        else document.getElementById("results").innerHTML= "Game over, you lost " + woprRound + " to " + playerRound + " !", woprStreak++, document.getElementById("streak").innerHTML = "Streak Player = " + playerStreak + " WOPR = " + woprStreak,document.getElementById("player").style.backgroundColor = "red" };
        console.log("truc" + playerStreak, woprStreak);
        populateStorage();
        
         
        
    
    function rematch() {
        playerRound = 0, woprRound = 0
        document.getElementById("wopr").style.backgroundColor = "lightcoral";
        document.getElementById("player").style.backgroundColor = "lightcoral";
        let roundbullet = document.getElementsByClassName("roundbullet");
        for(let i = 0; i < roundbullet.length; i++) {
        roundbullet[i].style.display = "none";
        
        }
    document.getElementById("delete").remove();
    document.getElementById("results").style.cssText = "display: none; font-size : 90px"
    }

