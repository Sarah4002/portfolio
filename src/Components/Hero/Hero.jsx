import React, { useEffect, useState } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import { prefersReducedMotion } from '../../hooks/useInView'

const ROLES = [
  'Full Stack Developer',
  'Web Applications',
  'Mobile Apps with Flutter',
  'Desktop Apps with Electron',
  'React · Node.js · Python',
]

// Types a word, pauses, deletes it, moves to the next one.
const useRotatingType = (words) => {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '')
  useEffect(() => {
    if (prefersReducedMotion()) return
    let w = 0, i = 0, deleting = false, t
    const step = () => {
      const word = words[w]
      i += deleting ? -1 : 1
      setText(word.slice(0, i))
      let wait = deleting ? 35 : 75
      if (!deleting && i === word.length) { deleting = true; wait = 1500 }
      else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; wait = 350 }
      t = setTimeout(step, wait)
    }
    t = setTimeout(step, 600)
    return () => clearTimeout(t)
  }, [words])
  return text
}

const Hero = () => {
  const role = useRotatingType(ROLES)
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" /><span className="blob b2" /><span className="grid" />
      </div>

      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-hello"><span className="prompt">$</span> whoami</p>
          <h1>
            Hi, I'm <span className="grad-text">Sara Belmahi</span>
          </h1>
          <p className="hero-role" aria-live="off">
            <span className="hero-role-text">{role}</span><span className="hero-caret" />
          </p>
          <p className="hero-sub">
            Full stack developer based in Tlemcen, Algeria. I design and build web, mobile and desktop
            applications — from the interface to the database.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View my projects <span aria-hidden="true">→</span></a>
            <a href="#terminal" className="btn btn-ghost"><span className="prompt">&gt;_</span> Open terminal</a>
          </div>
          <ul className="hero-stack" aria-label="Main technologies">
            {['React', 'Flutter', 'Node.js', 'Flask', 'PostgreSQL'].map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-ring">
            <img src={profile_img} alt="Sara Belmahi" />
          </div>
          <span className="float-badge fb1">Web</span>
          <span className="float-badge fb2">Mobile</span>
          <span className="float-badge fb3">Desktop</span>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to about"><span /></a>
    </section>
  )
}
export default Hero
