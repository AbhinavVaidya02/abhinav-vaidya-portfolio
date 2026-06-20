import './Projects.css'

const projects = [
  {
    title: 'Campaign Performance Intelligence Engine',
    description:
      'A data intelligence platform that unifies campaign metrics and improves ROI through automated recommendations and root-cause analysis powered by LLMs.',
    points: [
      'Built using Python (Pandas), PostgreSQL, and APIs to unify data across sources.',
      'Developed a RAG-based pipeline integrating FAISS and LLMs to analyze metrics, benchmarks, and past insights.',
      'Architected a scalable vector search system to automate KPI calculations and root-cause analysis.',
    ],
    stack: ['Python', 'Pandas', 'PostgreSQL', 'FAISS', 'LLMs', 'RAG', 'REST APIs'],
    category: 'AI / Data Engineering',
  },
  {
    title: 'Document Extractor',
    description:
      'An intelligent document processing system that extracts structured data from unstructured PDFs using Google Gemini and provides a conversational Q&A interface via RAG.',
    points: [
      'Engineered an automated extraction pipeline using Google Gemini with precision prompt design.',
      'Implemented a Gemini-powered RAG chatbot for intelligent, conversational Q&A on document content.',
    ],
    stack: ['Python', 'Google Gemini', 'RAG', 'LLMs', 'Prompt Engineering', 'PDF Parsing'],
    category: 'GenAI',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">04. Projects</p>

        <div className="projects__grid">
          {projects.map(proj => (
            <div key={proj.title} className="card">
              <p className="project-card__category">{proj.category}</p>
              <h3 className="project-card__title">{proj.title}</h3>
              <p className="project-card__desc">{proj.description}</p>
              <ul className="project-card__bullets">
                {proj.points.map((pt, i) => (
                  <li key={i}>
                    <span className="project-card__arrow">▹</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="project-card__stack">
                {proj.stack.map(t => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
