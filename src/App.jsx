import NavBar from './components/NavBar.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import AppShowcase from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'

function App() {

  return (
    <>
      <NavBar />
      <Hero/>
      <AppShowcase/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
      <About/>
    </>
  )
}

export default App
