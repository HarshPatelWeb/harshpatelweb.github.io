import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LatestProject from './components/LatestProject'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-line"></div>
          <div className="loader-text">HARSH PATEL</div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <LatestProject />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
