const signs = ['paper','rock','scissors','lizard','spock'];
let player = "lizard";


function start() {
    let wopr = signs[Math.floor(Math.random() * signs.length)];
    document.getElementById("wopr").innerHTML= wopr ;
    console.log(wopr);
    console.log(wopr == player);
    if (wopr == player) {
        alert("It's a Tie"); } 
}










