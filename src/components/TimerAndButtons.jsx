import React, {useRef, useState, useEffect} from "react";

function TimerAndButtons({onTimerFinish, changeImage}) {

    const initialTime = 5;
    const [sbCount, updateSBCount] = useState(1);

    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, updateTime] = useState(initialTime);

    const [resetVisible, updateReset] = useState(true);

    const [stageState, updateStage] = useState("short");

    const intervalIdRef = useRef(null);

    let meowSound = new Audio("sounds/meow.mp3");

    useEffect(() => {
        if(isRunning && intervalIdRef.current === null){
            intervalIdRef.current = setInterval(() => {
                updateTime(prevTime => {
                if(prevTime > 0) {
                    //console.log("else");
                    return (prevTime - 1);
                }
                });
            },1000);
        }
        
        return () => {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        }

    }, [isRunning]);

    useEffect(() => {
        if (remainingTime === 0 && isRunning){
            meowSound.play();
            setIsRunning(false);

            let nextStage = stageState; 
            let nextSBCount = sbCount; 

            if (sbCount >= 4 && stageState == "lockin"){
                console.log("The sbCount should be 4, but its " + sbCount);
                nextStage = "long";
                nextSBCount = 0;
            }
            else if (stageState == "lockin") {
                nextStage = "short";
            }
            else if (stageState == "short" || stageState == "long"){
                nextStage = "lockin";
            }

            if (onTimerFinish && nextStage == "lockin"){
                onTimerFinish();
            }

            if(changeImage){
                changeImage();
            }

            updateSBCount(nextSBCount);
            updateStage(nextStage);
            
            if (stageState == "short"){
                updateTime(300);
                updateReset(false);
                console.log("Small Break Time")
            } 
            else if (stageState == "long") {
                updateTime(900);
                updateReset(false);
                console.log("Long Break Time");
            } 
            else if (stageState == "lockin") {
                updateTime(1500);
                updateReset(true);
                nextSBCount += 1; 
                console.log("Lock in time");
                updateSBCount(nextSBCount); 
            }
            

            console.log(sbCount);

        }
    }, [remainingTime, isRunning, onTimerFinish, changeImage]);
    
    function start() {
        setIsRunning(true);
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        updateTime(1500);
        setIsRunning(false);
    }

    function formatTime(){
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
        return `${mins}:${secs}`;
    }


    
    return (
    <>
    <div className="flex-1 flex items-center justify-center mt-6">

    <div className=" text-red-950 font-bold text-center">
        <img className="w-96" src="/Pomodoro_Pet/images/title_image.png"/>
        <div className="min-h-[100px] text-9xl" id="timer">{formatTime()}</div>

        <div className="mt-3">
            <button onClick={start} className="mx-2 cursor-pointer text-white bg-green-500 hover:bg-green-400 py-2 px-4 border-b-4 border-gray-50 hover:border-gray-100 rounded">Start</button>
            <button onClick={stop}className="mx-2 cursor-pointer text-white bg-red-500 hover:bg-red-400 py-2 px-4 border-b-4 border-gray-50 hover:border-gray-100 rounded">Stop</button>
            {resetVisible && <button onClick={reset} className="mx-2 cursor-pointer text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 border-b-4 border-gray-50 hover:border-gray-100 rounded">Reset</button>}
        </div>
    </div>

   
    </div>
    </>
    )
}

export default TimerAndButtons; 