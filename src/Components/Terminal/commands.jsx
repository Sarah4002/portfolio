import React from 'react'
import { SKILL_GROUPS } from '../../data/tech'
import { PROJECTS, TYPE_LABEL } from '../../data/projects'

export const EMAIL = 'sarabelmahi378@gmail.com'
export const GITHUB = 'https://github.com/Sarah4002'
export const LINKEDIN = 'https://www.linkedin.com/in/sara-belmahi-93a5183a0/'

const SECTIONS = ['home', 'about', 'skills', 'platforms', 'projects', 'terminal', 'contact']

const row = (k, v) => (
  <div className="t-row"><span className="t-key">{k}</span><span>{v}</span></div>
)

const FILES = {
  'about.txt': () => (
    <>
      <div>Sara Belmahi — Full Stack Developer, Tlemcen (Algeria).</div>
      <div>I build web, mobile and desktop applications, from the UI to the database.</div>
    </>
  ),
  'skills.json': () => (
    <pre className="t-pre">{JSON.stringify(
      Object.fromEntries(SKILL_GROUPS.map((g) => [g.id, g.items.map((i) => i.name)])), null, 2)}</pre>
  ),
  'contact.txt': () => (
    <>
      {row('email', EMAIL)}
      {row('github', GITHUB)}
      {row('linkedin', 'linkedin.com/in/sara-belmahi-93a5183a0')}
    </>
  ),
}

const findProject = (q = '') => {
  q = q.toLowerCase().replace(/[^a-z0-9]/g, '')
  if (!q) return null
  return PROJECTS.find((p) => p.id.replace(/[^a-z0-9]/g, '').includes(q) || p.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(q))
}

// Each command returns React nodes (or the string '__clear__').
export const COMMANDS = {
  help: () => (
    <>
      <div>Available commands:</div>
      {[
        ['about', 'who am I'],
        ['skills', 'my stack: frontend / backend / database'],
        ['platforms', 'web, mobile & desktop'],
        ['projects', 'list my projects'],
        ['project <name>', 'details of one project'],
        ['contact', 'how to reach me'],
        ['ls / cat <file>', 'browse files (about.txt, skills.json, contact.txt)'],
        ['open <section>', 'scroll to a section of the page'],
        ['whoami · date · clear', 'the usual suspects'],
      ].map(([c, d]) => row(c, d))}
    </>
  ),
  about: () => FILES['about.txt'](),
  whoami: () => <div>sara — full stack developer · web / mobile / desktop</div>,
  skills: () => (
    <>
      {SKILL_GROUPS.map((g) => row(g.title.toLowerCase(), g.items.map((i) => i.name).join(', ')))}
    </>
  ),
  platforms: () => (
    <>
      {row('web', 'React, HTML/CSS, Node.js, Flask, PostgreSQL')}
      {row('mobile', 'Flutter, Dart, Firebase, Java')}
      {row('desktop', 'Electron, React, C#, MySQL, SQLite')}
    </>
  ),
  projects: () => (
    <>
      {PROJECTS.map((p) => row(p.id, `[${TYPE_LABEL[p.type]}] ${p.tagline} — ${p.stack.join(' · ')}`))}
      <div className="t-dim">Tip: type "project vaccitrack" for details.</div>
    </>
  ),
  project: (args) => {
    const p = findProject(args[0])
    if (!args[0]) return <div className="t-err">usage: project &lt;name&gt; — try: {PROJECTS.map((x) => x.id).join(', ')}</div>
    if (!p) return <div className="t-err">project not found: {args[0]}</div>
    return (
      <>
        <div className="t-accent">{p.name} <span className="t-dim">[{TYPE_LABEL[p.type]}]</span></div>
        <div>{p.desc}</div>
        {row('stack', p.stack.join(' · '))}
      </>
    )
  },
  contact: () => FILES['contact.txt'](),
  ls: () => <div className="t-files">{Object.keys(FILES).map((f) => <span key={f}>{f}</span>)}</div>,
  cat: (args) => {
    if (!args[0]) return <div className="t-err">usage: cat &lt;file&gt;</div>
    const f = FILES[args[0]]
    return f ? f() : <div className="t-err">cat: {args[0]}: No such file</div>
  },
  open: (args) => {
    const id = (args[0] || '').replace('#', '')
    if (!SECTIONS.includes(id)) return <div className="t-err">usage: open &lt;{SECTIONS.join('|')}&gt;</div>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    return <div className="t-dim">scrolling to #{id} …</div>
  },
  date: () => <div>{new Date().toString()}</div>,
  echo: (args) => <div>{args.join(' ')}</div>,
  sudo: () => <div className="t-accent">Nice try 😄 — but you can hire me for free: type "contact".</div>,
  clear: () => '__clear__',
}

export const COMMAND_NAMES = Object.keys(COMMANDS)
