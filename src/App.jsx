import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimerAndButtons from './components/TimerAndButtons'
import Header from './components/Header'
import Leveling from './components/Leveling'

function App() {
  

  const [levels, setLevels] = useState(1);
  const [pomodoros, setPomodoros] = useState("0/1");
  const [imgSrc, updateImage] = useState("/Pomodoro_Pet/images/studious_cat.png");

  function handleLevelUp(pomodoros) {
    let [numerator, denominator] = decodePomodoro(pomodoros);

    numerator = parseInt(numerator);
    denominator = parseInt(denominator);

    //console.log(typeof numerator);
    //console.log(typeof denominator);
    //console.log(numerator / denominator);

    numerator += 1;
    if (numerator / denominator === 1){
      setLevels(prev => prev + 1);
      //console.log("Levels: " + levels);
      setPomodoros("0/" + (levels + 1).toString());
    }
    else {
      setPomodoros(`${numerator}/${denominator}`);
    }

  }

  function decodePomodoro(pomodoros){
    let leftSide = "";
    let rightSide = "";
    let char;
    let rightSideCheck = false;
    for (let i = 0; i < pomodoros.length; i++){
        char = pomodoros.charAt(i);
        //console.log("Char: " + char);

        if(char === "/" || rightSideCheck){
            if(rightSideCheck){
                rightSide += char.toString();
            }
            else{
                rightSideCheck = true;
            }
        }
        else{
            leftSide += char.toString();
        }
        //console.log("Left: "+ leftSide);
        //console.log("Right: " + rightSide);
    }

        leftSide = parseInt(leftSide);
        rightSide = parseInt(rightSide);
        return [leftSide, rightSide];

  }

  function changeDaImage() {
    console.log("chat, is this function even running??");

    console.log("Img src b4 the function " + imgSrc);

    if(imgSrc == "images/studious_cat.png"){
      updateImage("/Pomodoro_Pet/images/rest_cat.jpg");
    }
    else if (imgSrc == "images/rest_cat.jpg") {
      updateImage("/Pomodoro_Pet/images/studious_cat.png");
    } 
    else {
       updateImage("/Pomodoro_Pet/images/studious_cat.png");
    }

    console.log("Img src after the function " + imgSrc);
  }
  

  return (
    <>
    <div className="bg-red-700 flex flex-col items-center justfy min-h-screen font-Yuruka">
        <Header/>
        <div className="flex flex-row">
          <TimerAndButtons onTimerFinish={() => handleLevelUp(pomodoros)} changeImage={changeDaImage}/>
          <Leveling level={levels} pomodoros={pomodoros} image={imgSrc}/>
        </div>
    </div>
    </>
  )
}

export default App
