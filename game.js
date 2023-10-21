// Iteration 2: Generate 2 random number and display it on the screen
var num1;
var num2;


var num1_box = document.getElementById("number1")
var num2_box = document.getElementById("number2")


// Iteration 3: Make the options button functional
var score = 0
localStorage.setItem("score",score)
var greater_btn = document.getElementById("greater-than")
var equal_btn = document.getElementById("equal-to")
var lesser_btn = document.getElementById("lesser-than")
var timer = document.getElementById("timer")


function generateRandomNumber() {
    num1 = Math.floor(Math.random()*100);
    num2 = Math.floor(Math.random()*100);
    num1_box.textContent = num1;
    num2_box.textContent = num2;
}
generateRandomNumber()

greater_btn.onclick = ()=>{
    if (num1>num2) {
        update()
    } else {
        window.open("./gameover.html","_self")
    }
}
equal_btn.onclick = ()=>{
    if (num1==num2) {
        update()
    } else {
        window.open("./gameover.html","_self")
    }
}
lesser_btn.onclick = ()=>{
    if (num1<num2) {
        update()
    } else {
        window.open("./gameover.html","_self")
    }
}

// Iteration 4: Build a timer for the game

let interval;   
function time(){
    let sec = 5
    interval = setInterval(function(){
        sec--
        timer.textContent = sec
        if (sec==0) {
            clearInterval(interval)
            window.open("./gameover.html","_self")
        }
    },1000)
}
function update(){
    score++
    localStorage.setItem("score",score)
    generateRandomNumber()
    clearInterval(interval)
    time()
}
time()