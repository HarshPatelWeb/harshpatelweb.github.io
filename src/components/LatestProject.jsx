import './LatestProject.css'

const LatestProject = () => {
  return (
    <section id="latest" className="latest-project">
      <div className="latest-container">
        <span className="section-number">01</span>
        <h2 className="section-title">Latest Project</h2>
        
        <div className="project-showcase">
          <div className="project-video">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/pqBrzDNox1U"
                title="MLOps Deployment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="project-info">
            <h3 className="project-title">MLOps Deployment on AWS</h3>
            <p className="project-description">
              A comprehensive MLOps pipeline implementing industry best practices 
              with MLflow, DVC, Docker, and AWS cloud infrastructure. Features 
              automated model training, versioning, and deployment workflows.
            </p>
            
            <div className="project-tech">
              <span className="tech-tag">MLflow</span>
              <span className="tech-tag">DVC</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Python</span>
            </div>
            
            <div className="project-links">
              <a 
                href="https://github.com/harshpatel1242/MLOps_Deployment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </a>
              <a 
                href="https://dagshub.com/harshpatel1242/MLOps_Deployment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                View on DagsHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestProject
