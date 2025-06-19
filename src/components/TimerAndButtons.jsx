import React, {useRef, useState, useEffect} from "react";

function TimerAndButtons({onTimerFinish}) {

    const initialTime = 5;
    const [sbCount, updateSBCount] = useState(0);

    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, updateTime] = useState(initialTime);

    const [resetVisible, updateReset] = useState(true);

    const [stageState, updateStage] = useState("short");

    const intervalIdRef = useRef(null);

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
            setIsRunning(false);
            alert("Take a break!!");

            if (onTimerFinish){
                onTimerFinish();
            }

            if (sbCount > 4){
                updateStage("long");
            }
            else if (stageState == "lockin") {
                updateStage("short");
            }
            else if (stageState == "short" || stageState == "long"){
                updateStage("lockin");
            }
            
            if (stageState == "short"){
                updateSBCount(prev => prev + 1); 

                updateTime(3);

                updateReset(false);
                console.log("Small Break Time")
            } 
            else if (stageState == "long") {
                updateTime(9);
                updateSBCount(0);
                updateReset(false);
                console.log("Long Break Time");
            } 
            else if (stageState == "lockin") {
                updateTime(5);
                updateReset(true);
                console.log("Lock in time");
            }
            

            setIsRunning(true);
            console.log(sbCount);

        }
    }, [remainingTime, isRunning, onTimerFinish]);
    
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
        <img className="w-96" src="images/title_image.png"/>
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