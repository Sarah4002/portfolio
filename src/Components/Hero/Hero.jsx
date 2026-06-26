import React from "react"
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll"

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Sara Belmahi" className="hero-photo" />
      <h1>
        <span>I'm Sara Belmahi, </span>
        full stack developer based in Algeria.
      </h1>
      <p className="hero-subtitle">
        I build clean, fast, and user-friendly web experiences with React and modern CSS.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
