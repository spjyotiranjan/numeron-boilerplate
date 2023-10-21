// Iteration 5: Store the player score and display it on the game over screen
var playAgain_btn = document.getElementById("play-again-button")
var score_box = document.getElementById("score-board")

var value = localStorage.getItem("score")

score_box.textContent = value

playAgain_btn.onclick =()=>{
    window.open("./game.html","_self")
}