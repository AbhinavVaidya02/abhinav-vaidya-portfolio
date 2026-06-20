import './About.css'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '4',  label: 'Key Projects' },
  { value: '1',  label: 'Award Won' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-label">01. About</p>

        <div className="about__grid" style={{ marginTop: '0' }}>
          <div className="about__text">
            <p>
              I&apos;m a <span className="about__accent">Python Developer</span> currently working at
              <span className="about__accent"> Flairminds Softwares Pvt. Ltd.</span> in Pune, where I build
              scalable backend systems, REST APIs, and intelligent data pipelines.
            </p>
            <p>
              My core focus is <span className="about__accent">backend engineering</span> — architecting ETL pipelines,
              financial portfolio engines, and high-performance REST APIs. Alongside that, I have hands-on
              experience working with <span className="about__accent">GenAI tools</span> such as LLMs, RAG pipelines,
              FAISS, and Gemini — leveraging them as part of larger backend solutions.
            </p>
            <p>
              I hold an <span className="about__accent">M.Sc. in Computer Applications</span> from Fergusson College
              (Pune University) and have been recognised as <span className="about__accent">Employee of the Quarter</span> at
              Flairminds for delivering reliable, high-impact backend systems.
            </p>
            <p>
              Outside of code, I enjoy experimenting with new frameworks, deepening my understanding of
              system design, and continuously sharpening my problem-solving skills.
            </p>
          </div>

          <div className="about__right">
            <div className="about__avatar">
              <span className="about__avatar-initials">AV</span>
            </div>

            <div className="about__stats">
              {stats.map(s => (
                <div key={s.label} className="card about__stat">
                  <span className="about__stat-value gradient-text">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
