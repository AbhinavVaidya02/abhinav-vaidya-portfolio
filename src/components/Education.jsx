import './Education.css'

const education = [
  {
    degree: 'M.Sc. Computer Applications',
    institution: 'Fergusson College, Pune University',
    period: '2021 – 2023',
    icon: '🎓',
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Pune University',
    period: '2018 – 2021',
    icon: '📘',
  },
]

const achievements = [
  {
    title: 'Employee of the Quarter',
    org: 'Flairminds Softwares Pvt. Ltd.',
    desc: 'Recognised for outstanding contributions to backend systems, data pipeline performance, and team impact.',
    icon: '🏆',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">05. Education & Achievements</p>

        <div className="edu__layout">
          <div>
            <p className="edu__block-title">Education</p>
            <div className="edu__cards">
              {education.map(e => (
                <div key={e.degree} className="card edu__card">
                  <span className="edu__card-icon">{e.icon}</span>
                  <div>
                    <h4 className="edu__degree">{e.degree}</h4>
                    <p className="edu__institution">{e.institution}</p>
                    <span className="pill">{e.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="edu__block-title">Achievements</p>
            <div className="edu__cards">
              {achievements.map(a => (
                <div key={a.title} className="card edu__card">
                  <span className="edu__card-icon">{a.icon}</span>
                  <div>
                    <h4 className="edu__degree">{a.title}</h4>
                    <p className="edu__institution">{a.org}</p>
                    <p className="edu__achievement-desc">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
