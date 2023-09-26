import Navbar from './Components/Navbar'
import ExperienceList from "./Components/ExperienceList"
import ProjectList from "./Components/ProjectList"
import Hero from './Components/Hero'
import Section from './Components/Section'



const App = () => {
  return (
    <div className='App' id="hero">
      <Navbar />
      <Hero/>
      <Section id="experience">
        <h2>Experience</h2>
        <ExperienceList />
      </Section>
      <Section>
        <h2>Projects</h2>
        <ProjectList/>
      </Section>
      <Section id="contact">
        <h2>Contact Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Section>

    </div>

  )
}

export default App
