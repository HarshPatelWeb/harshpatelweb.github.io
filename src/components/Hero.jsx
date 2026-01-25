import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'MACHINE LEARNING ENGINEER'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="grid-bg"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="hero-container">
        {/* Profile Photo - Large and Prominent */}
        <div className="hero-image-section">
          <div className="photo-container">
            <div className="photo-frame">
              <img 
                src="/43073411.jpeg" 
                alt="Harsh Patel" 
                className="hero-photo"
              />
              <div className="photo-border-glow"></div>
            </div>
            <div className="photo-label">
              <span className="label-dot"></span>
              <span>Harsh Patel</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="hero-content-section">
          <div className="hero-badge">
            <span className="badge-line"></span>
            <span>PORTFOLIO 2026</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line-1">HARSH</span>
            <span className="title-line-2">PATEL</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="typewriter-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </div>
          
          <p className="hero-description">
            A <strong>Machine Learning Engineer</strong> with expertise in building and deploying 
            production-grade ML systems. Specialized in MLOps, scalable architectures, and 
            cutting-edge AI solutions.
          </p>

          <p className="hero-description-secondary">
            Passionate about Machine Learning and software engineering with 
            <strong> 3+ years of professional experience</strong> in developing ML models, 
            designing end-to-end pipelines, and deploying intelligent systems to production.
          </p>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="hero-stat-number">3+</div>
              <div className="hero-stat-label">Years</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">6</div>
              <div className="hero-stat-label">Companies</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">10+</div>
              <div className="hero-stat-label">Projects</div>
            </div>
          </div>
          
          <div className="hero-cta">
            <a 
              href="#resume" 
              className="cta-primary"
            >
              View Experience
            </a>
            <a 
              href="#contact" 
              className="cta-secondary"
            >
              Get in Touch
            </a>
          </div>

          <div className="hero-social">
            <a 
              href="https://github.com/harshpatel1242" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/harshpatel1242/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://stackoverflow.com/users/13552752/harsh-patel" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="Stack Overflow"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804H17.24zM7.582 17.8h8.055v-1.604H7.582V17.8zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642-.338 1.553zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454v.01zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero
