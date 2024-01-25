import Navbar from './Components/Navbar'
import ExperienceList from "./Components/ExperienceList"
import ProjectList from "./Components/ProjectList"
import Hero from './Components/Hero'
import Section from './Components/Section'
import Contact from './Components/Contact'



const App = () => {
  return (
    <div className='App' id="hero">
      <Navbar />
      <Hero/>
      <Section id="experience">
        <h2>About me</h2>
        <div>
          <p>Hello, I am Nirav Golyalla, a software engineer with a focus in machine learning and an interest in game development.</p>
        </div>
      </Section>
      <Section id="experience">
        <h2>Experience</h2>
        <ExperienceList />
      </Section>
      <Section>
        <h2>Projects</h2>
        <ProjectList/>
      </Section>
      <Contact/>
    </div>

  )
}

export default App
