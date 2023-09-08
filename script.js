function bubbleMaker(){
var clutter = "";
let randomNumber = 0;
for(var i=1; i<=180; i++){
    randomNumber = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${randomNumber}</div>`
}
document.querySelector("#bubbleBox").innerHTML = clutter;
}

bubbleMaker();

score = 0;
function ScoreIncrease(){
    score +=10
    document.querySelector(".Scoreval").textContent = score;
} 

function NewHit(){
    randomNumber = Math.floor(Math.random()*10);
    document.querySelector(".Hit").textContent = randomNumber;
}

NewHit();

var timer = "60";
function runTimer() {
    var TimerInt =  setInterval(function(){
    if(timer > 0){
            timer --;
            document.querySelector(".Timer").textContent = timer;
        }else{
            clearInterval(TimerInt);
            document.querySelector("#bubbleBox").innerHTML= `<h1>Game Over </h1><h5> To Play agin Refresh The page </h5>`;
        }
    },1000)
}
    
runTimer();

document.querySelector("#bubbleBox").addEventListener("click",function(dets){
    var clickNum =  (Number(dets.target.textContent));
    if(clickNum === randomNumber){
        ScoreIncrease();
        bubbleMaker();
        NewHit();
    }

})

