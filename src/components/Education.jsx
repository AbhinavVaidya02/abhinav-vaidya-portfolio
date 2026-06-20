import './Education.css'

const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="14.5 17 14.5 22 9.5 22 9.5 17"/>
    <path d="M5.5 6H3a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4"/>
    <path d="M18.5 6H21a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4"/>
    <path d="M12 17a5 5 0 0 0 5-5V3H7v9a5 5 0 0 0 5 5z"/>
    <line x1="6.5" y1="22" x2="17.5" y2="22"/>
  </svg>
)

const education = [
  {
    degree: 'M.Sc. Computer Applications',
    institution: 'Fergusson College, Pune University',
    period: '2021 – 2023',
    Icon: GraduationCapIcon,
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Pune University',
    period: '2018 – 2021',
    Icon: BookIcon,
  },
]

const achievements = [
  {
    title: 'Employee of the Quarter',
    org: 'Flairminds Softwares Pvt. Ltd.',
    desc: 'Recognised for outstanding contributions to backend systems, data pipeline performance, and team impact.',
    Icon: TrophyIcon,
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
                  <span className="edu__card-icon"><e.Icon /></span>
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
                  <span className="edu__card-icon"><a.Icon /></span>
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
