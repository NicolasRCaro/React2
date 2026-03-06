import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Estado from './Estado'
import String from './String'
import Booleano from './Booleano'
import Lista from './Lista'

function App() {


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Estado/>
        <String/>
        <Booleano/>
        <Lista/>
      </div>
    </>
  )
}

export default App
