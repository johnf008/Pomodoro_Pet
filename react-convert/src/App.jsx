import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-red-700 flex flex-col items-center min-h-screen">
    <div className="h-[50px] flex items-center text-white w-[80%] border-[2px] px-10">
        <img className="min-h-[50px] text-2xl font-bold" src="images/logo.png"/>
        <div className="grow flex justify-end">
            <a href="https://github.com/johnf008/Pomodoro_Pet.git">Github</a>
        </div>
    </div>
    
    <div className="flex-1 flex items-center justify-center mt-6">

    <div className=" text-red-950 font-bold text-center">
        <div className="min-h-[50px] text-3xl ">Pomodoro Pets</div>
        <div className="min-h-[100px] text-9xl" id="timer">25:00</div>

        

        <div className="mt-3">
            <button className="mx-2 cursor-pointer text-white bg-green-500 hover:bg-green-400 py-2 px-4 border-b-4 border-gray-50 hover:border-gray-100 rounded" id="start">Start</button>
            <button className="mx-2 cursor-pointer text-white bg-red-500 hover:bg-red-400 py-2 px-4 border-b-4 border-gray-50 hover:border-gray-100 rounded" id="stop">Stop</button>
            <button className="mx-2 cursor-pointer text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 border-b-4 border-gray-50 hover:border-gray-100 rounded" id="reset">Reset</button>
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
    </div>
    </>
  )
}

export default App
