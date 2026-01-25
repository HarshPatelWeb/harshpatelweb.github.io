import './Professional.css'

const Professional = () => {
  const videos = [
    {
      id: 'professional1',
      title: 'MLOps Deployment on AWS',
      youtubeId: 'pqBrzDNox1U', // Your existing MLOps video
      description: 'A comprehensive MLOps pipeline implementing industry best practices with MLflow, DVC, Docker, and AWS cloud infrastructure.'
    }
    // Add more professional videos here
  ]

  return (
    <section id="professional" className="professional-section">
      <div className="grid-bg"></div>
      <div className="professional-container">
        <span className="section-number">01</span>
        <h2 className="section-title neon-cyan">PROFESSIONAL WORK</h2>
        
        <div className="professional-content">
          <div className="professional-intro terminal">
            <div className="terminal-header">
              <span className="terminal-prompt">$</span>
              <span className="terminal-text">cat professional_info.txt</span>
            </div>
            <div className="intro-text">
              <p>
                <span className="neon-cyan">&gt;</span> Building and deploying ML models using cutting-edge technologies.
                <br />
                <span className="neon-cyan">&gt;</span> Specializing in AWS Sagemaker, Databricks, MLflow, and MLOps pipelines.
              </p>
            </div>
          </div>

          <div className="videos-grid">
            {videos.map((video) => (
              <div key={video.id} className="terminal video-card">
                <div className="terminal-header">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-text">play {video.title.toLowerCase().replace(/\s+/g, '_')}.mp4</span>
                </div>
                
                <div className="video-info">
                  <h3 className="video-title neon-magenta">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                </div>
                
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Professional
