import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0) // useState will have default value
  // we pass the value counter then func name used here is setCounter.. we can use any name

  // let counter = 5
 
  const addValue = () =>{
    // console.log("Hello");
    // counter++
    setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
