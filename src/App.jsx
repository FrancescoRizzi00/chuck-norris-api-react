import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Styles/App.css'
import Button from './Components/Button'


function App() {
  const [count, setCount] = useState(0)

  const [joke, setJoke] = useState("")

  return (
    <div className='App'>
      <h1>Benvenuti</h1>
      <p>Sito Chuck</p>
      <div id='contenutoJoke'>
        <button onClick={() => setCount((count) => count+1)}>
          count is {count}
        </button>

    <Button text="carica il joke"></Button>
    <Button text="copia"></Button>


      </div>
    </div>
  )
}

export default App
