import './Resume.css'

const Resume = () => {
  const experiences = [
    {
      company: "Bally's Interactive",
      role: "Machine Learning Engineer",
      period: "September 2024 - Present",
      duration: "5 mos",
      location: "Toronto, Ontario, Canada · Hybrid",
      type: "Permanent Full-time",
      description: [
        "Architecting and deploying production-grade machine learning models leveraging cutting-edge cloud technologies including AWS SageMaker, Databricks, and AgentCore for scalable AI solutions.",
        "Developing advanced recommender systems and personalization engines using N8N workflow automation to enhance customer segmentation strategies.",
        "Implementing end-to-end ML pipelines with PySpark for large-scale data processing, feature engineering, and model training on AWS infrastructure.",
        "Optimizing model performance and deployment workflows using Docker containerization and AWS Lambda for serverless inference capabilities.",
        "Building and scaling graph RAG (Retrieval-Augmented Generation) systems working with terabytes of data, designing efficient data pipelines for graph database operations and knowledge graph construction."
      ]
    },
    {
      company: "Eon Labs",
      role: "Data Scientist",
      period: "July 2024 - April 2025",
      duration: "10 mos",
      location: "Remote",
      type: "Permanent Full-time",
      description: [
        "Developed and optimized reinforcement learning and deep learning models for high-frequency trading portfolio optimization, achieving 120% higher returns compared to baseline strategies.",
        "Engineered comprehensive ML pipelines encompassing exploratory data analysis, advanced feature engineering (PCA, XGBoost), and model training using SQL and Python, transforming complex financial datasets into actionable production tools.",
        "Integrated large language models and generative AI technologies to extract domain-specific insights and features from unstructured financial documents, enhancing data-driven decision making.",
        "Scaled and deployed models across distributed multi-GPU/CPU clusters using Ray Tune for hyperparameter optimization, Docker for containerization, and MLflow for experiment tracking, ensuring reproducibility and optimal performance.",
        "Collaborated with quantitative traders and engineering teams to translate sophisticated ML strategies into production-ready tools, aligning technical solutions with business objectives and stakeholder requirements.",
        "Built an interactive Streamlit dashboard for real-time portfolio analytics visualization, enabling dynamic monitoring of strategy performance and key financial metrics for stakeholders.",
        "Applied on-policy reinforcement learning algorithms to solve complex portfolio optimization problems, leveraging PyTorch, Stable-Baselines3, and Ray for distributed computing and hyperparameter tuning."
      ]
    },
    {
      company: "Nokia",
      role: "I.T. Developer in Data and Cloud",
      period: "September 2023 - April 2024",
      duration: "8 mos",
      location: "Ottawa, Ontario, Canada",
      type: "Co-op",
      description: [
        "Led the development of a scalable ML/AI proof-of-concept utilizing sequential models (RNN, LSTM) and statistical models (SARIMA) to predict network outages, achieving significant improvements in predictive accuracy.",
        "Conducted comprehensive data analysis, feature engineering, and anomaly detection on multi-source unstructured datasets, implementing robust data cleaning and transformation pipelines for model training.",
        "Designed and implemented an end-to-end MLOps pipeline orchestrating real-time DNS monitoring through Power BI dashboards and optimizing data ingestion workflows into Azure Table Storage.",
        "Optimized script performance achieving 300% efficiency improvement through advanced multithreading techniques, delivering actionable insights to 10+ non-technical stakeholders and substantially enhancing operational effectiveness."
      ]
    },
    {
      company: "First National Financial LP",
      role: "Software Automation Engineer",
      period: "May 2023 - August 2023",
      duration: "4 mos",
      location: "Toronto, Ontario, Canada · On-site",
      type: "Co-op",
      description: [
        "Engineered 50+ automation scripts in Python and JavaScript, leveraging Git version control to enhance testing efficiency by 40% using TestComplete and Selenium frameworks.",
        "Analyzed project requirements and implemented comprehensive quality metrics tracking in Azure DevOps, establishing robust software development lifecycle processes."
      ]
    },
    {
      company: "University of Ottawa",
      role: "Teaching Assistant",
      period: "January 2023 - April 2024",
      duration: "14 mos",
      location: "Ottawa, Ontario, Canada",
      type: "Part-time",
      description: [
        "Instructed and mentored students in Programming Paradigms (CSI 2120), facilitating understanding of advanced programming concepts and software engineering principles.",
        "Developed and delivered educational materials, conducted lab sessions, and provided technical support to enhance student learning outcomes."
      ]
    },
    {
      company: "Sonetel Software Services",
      role: "Python/A.I. Intern",
      period: "December 2021 - June 2022",
      duration: "7 mos",
      location: "Hyderabad, Telangana, India",
      type: "Internship",
      description: [
        "Managed server-side Node.js API operations and developed Python automation scripts for efficient data retrieval and processing.",
        "Gained expertise in MongoDB, Apache Kafka, Postman API testing, ElasticSearch, and Docker containerization technologies."
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
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">EXPERIENCE</span>
          <h2 className="section-title">Career Journey</h2>
        </div>

        <div className="resume-content">
          <div className="experience-section">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div className="experience-main">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="role-name">{exp.role}</h4>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-badge">{exp.type}</div>
                    <div className="period">{exp.period}</div>
                    <div className="duration">{exp.duration}</div>
                    <div className="location">{exp.location}</div>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="education-section">
            <h3 className="education-title">Education</h3>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
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
