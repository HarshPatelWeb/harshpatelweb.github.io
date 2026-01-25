import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <span className="section-number">05</span>
        <h2 className="section-title">Let's Connect</h2>
        
        <div className="contact-content">
          <div className="contact-text">
            <p className="contact-quote">
              "Although these details alone don't give a complete picture of who I am, 
              let's talk and get to know each other better."
            </p>
          </div>
          
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-details">
                <h4 className="contact-label">Email</h4>
                <a href="mailto:hpate158@uottawa.ca" className="contact-value">
                  hpate158@uottawa.ca
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-details">
                <h4 className="contact-label">Phone</h4>
                <a href="tel:+13435586617" className="contact-value">
                  +1-343-558-6617
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-details">
                <h4 className="contact-label">Location</h4>
                <span className="contact-value">Ottawa, Ontario, Canada</span>
              </div>
            </div>
            
            <a href="mailto:hpate158@uottawa.ca" className="contact-button">
              <span>Let's Talk</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
