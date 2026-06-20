import { useState, useEffect } from 'react'
import './Hero.css'

const roles = [
  'Python Developer',
  'Backend Engineer',
  'API Architect',
  'ETL Pipeline Engineer',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(i => i + 1)
      }, 80)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(i => i - 1)
      }, 45)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }
  }, [charIndex, deleting, roleIndex])

  return (
    <section id="hero" className="hero">
      <div className="container hero__content">
        <p className="hero__greeting fade-1">Hi there, I&apos;m</p>

        <h1 className="hero__name fade-2">Abhinav Vaidya</h1>

        <h2 className="hero__role fade-3">
          <span className="hero__role-accent">$ </span>
          {displayed}
          <span className="hero__cursor" aria-hidden="true" />
        </h2>

        <p className="hero__bio">
          Results-driven Python Developer with <span className="highlight">3+ years of experience</span> designing
          scalable web applications, REST APIs, and data-driven solutions. Skilled in backend development,
          database management, and integrating <span className="highlight">GenAI tools</span> like LLMs and RAG pipelines to solve real business problems.
        </p>

        <div className="hero__cta fade-4">
          <a href="#projects" className="btn" onClick={e => {
            e.preventDefault()
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            View My Work
          </a>
          <a href="#contact" className="btn btn-fill" onClick={e => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Get In Touch
          </a>
        </div>

      </div>

    </section>
  )
}
