import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LatestProject from './components/LatestProject'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-text pixel-text">LOADING...</div>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Resume />
        <LatestProject />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
