
import Hero3D from './components/Hero3D'
import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const projects = [
    {
      title: 'AI Chatbot',
      description:
        'An AI-powered chatbot with a web interface and Python backend.',
      technologies: 'React · JavaScript · Python · Flask',
      link: 'https://github.com/',
    },
    {
      title: 'Personal Portfolio',
      description:
        'A responsive portfolio showcasing my development skills and projects.',
      technologies: 'React · JavaScript · CSS',
      link: 'https://github.com/',
    },
    {
      title: 'Employee Leave Management',
      description:
        'A database project for managing employee leave records.',
      technologies: 'MySQL · SQL',
      link: 'https://github.com/',
    },
  ]

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">
          <span className="logo-symbol">&lt;/&gt;</span> RGP<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Rajana Grace
              <br />
              <span>Prabhas.</span>
            </h1>

            <h2>
              Aspiring <span>Software Developer</span>
            </h2>

            <p className="hero-description">
              I build modern web experiences with clean code, thoughtful
              design, and a passion for solving problems.
            </p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>

              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <span>FIND ME ON</span>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Decorative 3D-style graphic">
            <Hero3D />
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="floating-card code-card">
              <span className="card-dots">● ● ●</span>
              <pre>
                <span className="code-purple">const</span> developer = {'{'}
                {'\n'}  name: <span className="code-green">'Prabhas'</span>,
                {'\n'}  passion: <span className="code-green">'Building'</span>,
                {'\n'}  learning: <span className="code-green">'Always'</span>
                {'\n'}{'}'}
              </pre>
            </div>

            <div className="floating-card tech-card">
              <span className="tech-icon">✳</span>
              <div>
                <strong>Creative Developer</strong>
                <p>Turning ideas into reality</p>
              </div>
            </div>

            <div className="visual-caption">
              <span>01 / 05</span>
              <span>DESIGN · DEVELOP · DEPLOY</span>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span className="scroll-line"></span>
            SCROLL TO EXPLORE
          </a>
        </section>

        <section className="about section-container" id="about">
          <p className="eyebrow">01 — ABOUT ME</p>
          <h2 className="section-title">
            Curious mind.
            <br />
            <span>Creative solutions.</span>
          </h2>
          <p className="section-description">
            I'm a Computer Science graduate interested in software development,
            full-stack web technologies, and problem-solving. I enjoy learning
            new tools and turning ideas into useful applications.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <strong>2026</strong>
              <span>Graduation Year</span>
            </div>
            <div className="stat-card">
              <strong>Full Stack</strong>
              <span>Development Interest</span>
            </div>
            <div className="stat-card">
              <strong>Always</strong>
              <span>Learning & Improving</span>
            </div>
          </div>
        </section>

        <section className="skills section-container" id="skills">
          <p className="eyebrow">02 — MY TOOLKIT</p>
          <h2 className="section-title">
            Technologies I <span>work with.</span>
          </h2>

          <div className="skills-grid">
            {[
              'Python',
              'JavaScript',
              'React.js',
              'HTML5',
              'CSS3',
              'Node.js',
              'Flask',
              'MySQL',
              'MongoDB',
              'Git & GitHub',
            ].map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="projects section-container" id="projects">
          <p className="eyebrow">03 — SELECTED WORK</p>
          <h2 className="section-title">
            Ideas into <span>reality.</span>
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-art art-${index + 1}`}>
                  <span className="project-index">
                    PROJECT / 0{index + 1}
                  </span>
                  <div className="project-art-symbol">
                    {['✳', '</>', '▦'][index]}
                  </div>
                  <span className="project-art-label">CREATIVE LAB</span>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-tech">{project.technologies}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Repository ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-container" id="contact">
          <p className="eyebrow">04 — GET IN TOUCH</p>
          <h2 className="section-title">
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>
          <p className="section-description">
            I'm interested in entry-level software development opportunities
            and projects where I can learn, contribute, and grow.
          </p>

          <a
            className="button button-primary"
            href="mailto:your-email@example.com"
          >
            Send Me an Email ↗
          </a>

          <div className="contact-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          RGP<span>.</span>
        </a>
        <p>Designed & built with curiosity.</p>
        <span>© {new Date().getFullYear()} Prabhas</span>
      </footer>
    </div>
  )
}

export default App