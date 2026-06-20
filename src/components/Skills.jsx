import './Skills.css'

const skillGroups = [
  {
    category: 'Backend',
    skills: ['Python', 'Flask', 'Django', 'FastAPI', 'SQLAlchemy', 'Pandas', 'NumPy', 'Java'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'Neo4j', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'GenAI Tools',
    skills: ['LLMs', 'RAG', 'Prompt Engineering', 'Vector Databases', 'FAISS', 'Gemini'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Azure App Services', 'Azure Blob Storage', 'GitHub Actions', 'Docker', 'Git'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">02. Skills</p>

        <div className="skills__groups">
          {skillGroups.map(group => (
            <div key={group.category} className="skills__group">
              <span className="skills__group-name">{group.category}</span>
              <div className="skills__pills">
                {group.skills.map(skill => (
                  <span key={skill} className="pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
