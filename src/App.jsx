import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Platforms from './Components/Platforms/Platforms'
import Projects from './Components/Projects/Projects'
import Terminal from './Components/Terminal/Terminal'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => (
  <>
    <NavBar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Platforms />
      <Projects />
      <Terminal />
      <Contact />
    </main>
    <Footer />
  </>
)
export default App
