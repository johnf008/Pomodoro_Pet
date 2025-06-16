import React, {useRef, useState, useEffect} from "react";

function Home() {

    const initialTime = 1500;
    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, updateTime] = useState(initialTime);
    const intervalIdRef = useRef(null);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                updateTime(remainingTime => remainingTime - 1);

            },1000);
                }
        
        return () => {
            clearInterval(intervalIdRef.current);
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

    <div className="text-red-950 font-bold text-center m-8 w-80">
        <img className="object-top mx-auto block max-w-[220px] h-auto border-4" src="images/studious_cat.png" id="cat_image"/>

        <div className="min-h-[50px] text-3xl">Level:</div>
        <div className="min-h-[50px] text-3xl" id="level">1</div>

        <div className="min-h-[50px] text-2xl">Pomodoros: </div>
        <div className="min-h-[50px] text-2xl" id="pomodoros">0/1</div>
    </div>
    </div>
    </>
    )
}

export default Home; 