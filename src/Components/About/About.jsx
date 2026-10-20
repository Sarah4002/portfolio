import React from 'react'
import './About.css'
import SectionTitle from '../SectionTitle'
import Reveal from '../Reveal'
import Typewriter from '../Typewriter/Typewriter'
import useInView from '../../hooks/useInView'
import { ALL_TECH } from '../../data/tech'
import { PROJECTS } from '../../data/projects'

const P1 = "I'm a passionate full stack developer based in Tlemcen, Algeria. I love turning ideas into clean, responsive and fast applications — and I care as much about the database and the API as about the pixels."
const P2 = "I build web apps with React, mobile apps with Flutter and desktop apps with Electron, backed by Node.js, Flask or Django and relational databases like MySQL, PostgreSQL and SQLite."

const Counter = ({ to, label }) => {
  const [ref, inView] = useInView()
  const [n, setN] = React.useState(0)
  React.useEffect(() => {
    if (!inView) return
    let v = 0
    const t = setInterval(() => { v += 1; setN(v); if (v >= to) clearInterval(t) }, 120)
    return () => clearInterval(t)
  }, [inView, to])
  return (
    <div className="stat" ref={ref}>
      <strong className="grad-text">{n}</strong>
      <span>{label}</span>
    </div>
  )
}

const About = () => (
  <section id="about" className="section about">
    <div className="container">
      <SectionTitle no="01" label="about" title="Code with purpose." />

      <div className="about-grid">
        <Reveal className="about-text">
          <p><Typewriter text={P1} speed={14} /></p>
          <p><Typewriter text={P2} speed={14} delay={900} /></p>
          <div className="about-stats">
            <Counter to={3} label="Platforms" />
            <Counter to={PROJECTS.length} label="Featured projects" />
            <Counter to={ALL_TECH.length} label="Technologies" />
          </div>
        </Reveal>

        <Reveal delay={150} className="code-card">
          <div className="code-card-bar">
            <i /><i /><i /><span>sara.config.js</span>
          </div>
          <pre>
<span className="k">const</span> <span className="v">sara</span> = {'{'}{'\n'}
{'  '}<span className="p">role</span>: <span className="s">"Full Stack Developer"</span>,{'\n'}
{'  '}<span className="p">location</span>: <span className="s">"Tlemcen, Algeria"</span>,{'\n'}
{'  '}<span className="p">builds</span>: [<span className="s">"web"</span>, <span className="s">"mobile"</span>, <span className="s">"desktop"</span>],{'\n'}
{'  '}<span className="p">frontend</span>: [<span className="s">"React"</span>, <span className="s">"Flutter"</span>],{'\n'}
{'  '}<span className="p">backend</span>: [<span className="s">"Node.js"</span>, <span className="s">"Flask"</span>],{'\n'}
{'  '}<span className="p">database</span>: [<span className="s">"MySQL"</span>, <span className="s">"PostgreSQL"</span>],{'\n'}
{'  '}<span className="p">available</span>: <span className="k">true</span>{'\n'}
{'}'}
          </pre>
        </Reveal>
      </div>
    </div>
  </section>
)
export default About
