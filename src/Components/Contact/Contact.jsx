import React, { useState } from 'react'
import './Contact.css'
import SectionTitle from '../SectionTitle'
import Reveal from '../Reveal'
import { EMAIL, GITHUB, LINKEDIN } from '../Terminal/commands'

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
)
const ICONS = {
  mail: <Icon d={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} />,
  github: <Icon d={<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21" />} />,
  linkedin: <Icon d={<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>} />,
  pin: <Icon d={<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>} />,
  phone: <Icon d={<path d="M22 16.900v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.300 1.800.6 2.800.7a2 2 0 0 1 1.700 2z" />} />,
}

const DETAILS = [
  ['mail', 'Email', EMAIL, `mailto:${EMAIL}`],
  ['github', 'GitHub', 'github.com/Sarah4002', GITHUB],
  ['linkedin', 'LinkedIn', 'linkedin.com/in/sara-belmahi', LINKEDIN],
  ['phone', 'Phone', '+213 561 148 201', 'tel:+213561148201'],
  ['pin', 'Location', 'Chetouane, Tlemcen, Algeria', null],
]

const Contact = () => {
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    setStatus({ state: 'sending', msg: '' })
    try {
      const formData = new FormData(form)
      formData.append('access_key', 'ac07a923-7f31-447e-a706-5fc02a7efe32')
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      }).then((r) => r.json())
      if (res.success) { setStatus({ state: 'ok', msg: 'Message sent — thank you! I will get back to you soon.' }); form.reset() }
      else setStatus({ state: 'err', msg: res.message || 'Something went wrong. Please try again.' })
    } catch {
      setStatus({ state: 'err', msg: 'Network error. Please try again or email me directly.' })
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionTitle no="06" label="contact" title="Let's build something." desc="I'm available for new projects — send me a message and I'll reply as soon as possible." />

        <div className="contact-grid">
          <Reveal className="contact-left">
            {DETAILS.map(([ic, label, text, href]) => {
              const Tag = href ? 'a' : 'div'
              return (
                <Tag key={label} className="contact-detail" {...(href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})}>
                  <span className="ci">{ICONS[ic]}</span>
                  <span><small>{label}</small>{text}</span>
                </Tag>
              )
            })}
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="contact-form">
              <label>Your name<input type="text" name="name" placeholder="Enter your name" required /></label>
              <label>Your email<input type="email" name="email" placeholder="Enter your email" required /></label>
              <label>Your message<textarea name="message" rows="6" placeholder="Tell me about your project" required /></label>
              <button type="submit" className="btn btn-primary" disabled={status.state === 'sending'}>
                {status.state === 'sending' ? 'Sending…' : 'Send message'} <span aria-hidden="true">→</span>
              </button>
              {status.msg && <p className={`form-msg ${status.state}`} role="status">{status.msg}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
export default Contact
