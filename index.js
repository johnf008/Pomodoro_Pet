const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

const timer = document.getElementById("timer");

let interval;
let remainingTime = 10;
let intervalCheck = false;

function updateTimer(){
    let mins = Math.floor(remainingTime / 60);
    let secs = remainingTime % 60;

    mins = mins.toString();
    secs = secs.toString();

    if (mins.length < 2){
        console.log((mins.toString).length);
        mins = "0" + mins;
        
    }

    if (secs.length < 2){
        console.log(secs.length);
        secs = "0" + secs;
    }

    let newTime = mins + ":" + secs;

    timer.innerHTML = newTime;
}
function startTimer(){
    if(intervalCheck) return;

    intervalCheck = true;
    startEl.disabled = true; 
    interval = setInterval(()=>{
        updateTimer();
        remainingTime = remainingTime - 1;
        if(remainingTime === 0){
            clearInterval(interval);
            alert("Time's up! Take a break!");
            remainingTime = 1500;
            intervalCheck = false;
            startEl.disabled = false;
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