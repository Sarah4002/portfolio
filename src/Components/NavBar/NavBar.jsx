import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'

const LINKS = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['platforms', 'Apps'],
  ['projects', 'Projects'],
  ['terminal', 'Terminal'],
  ['contact', 'Contact'],
]

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let cur = 'home'
      for (const [id] of LINKS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" aria-label="Sara Belmahi — home">
          <img src={logo} alt="SaraH" />
        </a>

        <nav className={`nav-menu ${open ? 'open' : ''}`} aria-label="Main">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Hire me</a>
        </nav>

        <button className={`nav-burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
export default NavBar
