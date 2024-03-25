// Iteration 8: Making scoreboard functional

score = localStorage.getItem("Score");
document.getElementById("score-board").innerHTML = score;


document.getElementById("play-again-button").onclick = function(){
    localStorage.setItem("Score",0);
    window.open("index.html","_self");
}
