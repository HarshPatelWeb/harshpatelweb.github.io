import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">HP</div>
            <p className="footer-tagline">
              Building intelligent systems, one line of code at a time.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Navigation</h4>
              <ul className="footer-list">
                <li><a href="#hero">Home</a></li>
                <li><a href="#resume">Experience</a></li>
                <li><a href="#latest">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Connect</h4>
              <ul className="footer-list">
                <li>
                  <a href="https://github.com/harshpatel1242" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/harshpatel1242/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://stackoverflow.com/users/13552752/harsh-patel" target="_blank" rel="noopener noreferrer">
                    Stack Overflow
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>© {currentYear} Harsh Patel. All rights reserved.</p>
            <button 
              className="back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
