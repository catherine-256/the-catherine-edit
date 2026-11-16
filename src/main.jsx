
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft, ArrowRight, Menu, X, Instagram, Github, Mail } from 'lucide-react'
import { projects } from './projects'
import './style.css'
const imageFor = (file) => `/projects/${file}`

function Header() { const [open, setOpen] = useState(false)

  return (
  <header className="site-header">
      <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
        the catherine <em>edit.</em>
 </Link>

      <button
        className="mobile-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={23}/> : <Menu size={23}/>}
      </button>

      <nav
        className={open ? 'navigation is-open' : 'navigation'}
        aria-label="Main navigation"
      >
        <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
        <Link onClick={() => setOpen(false)} to="/#about">About</Link>
        <Link onClick={() => setOpen(false)} to="/#work">The work</Link>
        <Link onClick={() => setOpen(false)} to="/#contact">Contact</Link>
      </nav>

      <span className="header-issue">VOL. 01 / 2026</span>
    </header>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Link
 to={`/project/${project.slug}`}
      className={`project-card card-${index % 3}`}
    >
      <div className="project-image">
        <img
          src={imageFor(project.images[0])}
          alt={`${project.name} project preview`}
          loading="lazy"
        />
        <span className="view-label">
          Read the story <ArrowUpRight size={16}/>
        </span>
      </div>

    
      <div className="project-meta">
        <span>{project.category} / {project.number}</span>
        <span>{project.year}</span>
      </div>

      <div className="project-heading">
        <h3>{project.name}</h3>
        <ArrowUpRight size={23}/>
           </div>

      <p>{project.summary}</p>
    </Link>
  )
}

function Home() {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <>
      <section className="cover" id="top">
        <div className="cover-top">
          <span>ISSUE NO. 001</span>
        </div>

        <div className="cover-center">
          <p className="cover-pretitle">
            PORTFOLIO
          </p>

   <h1>
            the catherine<br/>
            <em>edit.</em>
          </h1>

          <div className="cover-line">
            <span>CODE</span>
            <span>DESIGN</span>
            <span>PERSONALITY</span>
          </div>
        </div>

        <div className="cover-bottom">
          <div>
            <span className="tiny-label">ON THE COVER</span>

            <h2>
              Building things<br/>
              <em>with intention.</em>
            </h2>

            <p>
              Frontend development, thoughtful interfaces,
              and a little creative curiosity.
            </p>
          </div>

          <div className="cover-seal">
            <span>THE</span>
            <strong>PINK</strong>
            <span>ISSUE</span>
            <small>2026</small>
          </div>
        </div>

        <div className="cover-footer">
          <span>WEB · FIGMA · GAME</span>

          <a href="#work">
            TURN THE PAGE <ArrowRight size={15}/>
          </a>
        </div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-kicker">
          <span>01 / THE INTRODUCTION</span>
          <span>MEET THE DEVELOPER</span>
        </div>

        <div className="about-grid">
          <h2>
            Hi, I'm Catherine.<br/>
            <em>Nice to meet you.</em>
          </h2>

          <div className="about-copy">
            <p>
              I'm a Computer Science student and frontend developer
              who enjoys making digital experiences feel as good
              as they work.
            </p>

            <p>
              My interests sit somewhere between technology, design,
              and the small details that make an interface memorable.
              I work with React, JavaScript, and modern frontend tools,
              and I love exploring ideas in Figma.
            </p>

            <div className="skill-row">
              <span>REACT</span>
              <span>JAVASCRIPT</span>
              <span>TAILWIND CSS</span>
              <span>FIGMA</span>
              <span>ANGULAR</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-kicker">
          <span>02 / THE PORTFOLIO INDEX</span>
          <span>SELECTED WORKS · 2026</span>
        </div>

        <div className="work-heading">
          <div>
            <p className="eyebrow">THE WORK EDIT</p>
            <h2>
              Made with <em>curiosity.</em>
            </h2>
          </div>

          <p>
            Five projects, three collections, and a few different
            ways of thinking about digital experiences.
          </p>
        </div>

        <div className="filters" aria-label="Filter projects">
          {['All', 'Web', 'Figma', 'Game'].map(item => (
            <button
              key={item}
              className={filter === item ? 'selected' : ''}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
            >
              {item}
              <span>
                {item === 'All'
                  ? projects.length
                  : projects.filter(p => p.category === item).length}
              </span>
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="quote-strip">
        <span>THE EDITOR'S NOTE</span>

        <p>
          “Good design isn't just what you see.
          It's how everything comes together.”
        </p>

        <span>THOUGHTS FROM THE STUDIO / 2026</span>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="section-kicker">
          <span>03 / THE LAST PAGE</span>
          <span>LET'S CONNECT</span>
        </div>

        <p className="eyebrow">A NOTE FROM ME</p>

        <h2>
          Have something<br/>
          <em>in mind?</em>
        </h2>

        <p>
          I'm always interested in thoughtful projects,
          creative ideas, and opportunities to learn.
        </p>

        <div className="contact-actions">
          <a href="mailto:okoedec@gmail.com">
            Say hello <ArrowUpRight size={20}/>
          </a>

          <a
            href="https://github.com/catherine-256"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Github size={19}/>
          </a>
        </div>
      </section>
    </>
  )
}

function ProjectDetail() {
  const { slug } = useParams()

  const project = projects.find(item => item.slug === slug)

  if (!project) {
    return (
      <main className="missing section-wrap">
        <h1>Page not found.</h1>
        <Link to="/">Back to the portfolio</Link>
      </main>
    )
  }

  const nextProject = projects[
    (projects.indexOf(project) + 1) % projects.length
  ]

  return (
    <main className="detail">
      <div className="detail-intro section-wrap">
        <Link to="/" className="back-link">
          <ArrowLeft size={17}/> Back to the edit
        </Link>

        <div className="section-kicker">
          <span>
            THE CATHERINE EDIT / {project.category.toUpperCase()}
          </span>
          <span>
            ISSUE {project.number} · {project.year}
          </span>
        </div>

        <p className="eyebrow">{project.kicker}</p>

        <h1>
          {project.name}<span>.</span>
        </h1>

        <h2>{project.headline}</h2>

        <div className="detail-summary">
          <p>{project.summary}</p>

          <div className="detail-links">
            <a
              href={project.source}
              target="_blank"
              rel="noreferrer"
            >
              {project.category === 'Figma'
                ? 'Explore in Figma'
                : 'View source'}
              <ArrowUpRight size={17}/>
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Visit live project <ArrowUpRight size={17}/>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="detail-hero">
        <img
          src={imageFor(project.images[0])}
          alt={`${project.name} main screenshot`}
        />
      </div>

      <div className="story section-wrap">
        <div className="story-head">
          <span>THE STORY / {project.number}</span>

          <h2>
            Behind <em>the build.</em>
          </h2>
        </div>

        <div className="story-columns">
          <article>
            <span className="eyebrow">CHALLENGES</span>
            <p>{project.challenge}</p>
          </article>

          <article>
            <span className="eyebrow"> APPROACH</span>
            <p>{project.approach}</p>
          </article>
        </div>

        <div className="feature-panel">
          <div>
            <span className="eyebrow">THE DETAILS</span>
            <h3>What went into it.</h3>
          </div>

          <ul>
            {project.features.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="gallery section-wrap">
        <div className="section-kicker">
          <span>MY VISUAL DIARY</span>
          <span>SCREENSHOTS / 01–04</span>
        </div>

        <h2>
          A closer <em>look.</em>
        </h2>

        <div className="gallery-grid">
          {project.images.map((file, index) => (
            <figure key={file}>
              <img
                src={imageFor(file)}
                alt={`${project.name}: ${project.captions[index]}`}
                loading="lazy"
              />

              <figcaption>
                {String(index + 1).padStart(2, '0')} / {project.captions[index]}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="reflection section-wrap">
        <span className="eyebrow">THE TAKEAWAY</span>

        <h2>
          What I <em>learned.</em>
        </h2>

        <p>{project.learned}</p>

        <div className="technology-list">
          {project.technologies.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {project.note && (
          <p className="project-note">{project.note}</p>
        )}
      </section>

      <div className="next-story section-wrap">
        <span>KEEP READING</span>

        <Link to={`/project/${nextProject.slug}`}>
          {nextProject.name} <ArrowUpRight size={29}/>
        </Link>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/:slug" element={<ProjectDetail/>}/>
      </Routes>

      <footer className="site-footer">
        <span>THE CATHERINE EDIT © 2026</span>
        <Link to="/">BACK TO TOP ↑</Link>
      </footer>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App/>)
