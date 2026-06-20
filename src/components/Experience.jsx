import './Experience.css'

const experience = [
  {
    company: 'Flairminds Softwares Pvt. Ltd.',
    role: 'Python Developer',
    period: 'June 2023 – Present',
    projects: [
      {
        name: 'Automated Financial Portfolios',
        points: [
          'Architected backend services achieving a 25% reduction in portfolio calculation time and 20% improvement in data accuracy.',
          'Designed and deployed scalable Flask APIs using PostgreSQL to enhance accessibility for end-users.',
          'Engineered adaptable calculation logic using Pandas and NumPy, improving code reusability by over 30%.',
          'Directed CI/CD pipeline using GitHub Actions, reducing deployment time by 50% with Azure App Services.',
        ],
        stack: ['Python', 'Flask', 'PostgreSQL', 'Pandas', 'NumPy', 'GitHub Actions', 'Azure'],
      },
      {
        name: 'Data Ingestor',
        points: [
          'Built a scalable ETL pipeline using Flask, PostgreSQL, and Azure Blob Storage, boosting processing speed by 40%.',
          'Integrated SerpApi and Gemini LLM to automate data retrieval, cutting manual effort by 50% and improving accuracy by 45%.',
          'Created a Neo4j knowledge graph of 1000+ financial institutions enabling complex relationship analysis.',
          'Designed normalized PostgreSQL schemas and optimized SQL queries for high-volume data ingestion.',
        ],
        stack: ['Flask', 'PostgreSQL', 'Azure Blob Storage', 'SerpApi', 'Gemini LLM', 'Neo4j'],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">03. Experience</p>

        {experience.map(job => (
          <div key={job.company}>
            <div className="exp__company-header">
              <h3 className="exp__role">{job.role}</h3>
              <p className="exp__company-name">{job.company}</p>
              <p className="exp__period">{job.period}</p>
            </div>

            <div className="exp__list">
              {job.projects.map(proj => (
                <div key={proj.name} className="card">
                  <p className="exp__project-name">{proj.name}</p>
                  <ul className="exp__bullets">
                    {proj.points.map((pt, i) => (
                      <li key={i}>
                        <span className="exp__arrow">▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="exp__stack">
                    {proj.stack.map(t => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
