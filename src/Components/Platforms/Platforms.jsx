import React from 'react'
import './Platforms.css'
import SectionTitle from '../SectionTitle'
import Reveal from '../Reveal'
import Typewriter from '../Typewriter/Typewriter'

const I = {
  web: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="9" width="38" height="28" rx="4" /><path d="M5 17h38M11 13h.01M16 13h.01M21 13h.01M19 27l-4 3 4 3M29 27l4 3-4 3M26 25l-4 10" /><path d="M16 42h16" /></svg>
  ),
  mobile: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="13" y="4" width="22" height="40" rx="5" /><path d="M21 9h6M22 39h4" /><path d="M19 20h10M19 26h10M19 32h6" /></svg>
  ),
  desktop: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="7" width="40" height="27" rx="4" /><path d="M17 41h14M24 34v7" /><path d="M13 18h8v9h-8zM26 16h9M26 22h9M26 28h6" /></svg>
  ),
}

const PLATFORMS = [
  {
    key: 'web', title: 'Web applications', stack: ['React', 'HTML/CSS', 'Node.js', 'Flask', 'PostgreSQL'],
    desc: 'Responsive, accessible web apps and dashboards with a solid API and database behind them.',
  },
  {
    key: 'mobile', title: 'Mobile applications', stack: ['Flutter', 'Dart', 'Firebase', 'Java'],
    desc: 'Smooth cross-platform mobile apps for Android and iOS from a single Flutter codebase.',
  },
  {
    key: 'desktop', title: 'Desktop applications', stack: ['Electron', 'React', 'C#', 'MySQL', 'SQLite'],
    desc: 'Secure, installable desktop software for daily professional use, even with local data.',
  },
]

const Platforms = () => (
  <section id="platforms" className="section platforms">
    <div className="container">
      <SectionTitle no="03" label="what I build" title="Web, mobile & desktop" />
      <div className="plat-grid">
        {PLATFORMS.map((p, i) => (
          <Reveal key={p.key} delay={i * 130} className="plat-card">
            <div className="plat-icon">{I[p.key]}</div>
            <h3>{p.title}</h3>
            <p><Typewriter text={p.desc} speed={14} delay={i * 250} /></p>
            <ul>{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)
export default Platforms
