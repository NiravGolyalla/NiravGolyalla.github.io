import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Test Title1</h1>
      <button onClick={() => setCount((prevCount) => prevCount -1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default App
