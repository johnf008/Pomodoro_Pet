import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Leveling from './components/Leveling'

function App() {
  return (
    <>
    <div className="bg-red-700 flex flex-col items-center justfy min-h-screen ">
        <Header/>
        <div className="flex flex-row">
          <Home/>
          <Leveling/>
        </div>
    </div>
    </>
  )
}

export default App
