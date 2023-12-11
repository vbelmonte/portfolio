import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { SkillsExpertise } from './components/SkillsExpertise'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <About />
        <Projects />
        <SkillsExpertise />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
