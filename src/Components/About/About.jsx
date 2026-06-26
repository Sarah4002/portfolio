import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="section-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Sara Belmahi" />
        </div>
        <div className="about-right">
          <div className='about-para'>
            <p>I'm a passionate full stack developer based in Tlemcen, Algeria. I love crafting beautiful, responsive interfaces that feel great to use.</p>
            <p>With experience in React, JavaScript, Flutter and modern CSS, I bring ideas to life with clean code and thoughtful design.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Flutter & Dart</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of experience</p>
        </div>
        <div className="about-divider" />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects completed</p>
        </div>
        <div className="about-divider" />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  )
}

export default About
