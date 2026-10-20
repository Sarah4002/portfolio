import React from 'react'
import './Skills.css'
import SectionTitle from '../SectionTitle'
import Reveal from '../Reveal'
import useInView from '../../hooks/useInView'
import { SKILL_GROUPS } from '../../data/tech'

const Group = ({ group, index }) => {
  const [ref, inView] = useInView({ threshold: 0.2 })
  return (
    <Reveal delay={index * 120} className="skill-group">
      <div ref={ref} className="skill-card">
        <div className="skill-head">
          <code>$ {group.cmd}</code>
          <h3>{group.title}</h3>
          <p>{group.desc}</p>
        </div>
        <ul className="skill-list">
          {group.items.map((it, i) => (
            <li key={it.name} className="skill-item">
              <div className="skill-row">
                <img src={it.icon} alt="" width="26" height="26" loading="lazy" />
                <span>{it.name}</span>
                <em>{inView ? it.level : 0}%</em>
              </div>
              <div className="skill-bar" role="progressbar" aria-valuenow={it.level} aria-valuemin="0" aria-valuemax="100" aria-label={it.name}>
                <span style={{ width: inView ? `${it.level}%` : '0%', transitionDelay: `${300 + i * 110}ms` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

const Skills = () => (
  <section id="skills" className="section skills">
    <div className="container">
      <SectionTitle
        no="02"
        label="skills"
        title="My tech stack"
        desc="Frontend, backend and databases — the full path from the screen to the data."
      />
      <div className="skill-grid">
        {SKILL_GROUPS.map((g, i) => <Group key={g.id} group={g} index={i} />)}
      </div>
    </div>
  </section>
)
export default Skills
