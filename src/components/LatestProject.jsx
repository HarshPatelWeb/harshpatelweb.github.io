import './LatestProject.css'

const LatestProject = () => {
  return (
    <section id="latest" className="latest-project">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">FEATURED</span>
          <h2 className="section-title">Latest Project</h2>
          <p className="section-subtitle">
            MLOps pipeline showcasing industry best practices
          </p>
        </div>

        <div className="project-card">
          <div className="project-media">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/pqBrzDNox1U"
                title="MLOps Deployment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="project-details">
            <div className="project-header">
              <h3 className="project-title">MLOps Deployment on AWS</h3>
              <div className="project-meta">
                <span className="meta-item">2024</span>
                <span className="meta-divider">•</span>
                <span className="meta-item">MLOps</span>
              </div>
            </div>
            
            <p className="project-description">
              A comprehensive MLOps pipeline implementing industry best practices 
              with MLflow, DVC, Docker, and AWS cloud infrastructure. Features 
              automated model training, versioning, and deployment workflows.
            </p>
            
            <div className="project-tech">
              <span className="tech-badge">MLflow</span>
              <span className="tech-badge">DVC</span>
              <span className="tech-badge">AWS</span>
              <span className="tech-badge">Docker</span>
              <span className="tech-badge">Python</span>
            </div>
            
            <div className="project-actions">
              <a 
                href="https://github.com/harshpatel1242/MLOps_Deployment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View on GitHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <a 
                href="https://dagshub.com/harshpatel1242/MLOps_Deployment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                View on DagsHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestProject
