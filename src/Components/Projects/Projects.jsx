import React, { useEffect, useState } from 'react'
import './Projects.css'
import SectionTitle from '../SectionTitle'
import Reveal from '../Reveal'
import Typewriter from '../Typewriter/Typewriter'
import { PROJECTS, TYPE_LABEL } from '../../data/projects'

const FILTERS = ['all', 'web', 'mobile', 'desktop']

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [zoom, setZoom] = useState(null)
  const list = PROJECTS.filter((p) => filter === 'all' || p.type === filter)

  useEffect(() => {
    if (!zoom) return
    const onKey = (e) => e.key === 'Escape' && setZoom(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [zoom])

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionTitle
          no="04"
          label="projects"
          title="Featured work"
          desc="Real applications I designed and built — each one with its stack and what it does."
        />

        <div className="filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : TYPE_LABEL[f]}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 120} as="article" className="proj-card">
              <button className="proj-img" style={{ background: p.bg }} onClick={() => setZoom(p)} aria-label={`Enlarge ${p.name}`}>
                <img src={p.img} alt={`${p.name} — screenshots`} loading="lazy" />
                <span className={`proj-type t-${p.type}`}>{TYPE_LABEL[p.type]}</span>
                <span className="proj-zoom" aria-hidden="true">⤢</span>
              </button>

              {/* Description sits under the picture */}
              <div className="proj-body">
                <h3>{p.name}</h3>
                <span className="proj-tagline">{p.tagline}</span>
                <p><Typewriter text={p.desc} speed={10} delay={i * 200} /></p>
                <ul>{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {zoom && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={zoom.name} onClick={() => setZoom(null)}>
          <button className="lb-close" aria-label="Close">×</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={zoom.img} alt={zoom.name} />
            <figcaption><strong>{zoom.name}</strong> — {zoom.tagline}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
export default Projects
