import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () =>{
    setCount((prev) => prev+1);
  }

  const handleDecrement = () =>{
    setCount((prev) => prev-1);
  }

  const handleReset = () =>{
    setCount(0);
  }

  return (
    <div className='container'>
      <h1>{count}</h1>
      <div className='button_container'>
        <button onClick={handleIncrement} aria-label="Increment">Increment</button>
        <button onClick={handleDecrement} aria-label="Decrement" disabled={count <= 0}>Decrement</button>
        <button onClick={handleReset} aria-label="Reset">Reset</button>
      </div>
    </div>
  )
}

export default App
