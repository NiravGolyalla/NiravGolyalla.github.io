import { useState } from 'react'
import './styles/App.css'
import Navbar from './Components/Navbar'
import DisplayComponent from "./Components/DisplayComponent"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <div className='hero'>
        <div className='hero_container'>
          <h1 className='hero_title'>Nirav Golyalla</h1>
          <h2 className='hero_blurb'>Software Engineer</h2>
        </div>
      </div>
      <div className='subsection' id='about'>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='subsection' id='experience'>
        <h2>Experience</h2>
        <div className='experience_container'>
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
        </div>
      </div>
      <div className='subsection' id=''>
        <h2>Projects</h2>
        <div className='experience_container'>
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
          <DisplayComponent img="assets/smple.png" title="AmongUs" text="sus" />
        </div>
      </div>
      <div >
        <h2>Contact Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

export default App
