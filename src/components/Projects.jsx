import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "DNS Exfiltration Attack Classification",
      category: "Machine Learning",
      image: "/images/cybersecurity.png",
      description: "A dynamic machine learning model was developed that can retrain itself based on online streaming data from Docker through Kafka. The model uses a sliding window technique to retrain itself if the F1 score falls below a certain threshold, and continues to do so until the end of the data stream. Data pre-processing tasks such as cleansing, upsampling, downsampling, and scaling were also performed.",
      tech: ["Python", "Kafka", "Docker", "ML"],
      link: "https://github.com/harshpatel1242/DNS-Exfiltration-attack-classification-ML-model"
    },
    {
      id: 2,
      title: "Face Recognition System",
      category: "Computer Vision",
      image: "/images/haarFace.png",
      description: "A program was developed that can recognize faces and report accuracy in percentages. The program used openCV's haar-cascade method and a classification algorithm to detect and analyze face structure. The performance of the algorithm was evaluated using hypertuning, and SVM was chosen as the best technique for the image classification project due to its precision and overall performance.",
      tech: ["Python", "OpenCV", "SVM", "ML"],
      link: "https://github.com/harshpatel1242/Image_classification"
    },
    {
      id: 3,
      title: "Data Extraction and Text Analysis",
      category: "NLP",
      image: "/images/text.png",
      description: "A natural language processing (NLP) application was created to extract text from URLs contained in a CSV file, and then perform text analysis to calculate a range of variables. These variables included measures such as the positive and negative sentiment scores, the FOG Index, and the number of syllables per word. Altogether, there were 14 variables calculated by the application.",
      tech: ["Python", "NLP", "Sentiment Analysis"],
      link: "https://github.com/harshpatel1242/Data-Extraction-and-Text-Analysis"
    },
    {
      id: 4,
      title: "Appraisal Management System",
      category: "Web Development",
      image: "/images/appraisal.png",
      description: "A system was developed to allow employees to request appraisals, which are reviewed by higher authorities based on the employee's work history. The system uses a common database with cross-validation credentials and the Google Auth API for login and sign-up. Access to the portal is granted on a per-employee basis, with different levels of accessibility. The system also includes a machine learning model to detect an employee's overall performance score and display it using the Charts.js library.",
      tech: ["PHP", "MySQL", "Python", "ML", "Web"],
      link: "https://www.youtube.com/watch?v=w3buecJP1uI&ab_channel=HarshPatel"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <span className="section-number">04</span>
        <h2 className="section-title">Selected Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="view-project">View Project</span>
                </div>
              </div>
              <div className="project-card-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-card-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-info">
                <span className="modal-category">{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.description}</p>
                
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
