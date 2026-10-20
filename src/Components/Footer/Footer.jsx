import React from 'react'
import './Footer.css'
import { GITHUB, LINKEDIN, EMAIL } from '../Terminal/commands'
import logo from '../../assets/logo.png'

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
       <a href="#home" className="navbar-logo" aria-label="Sara Belmahi — home">
                <img src={logo} alt="SaraH" />
              </a>
      <p>Full Stack Developer — web, mobile & desktop.</p>
      <nav aria-label="Social links">
        <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${EMAIL}`}>Email</a>
      </nav>
    </div>
    <div className="container footer-copy">© {new Date().getFullYear()} Sara Belmahi. All rights reserved.</div>
  </footer>
)
export default Footer
