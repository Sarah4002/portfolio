import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.png'
import mail_icon from '../../assets/mail_icon.png'
import location_icon from '../../assets/location_icon.png'
import call_icon from '../../assets/call_icon.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append("access_key", "ac07a923-7f31-447e-a706-5fc02a7efe32")
    const json = JSON.stringify(Object.fromEntries(formData))
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json
    }).then(r => r.json())
    if (res.success) alert(res.message)
  }

  return (
    <div id='contact' className='contact'>
      <div className="section-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p><a href="mailto:sarabelmahi378@gmail.com">sarabelmahi378@gmail.com</a></p>
            </div>
             <div className="contact-detail">
              <img src={linkedin} alt="" />
              <p><a href="https://www.linkedin.com/in/sara-belmahi-93a5183a0/">https://www.linkedin.com/in/sara-belmahi-93a5183a0/</a></p>
            </div>
            <div className="contact-detail">
              <img src={github} alt="" />
              <p><a href="https://github.com/Sarah4002">https://github.com/Sarah4002</a></p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+213-561-148-201</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Chetouane, Tlemcen</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label>Your Message</label>
          <textarea name="message" rows="7" placeholder='Enter your message' required></textarea>
          <button type="submit" className="contact-submit">Send message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
