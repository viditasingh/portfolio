import NavBar from './components/NavBar.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Experience from './sections/Experience.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import AppShowcase from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'

function App() {

  return (
    <>
      <NavBar />
      <Hero/>
      <AppShowcase/>
      <FeatureCards/>
      <Testimonials/>
      <TechStack/>
      <Experience/>
      <About/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App
