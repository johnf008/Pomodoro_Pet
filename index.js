const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

const timer = document.getElementById("timer");

const levelEl = document.getElementById("level");
const pomodorosEl = document.getElementById("pomodoros");

let interval;
let remainingTime = 1500;
let intervalCheck = false;

let pomodoros;
let levels; 
let leftSide = "";
let rightSide = "";
let char;
let rightSideCheck = false;

let sections; 

function updateTimer(){
    let mins = Math.floor(remainingTime / 60);
    let secs = remainingTime % 60;

    mins = mins.toString();
    secs = secs.toString();

    if (mins.length < 2){
        mins = "0" + mins;
        
    }

    if (secs.length < 2){
        secs = "0" + secs;
    }

    let newTime = mins + ":" + secs;

    timer.innerHTML = newTime;
}

function updateLevel(){
    pomodoros = pomodorosEl.innerHTML;
    levels = levelEl.innerHTML; 

    levels = parseInt(levels);
    //sections = pomodoros.split("/");

    //leftSide = sections[0]
    //rightSide = sections[1]

    for (let i = 0; i < pomodoros.length; i++){
        char = pomodoros.charAt(i);
        console.log("Char: " + char);

        if(char === "/" || rightSideCheck){
            if(rightSideCheck){
                rightSide += char.toString();
            }
            else{
                rightSideCheck = true
            }
        }
        else{
            leftSide += char.toString();
        }
        console.log("Left: "+ leftSide);
        console.log("Right: " + rightSide);
    }

        leftSide = parseInt(leftSide);
        rightSide = parseInt(rightSide);

        leftSide += 1; 

        if (leftSide / rightSide === 1){
            leftSide = 0;
            rightSide += 1; 

            levels += 1; 

            leftSide = leftSide.toString();
            rightSide = rightSide.toString();
            levels = levels.toString();


            levelEl.innerHTML = levels;
            pomodorosEl.innerHTML = leftSide + "/" + rightSide;
        }
    
}
function startTimer(){
    if(intervalCheck) return;
    document.getElementById("cat_image").src = "images/studious_cat.png";
    intervalCheck = true;
    startEl.disabled = true; 
    interval = setInterval(()=>{
        remainingTime = remainingTime - 1;
        updateTimer();

        if(remainingTime === 0){
            clearInterval(interval);
            
            setTimeout(()=> {
            alert("Time's up! Take a break!");
            remainingTime = 1500;
            intervalCheck = false;
            startEl.disabled = false;
            updateLevel();
            document.getElementById("cat_image").src = "images/rest_cat.jpg";
            }, 0);
        }
    }, 1000)
}

function stopTimer(){
    if (!intervalCheck) return;
    clearInterval(interval);
    intervalCheck = false;
    startEl.disabled = false; 
    
}

function resetTimer(){
    clearInterval(interval);
    remainingTime = 1500;
    intervalCheck = false;
    startEl.disabled = false; 
    updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
