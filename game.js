// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

const num1 = Math.floor(Math.random()*100);
const num2 = Math.floor(Math.random()*100);

document.getElementById("number1").innerHTML = num1;
document.getElementById("number2").innerHTML = num2;

// Iteration 3: Creating variables required to make the game functional

var result = [num1+num2 , num1 - num2 , num1*num2 , Math.floor(num1/num2) , num1%num2]

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

const num3 = Math.floor(Math.random()*result.length);
const number = document.getElementById("number3").innerHTML = result[num3];

// Iteration 5: Creating a randomise function to make the game functional


var score = localStorage.getItem("Score")||0;

function plus(){
    if(num1+num2 == number){
        score++;
        localStorage.setItem("Score",score);
        reload();
    }
    else{
        window.open("gameover.html","_self");
    }
}

function minus(){
    if(num1-num2 == number){
        score++;
        localStorage.setItem("Score",score);
        reload();
    }
    else{
        window.open("gameover.html","_self");
    }
}

function mul(){
    if(num1*num2 == number){
        score++;
        localStorage.setItem("Score",score);
        
        reload();
    }
    else{
        window.open("gameover.html","_self");
    }
}

function div(){
    if(Math.floor(num1/num2) == number){
        score++;
        localStorage.setItem("Score",score);
        
        reload();
    }
    else{
        window.open("gameover.html","_self");
    }
}

function mod(){
    if(num1%num2 == number){
        score++;
        localStorage.setItem("Score",score);
        
        reload();
    }
    else{
        window.open("gameover.html","_self");
    }
}

// Iteration 6: Making the Operators (button) functional
document.getElementById("plus").onclick = function(){
    plus();
};

document.getElementById("minus").onclick = function(){
    minus();
};

document.getElementById("mul").onclick = function(){
    mul();
};

document.getElementById("divide").onclick = function(){
    div();
};

document.getElementById("modulus").onclick = function(){
    mod();
};

function reload(){
    window.location.reload();
}

// Iteration 7: Making Timer functional

var sec = 20;
var timer = setInterval(function() {
    document.getElementById("timer").innerHTML = sec;
    sec--;
    if(sec<0){
        clearInterval(timer);
        window.open("gameover.html","_self");
    }
},1000);
