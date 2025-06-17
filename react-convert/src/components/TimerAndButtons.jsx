import React, {useRef, useState, useEffect} from "react";

function TimerAndButtons({onTimerFinish}) {

    const initialTime = 10;
    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, updateTime] = useState(initialTime);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        if(isRunning && intervalIdRef.current === null){
            intervalIdRef.current = setInterval(() => {
                updateTime(prevTime => {
                if(prevTime == 0) {
                    console.log("ur true!");
                    alert("Time's up! Take a break!");
                    setIsRunning(false);

                    if (onTimerFinish){
                        onTimerFinish();
                    }

                    return 1500;

                } else {
                    console.log("else");
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
        <div className="min-h-[50px] text-3xl ">Pomodoro Pets</div>
        <div className="min-h-[100px] text-9xl" id="timer">{formatTime()}</div>

        <div className="mt-3">
            <button onClick={start} className="mx-2 cursor-pointer text-white bg-green-500 hover:bg-green-400 py-2 px-4 border-b-4 border-gray-50 hover:border-gray-100 rounded">Start</button>
            <button onClick={stop}className="mx-2 cursor-pointer text-white bg-red-500 hover:bg-red-400 py-2 px-4 border-b-4 border-gray-50 hover:border-gray-100 rounded">Stop</button>
            <button onClick={reset} className="mx-2 cursor-pointer text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 border-b-4 border-gray-50 hover:border-gray-100 rounded">Reset</button>
        </div>
    </div>

   
    </div>
    </>
    )
}

export default TimerAndButtons; 