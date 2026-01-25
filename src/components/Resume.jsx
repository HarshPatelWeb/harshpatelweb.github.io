import './Resume.css'

const Resume = () => {
  const experiences = [
    {
      company: "Nokia",
      role: "I.T. Developer in A.I. and Cloud",
      period: "September 2023 – April 2024",
      description: [
        "Gained industry experience in applying Artificial Intelligence to address real-world challenges. Executed a successful POC utilizing sequence models like RNN and LSTM to predict WAN alarms in time series analysis, achieving impressive accuracy on a 10 million-row dataset.",
        "Developed dynamic Power BI dashboards and automated tasks with Python scripts and multi-threading for efficient Azure cloud database management."
      ]
    },
    {
      company: "First National",
      role: "Software Automation Engineer (CO-OP)",
      period: "May 2023 – August 2023",
      description: [
        "Developing Python automation scripts to streamlined within the finance and banking industry. Analyzing requirements and tracking test and quality metrics using Azure DevOps"
      ]
    },
    {
      company: "Sonetel Software Services Pvt.Ltd.",
      role: "Software Engineer Intern",
      period: "December 2021 - June 2022",
      description: [
        "Operated on server-side scripting and back-end development of API scripts for the company's website, utilising a variety of scripting languages, including Python, Ruby, Node.js, PHP, JAVA, and Perl.",
        "Built a Python automation script to retrieve data from an Oracle and MongoDB server, then generated a final filtered CSV file using PyMongo and Oracle DB queries.",
        "Accounted with Python and Perl to streamline the process of connecting the company's CRM system to Salesforce and also gained knowledge on Kibana-ElasticSearch server configuration.",
        "Explored technologies such as Spring Boot, Micro-Services, and Apache Kafka."
      ]
    },
    {
      company: "TechCiti Technologies Pvt.Ltd.",
      role: "Data Science Intern",
      period: "November 2020 - January 2021",
      description: [
        "Received training and exposure in data visualisation, SQL databases, and business intelligence.",
        "Formulated different Machine-Learning algorithms like SVM, KNN, and logistic regression.",
        "learned and applied Django to complete certain tasks for the organization's web portal.",
        "Crafted impactful dashboards with a 100% satisfaction rate among stakeholders."
      ]
    }
  ]

  const education = [
    {
      institution: "University of Ottawa",
      degree: "Master of Computer Science (Specialisation in Applied Artificial Intelligence)",
      period: "September 2022-Present"
    },
    {
      institution: "Shah and Anchor Kutchhi Engineering College",
      degree: "Bachelor of Engineering in Information Technology",
      period: "August 2017-June 2021"
    }
  ]

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <span className="section-number">03</span>
        <h2 className="section-title">Experience</h2>
        
        <div className="resume-grid">
          <div className="resume-section">
            <h3 className="resume-section-title">Career</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-company">{exp.company}</h4>
                    <div className="timeline-meta">
                      <span className="timeline-role">{exp.role}</span>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <ul className="timeline-description">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4 className="education-institution">{edu.institution}</h4>
                  <p className="education-degree">{edu.degree}</p>
                  <span className="education-period">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
