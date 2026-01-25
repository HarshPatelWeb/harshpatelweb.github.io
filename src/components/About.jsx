import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <span className="section-number">02</span>
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="/images/My Photo.jpg" alt="Harsh Patel" />
              <div className="image-overlay"></div>
            </div>
          </div>
          
          <div className="about-content">
            <p className="about-text">
              A Master's student at the <strong>University of Ottawa</strong>, 
              undertaking the Master of Computer Science with a Concentration in 
              Applied Artificial Intelligence course.
            </p>
            
            <p className="about-text">
              Zealous about Machine-Learning, software engineering with 
              <strong> 1.5+ years of internship experience</strong> specialising 
              in Machine-Learning, python development, algorithms, and software engineering.
            </p>
            
            <div className="about-details">
              <div className="detail-group">
                <h4 className="detail-title">Contact</h4>
                <div className="detail-content">
                  <p><strong>Location:</strong> Ottawa, Ontario, Canada</p>
                  <p><strong>Phone:</strong> <a href="tel:+13435586617">+1-343-558-6617</a></p>
                  <p><strong>Email:</strong> <a href="mailto:hpate158@uottawa.ca">hpate158@uottawa.ca</a></p>
                </div>
              </div>
              
              <div className="detail-group">
                <a 
                  href="https://drive.google.com/file/d/1hU9Nbrz7rtx_pToT3IARneXKeg_Juzw1/view?usp=sharing" 
                  className="cv-button" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
