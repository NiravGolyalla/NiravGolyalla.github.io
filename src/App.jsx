import { useState } from 'react'
import './styles/App.css'
import Navbar from './Components/Navbar'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* Navbar */}
      <Navbar/>
      {/* Hero Section */}      
      <div className='hero'>
          <div className='hero_container'>
            <h1 className='hero_title'>Nirav Golyalla</h1>
            <h2 className='hero_blurb'>Software Engineer</h2>
          </div>
      </div>
      <div>About Me Section</div>
      <div>Experience Section</div>

      <h1>Test Title1</h1>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default App
