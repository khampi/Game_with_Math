// Iteration 1: Making the play button in the index.html functional.

// Description: When the play button is clicked the game.html page should be opened


document.getElementById("play-button").onclick = function(){
    window.open("game.html","_self");
    localStorage.setItem("Score",0);
}
