import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('abhinavvaidya02@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">06. Contact</p>

        <div className="contact__inner">
          <div>
            <h3 className="contact__heading">
              Let&apos;s Build Something <span className="contact__accent">Together</span>
            </h3>
            <p className="contact__desc">
              I&apos;m currently open to new opportunities — whether it&apos;s a full-time role,
              freelance project, or a collaboration on something interesting. My inbox is always open.
            </p>

            <div className="contact__links">
              <a href="mailto:abhinavvaidya02@gmail.com" className="contact__link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                abhinavvaidya02@gmail.com
              </a>
              <a href="tel:+918624880224" className="contact__link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.91.72 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.9.36 1.85.59 2.81.72A2 2 0 0 1 21.73 16l.19.92z"/>
                </svg>
                +91 8624880224
              </a>
              <a href="https://www.linkedin.com/in/abhinav-vaidya-88966221a/" target="_blank" rel="noreferrer" className="contact__link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn Profile
              </a>
              <a href="https://github.com/abhinavvaidya" target="_blank" rel="noreferrer" className="contact__link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub Profile
              </a>
              <span className="contact__link contact__location">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Pune, Maharashtra, India
              </span>
            </div>
          </div>

          <div className="card contact__card">
            <p className="contact__card-label">Quick contact</p>
            <p className="contact__card-email">abhinavvaidya02@gmail.com</p>
            <button className="btn contact__copy-btn" onClick={copyEmail}>
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
            <p className="contact__divider">or</p>
            <a href="mailto:abhinavvaidya02@gmail.com" className="btn btn-fill contact__send-btn">
              Send a Message
            </a>
          </div>
        </div>
      </div>

      <div className="contact__footer">
        © 2026 <span>Abhinav Vaidya</span>. All rights reserved.
      </div>
    </section>
  )
}
