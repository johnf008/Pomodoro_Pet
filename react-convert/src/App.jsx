import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <>
    <div className="bg-red-700 flex flex-col items-center min-h-screen">
        <Header/>
        <Home/>
    </div>
    </>
  )
}

export default App
