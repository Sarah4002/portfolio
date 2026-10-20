import React from 'react'
import Reveal from './Reveal'
import Typewriter from './Typewriter/Typewriter'

const SectionTitle = ({ no, label, title, desc }) => (
  <Reveal className="section-title">
    <span className="eyebrow">// {no} — {label}</span>
    <h2>{title}</h2>
    {desc && <p><Typewriter text={desc} speed={12} /></p>}
  </Reveal>
)
export default SectionTitle
