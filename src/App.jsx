import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { portfolio } from './data'
import './App.css'
import heroBg from './assets/background.png'

function App() {
  const [expandedProject, setExpandedProject] = useState(null)
  const [expandedNews, setExpandedNews] = useState(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactSubject, setContactSubject] = useState('Project Collaboration')
  const [contactMessage, setContactMessage] = useState('')
  const [contactLoading, setContactLoading] = useState(false)
  const [contactStatus, setContactStatus] = useState(null) // null | 'success' | 'error'
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = localStorage.getItem('portfolio-theme')
    if (stored === 'dark' || stored === 'light') return stored
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    return 'light'
  })
  const testimonials = portfolio.testimonials

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length)
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    const name = contactName.trim()
    const email = contactEmail.trim()
    const message = contactMessage.trim()
    if (!name || !email || !message) {
      setContactStatus('error')
      return
    }
    setContactStatus(null)
    setContactLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: contactSubject.trim() || 'Project Collaboration',
          message,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) {
        setContactStatus('success')
        setContactName('')
        setContactEmail('')
        setContactSubject('Project Collaboration')
        setContactMessage('')
      } else {
        setContactStatus('error')
      }
    } catch {
      setContactStatus('error')
    } finally {
      setContactLoading(false)
    }
  }

  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-inner">
          <span className="logo"><span className="logo-accent">O</span>mar<span className="logo-accent">S</span>ahri</span>
          <nav className="nav">
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('experience')}>Experience</button>
            <button onClick={() => scrollTo('education')}>Education</button>
            <button onClick={() => scrollTo('skills')}>Skills</button>
            <button onClick={() => scrollTo('projects')}>Projects</button>
            <button onClick={() => scrollTo('certifications')}>Certifications</button>
            <button onClick={() => scrollTo('news')}>News</button>
            <button onClick={() => scrollTo('testimonials')}>Testimonials</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </nav>
          <div className="header-actions">
            <button type="button" className="btn btn-primary btn-header-cta" onClick={() => scrollTo('contact')}>Let's Connect</button>
            <button
              type="button"
              className="header-theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              title={theme === 'light' ? 'Dark mode' : 'Light mode'}
            >
              {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="about" style={{ '--hero-bg-url': `url(${heroBg})` }}>
        <div className="hero-bg" aria-hidden />
        <p className="hero-location">📍 {portfolio.location}</p>
        <h1>Hi, I'm <span className="hero-name-accent">{portfolio.name}</span></h1>
        <h2 className="hero-title">{portfolio.title}</h2>
        <p className="hero-tagline">{portfolio.tagline}</p>
        <p className="hero-desc">{portfolio.description}</p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>View My Work <span className="btn-arrow">→</span></button>
          <button className="btn btn-outline" onClick={() => scrollTo('contact')}>Let's Connect</button>
        </div>
        <div className="hero-stats stats-grid">
          {portfolio.stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section who-i-am" style={{ '--hero-bg-url': `url(${heroBg})` }}>
        <h2 className="section-title">About <span className="title-accent">Me</span></h2>
        <div className="about-me-layout">
          <div className="about-me-picture" aria-hidden />
          <div className="about-me-boxes">
            <div className="about-me-box about-me-bio-box">
              <p className="bio">{portfolio.whoIAm.bio}</p>
            </div>
            <div className="about-me-box expertise-block">
              <h3>My Expertise</h3>
              <p>{portfolio.whoIAm.expertise}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <h2 className="section-title">Work <span className="title-accent">Experience</span></h2>
        <p className="section-subtitle">Building intelligent automation systems and driving operational excellence</p>
        <div className="experience-list">
          {portfolio.experience.map((job, i) => (
            <article key={i} className="job-card">
              <div className="job-header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <div className="job-meta">
                  <span className="job-meta-item">📅 {job.period}</span>
                  <span className="job-meta-item">📍 {job.location}</span>
                </div>
              </div>
              <ul className="job-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section education" id="education">
        <h2 className="section-title"><span className="title-accent">Education</span></h2>
        <p className="section-subtitle">Academic background in robotics and electrical engineering</p>
        <div className="education-list">
          {portfolio.education.map((edu, i) => (
            <article key={i} className="education-card">
              <div className="education-card-bg" aria-hidden />
              <div className="education-card-inner">
                <div className="education-card-icon-wrap">
                  <div className="education-card-icon" aria-hidden>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  </div>
                </div>
                <div className="education-card-body">
                  <span className="education-degree-tag">{edu.degreeType}</span>
                  <h3 className="education-program">{edu.programName}</h3>
                  <div className="education-institution">
                    <div className="education-institution-icon" aria-hidden>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 21v-4h6v4"/><path d="M9 17h6"/></svg>
                    </div>
                    <div className="education-institution-text">
                      <span className="education-institution-label">Institution</span>
                      <span className="education-institution-name">{edu.institution}</span>
                    </div>
                  </div>
                  <div className="education-tags">
                    <span className="education-tag education-tag--location">
                      {edu.countryCode && (
                        <span className="education-tag-flag" aria-hidden title={edu.countryCode}>
                          <img src={`https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${edu.countryCode.toLowerCase()}.svg`} alt="" width="28" height="21" loading="lazy" />
                        </span>
                      )}
                      {edu.location}
                    </span>
                    {edu.specializations?.map((spec, j) => (
                      <span key={j} className="education-tag education-tag--specialty">
                        <svg className="education-tag-star" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills" id="skills">
        <h2 className="section-title">Technical <span className="title-accent">Skills</span></h2>
        <p className="section-subtitle">A comprehensive toolkit for building advanced automation and robotics solutions</p>
        <div className="skills-grid">
          <div className="skill-group">
            <div className="skill-group-header">
              <div className="skill-group-icon-box" aria-hidden>
                <svg className="skill-group-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h4>Programming Languages</h4>
            </div>
            <div className="tags">
              {portfolio.skills.programming.map((s, i) => (
                <span key={i} className="tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-header">
              <div className="skill-group-icon-box" aria-hidden>
                <svg className="skill-group-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
              </div>
              <h4>Robotics & Automation</h4>
            </div>
            <div className="tags">
              {portfolio.skills.robotics.map((s, i) => (
                <span key={i} className="tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-header">
              <div className="skill-group-icon-box" aria-hidden>
                <svg className="skill-group-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h4>Industrial Automation</h4>
            </div>
            <div className="tags">
              {portfolio.skills.industrial.map((s, i) => (
                <span key={i} className="tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-header">
              <div className="skill-group-icon-box" aria-hidden>
                <svg className="skill-group-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              </div>
              <h4>Tools & Technologies</h4>
            </div>
            <div className="tags">
              {portfolio.skills.tools.map((s, i) => (
                <span key={i} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <h2 className="section-title">Featured <span className="title-accent">Projects</span></h2>
        <p className="section-subtitle">Deep-dive into my most impactful automation and robotics projects</p>
        <div className="projects-grid">
          {portfolio.projects.map((proj) => {
            const isExpanded = expandedProject === proj.id;
            const caseStudyId = `case-study-${proj.id}`;
            return (
              <div key={proj.id} className="project-card">
                <div className="project-card-top">
                  <div className="project-card-media">
                    <span className="project-category">{proj.category}</span>
                    {proj.image ? (
                      <img src={proj.image} alt="" />
                    ) : (
                      <div className="project-card-placeholder">No image</div>
                    )}
                  </div>
                  <div className="project-card-body">
                    <h3>{proj.title}</h3>
                    <p className="project-desc">{proj.description}</p>
                    <p className="project-meta">{proj.period} • {proj.location}</p>
                    <button
                      type="button"
                      className={`btn btn-outline project-case-study-btn ${isExpanded ? 'is-expanded' : ''} ${!proj.caseStudy ? 'project-case-study-btn--disabled' : ''}`}
                      onClick={() => proj.caseStudy && setExpandedProject(isExpanded ? null : proj.id)}
                      aria-expanded={proj.caseStudy ? isExpanded : undefined}
                      aria-controls={proj.caseStudy ? caseStudyId : undefined}
                      disabled={!proj.caseStudy}
                    >
                      {isExpanded ? 'Show Less' : 'View Case Study'}
                      <span className="project-btn-arrow" aria-hidden>▼</span>
                    </button>
                  </div>
                </div>
                {isExpanded && proj.caseStudy && (
                  <div id={caseStudyId} className="case-study" role="region" aria-label="Case study details">
                    <h4>The Challenge</h4>
                    <p>{proj.caseStudy.challenge}</p>
                    <h4>The Solution</h4>
                    <p>{proj.caseStudy.solution}</p>
                    <h4>Technologies Used</h4>
                    <div className="tags">
                      {proj.caseStudy.technologies.map((t, i) => (
                        <span key={i} className="tag">{t}</span>
                      ))}
                    </div>
                    <div className="case-study-two-cols">
                      <div>
                        <h4>Key Features</h4>
                        <ul>
                          {proj.caseStudy.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Results & Impact</h4>
                        <ul>
                          {proj.caseStudy.results.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section certifications" id="certifications">
        <h2 className="section-title">Certifications & <span className="title-accent">Training</span></h2>
        <p className="section-subtitle">Continuous learning and professional development in automation and robotics</p>
        <div className="certs-grid">
          {portfolio.certifications.map((c, i) => (
            <div key={i} className="cert-card">
              <div className="cert-badge-icon" aria-hidden>
                <svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id={`cert-badge-gold-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f5e6a8"/>
                      <stop offset="40%" stopColor="#e8c84a"/>
                      <stop offset="100%" stopColor="#c9a227"/>
                    </linearGradient>
                    <linearGradient id={`cert-badge-ribbon-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#d4af37"/>
                      <stop offset="50%" stopColor="#f0d050"/>
                      <stop offset="100%" stopColor="#d4af37"/>
                    </linearGradient>
                  </defs>
                  {/* Serrated circular medal (24 peaks) */}
                  <path d="M58 32L52.3 37.4 54.5 45 46.8 46.8 42.5 54.5 37.4 52.3 32 58 26.6 52.3 21.5 54.5 17.2 46.8 9.5 45 11.7 37.4 6 32 11.7 26.6 9.5 19 17.2 17.2 21.5 9.5 26.6 10.7 32 6 37.4 10.7 42.5 9.5 46.8 17.2 54.5 19 52.3 26.6Z" fill={`url(#cert-badge-gold-${i})`} stroke="#b8961e" strokeWidth="0.6" strokeLinejoin="round"/>
                  {/* Inner smooth circle */}
                  <circle cx="32" cy="32" r="16" fill={`url(#cert-badge-gold-${i})`} stroke="#b8961e" strokeWidth="0.5"/>
                  {/* Dotted border ring */}
                  <circle cx="32" cy="32" r="20" fill="none" stroke="#b8961e" strokeWidth="0.8" strokeDasharray="2 2.5" opacity="0.9"/>
                  {/* Two hanging ribbons */}
                  <rect x="24" y="56" width="6" height="20" rx="1.5" fill={`url(#cert-badge-ribbon-${i})`} stroke="#b8961e" strokeWidth="0.4"/>
                  <rect x="34" y="56" width="6" height="20" rx="1.5" fill={`url(#cert-badge-ribbon-${i})`} stroke="#b8961e" strokeWidth="0.4"/>
                </svg>
              </div>
              <h4 className="cert-name">{c.name}</h4>
              <p className="cert-org">{c.org}</p>
              <span className="cert-year">{c.year}</span>
              <p className="cert-desc">{c.desc}</p>
              <span className="cert-badge"><span className="cert-badge-check" aria-hidden>✓</span> Certified</span>
            </div>
          ))}
        </div>
        <div className="additional-expertise">
          <h3 className="additional-expertise-title">Additional <span className="title-accent">Expertise</span></h3>
          <div className="expertise-grid">
            {portfolio.additionalExpertise.map((e, i) => (
              <div key={i} className="expertise-item">
                <h4 className="expertise-item-title"><span className="expertise-item-check" aria-hidden>✓</span> {e.title}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section news" id="news">
        <h2 className="section-title">Latest <span className="title-accent">News</span></h2>
        <p className="section-subtitle">Updates on projects, achievements, and industry insights</p>
        <div className="news-coming-soon">
          <p>Coming soon</p>
        </div>
      </section>

      <section className="section testimonials" id="testimonials">
        <h2 className="section-title">People I've <span className="title-accent">Worked With</span></h2>
        <p className="section-subtitle">Colleagues and team members from my professional experience</p>
        <div className="testimonial-carousel">
          <div className="carousel-track">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className={`testimonial-card ${i === testimonialIndex ? 'active' : ''}`}
                aria-hidden={i !== testimonialIndex}
              >
                <div className="testimonial-card-inner">
                  <div className={`testimonial-photo-wrap ${t.author === 'Will Smylie' || t.author === 'David Guzman Jr' ? 'testimonial-photo-wrap--crop-edges' : ''}`}>
                    {t.image && (
                      <img
                        src={t.image}
                        alt=""
                        className="testimonial-photo"
                        width={160}
                        height={160}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="testimonial-content">
                    <p>"{t.quote}"</p>
                    <footer>
                      <strong>{t.author}</strong>
                      <span>{t.role}, {t.company}</span>
                    </footer>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
          <div className="carousel-controls">
            <button type="button" className="carousel-btn carousel-prev" onClick={prevTestimonial} aria-label="Previous testimonial">
              ‹
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`carousel-dot ${i === testimonialIndex ? 'active' : ''}`}
                  onClick={() => setTestimonialIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button type="button" className="carousel-btn carousel-next" onClick={nextTestimonial} aria-label="Next testimonial">
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2 className="section-title">Let's <span className="title-accent">Connect</span></h2>
        <p className="section-subtitle">Have a project in mind or want to discuss automation and robotics? Let's talk!</p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-touch-title">Get in <span className="title-accent">Touch</span></h3>
            <p className="contact-blurb">{portfolio.contactBlurb}</p>
            <a href={`mailto:${portfolio.email}`} className="contact-info-box">
              <span className="contact-info-box-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </span>
              <span className="contact-info-box-text">
                <span className="contact-info-box-label">Email</span>
                <span className="contact-info-box-value">{portfolio.email}</span>
              </span>
            </a>
            <a href={`tel:${portfolio.phone.replace(/\s/g, '')}`} className="contact-info-box">
              <span className="contact-info-box-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </span>
              <span className="contact-info-box-text">
                <span className="contact-info-box-label">Phone</span>
                <span className="contact-info-box-value">{portfolio.phone}</span>
              </span>
            </a>
            <div className="contact-info-box">
              <span className="contact-info-box-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </span>
              <span className="contact-info-box-text">
                <span className="contact-info-box-label">Location</span>
                <span className="contact-info-box-value">{portfolio.location}</span>
              </span>
            </div>
            <p className="connect-social">Connect on Social Media</p>
            <div className="contact-social-links">
              <a href={portfolio.linkedin || '#'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-social-link">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={portfolio.github || '#'} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="contact-social-link">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
          <div className="contact-form-box">
            <form className="contact-form" onSubmit={handleContactSubmit}>
            <h3 className="contact-form-title">Send a <span className="title-accent">Message</span></h3>
            <label className="contact-form-label">Your Name</label>
            <input
              placeholder="John Doe"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              disabled={contactLoading}
              required
            />
            <label className="contact-form-label">Your Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              disabled={contactLoading}
              required
            />
            <label className="contact-form-label">Subject</label>
            <input
              placeholder="Project Collaboration"
              value={contactSubject}
              onChange={(e) => setContactSubject(e.target.value)}
              disabled={contactLoading}
            />
            <label className="contact-form-label">Message</label>
            <textarea
              placeholder="Tell me about your project or inquiry..."
              rows={5}
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              disabled={contactLoading}
              required
            />
            <button type="submit" className="btn btn-primary contact-form-submit" disabled={contactLoading}>
              {contactLoading ? 'Sending...' : (
                <>
                  Send Message
                  <svg className="contact-form-submit-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </>
              )}
            </button>
            {contactStatus === 'success' && (
              <p className="contact-form-status contact-form-status--success">Message sent! I&apos;ll get back to you soon.</p>
            )}
            {contactStatus === 'error' && (
              <p className="contact-form-status contact-form-status--error">Something went wrong. Try emailing me directly.</p>
            )}
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo"><span className="logo-accent">O</span>mar<span className="logo-accent">S</span>ahri</span>
            <p>{portfolio.title} specializing in robotics, ROS/ROS2, and industrial automation solutions.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <button type="button" onClick={() => scrollTo('about')}>About</button>
            <button type="button" onClick={() => scrollTo('experience')}>Experience</button>
            <button type="button" onClick={() => scrollTo('education')}>Education</button>
            <button type="button" onClick={() => scrollTo('skills')}>Skills</button>
            <button type="button" onClick={() => scrollTo('projects')}>Projects</button>
            <button type="button" onClick={() => scrollTo('certifications')}>Certifications</button>
            <button type="button" onClick={() => scrollTo('news')}>News</button>
            <button type="button" onClick={() => scrollTo('testimonials')}>Testimonials</button>
            <button type="button" onClick={() => scrollTo('contact')}>Contact</button>
          </div>
          <div className="footer-connect">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href={portfolio.linkedin || '#'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={portfolio.github || '#'} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href={`mailto:${portfolio.email}`} aria-label="Email" className="footer-social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2026 {portfolio.name}. All rights reserved.</p>
            <p className="footer-built">Built with React</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}

export default App
