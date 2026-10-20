import React, { useEffect, useRef, useState } from 'react'
import './Terminal.css'
import SectionTitle from '../SectionTitle'
import Reveal from '../Reveal'
import useInView, { prefersReducedMotion } from '../../hooks/useInView'
import { COMMANDS, COMMAND_NAMES } from './commands'

const BOOT = [
  'Welcome to sara-portfolio v1.0 — interactive terminal',
  'Type "help" to list commands, or click a shortcut below.',
]
const SHORTCUTS = ['help', 'about', 'skills', 'projects', 'contact', 'clear']

let uid = 0
const mk = (kind, content) => ({ id: ++uid, kind, content })

const Terminal = () => {
  const [wrapRef, inView] = useInView({ threshold: 0.3 })
  const [lines, setLines] = useState([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [hIdx, setHIdx] = useState(-1)
  const booted = useRef(false)
  const bodyRef = useRef(null)
  const inputRef = useRef(null)

  // Boot sequence: types the welcome lines when the terminal comes into view.
  useEffect(() => {
    if (!inView || booted.current) return
    booted.current = true
    const reduced = prefersReducedMotion()
    BOOT.forEach((txt, li) => {
      setTimeout(() => {
        const id = ++uid
        setLines((l) => [...l, { id, kind: 'boot', content: reduced ? txt : '' }])
        if (reduced) return
        let i = 0
        const iv = setInterval(() => {
          i += 1
          setLines((l) => l.map((x) => (x.id === id ? { ...x, content: txt.slice(0, i) } : x)))
          if (i >= txt.length) clearInterval(iv)
        }, 22)
      }, reduced ? 0 : li * 1300 + 300)
    })
  }, [inView])

  // Keep the newest output visible — scroll inside the terminal only, never the page.
  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  const run = (raw) => {
    const cmd = raw.trim()
    if (!cmd) { setLines((l) => [...l, mk('cmd', '')]); return }
    const [name, ...args] = cmd.split(/\s+/)
    const fn = COMMANDS[name.toLowerCase()]
    setHistory((h) => [...h, cmd])
    setHIdx(-1)
    if (!fn) {
      setLines((l) => [...l, mk('cmd', cmd), mk('out', <div className="t-err">{name}: command not found — type "help"</div>)])
      return
    }
    const out = fn(args)
    if (out === '__clear__') { setLines([]); return }
    setLines((l) => [...l, mk('cmd', cmd), mk('out', out)])
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') { run(input); setInput('') }
    else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!history.length) return
      const i = hIdx === -1 ? history.length - 1 : Math.max(0, hIdx - 1)
      setHIdx(i); setInput(history[i])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (hIdx === -1) return
      const i = hIdx + 1
      if (i >= history.length) { setHIdx(-1); setInput('') } else { setHIdx(i); setInput(history[i]) }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const m = COMMAND_NAMES.filter((c) => c.startsWith(input.toLowerCase()))
      if (input && m.length === 1) setInput(m[0] + ' ')
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault(); setLines([])
    }
  }

  const shortcut = (c) => { run(c); inputRef.current?.focus({ preventScroll: true }) }

  return (
    <section id="terminal" className="section terminal-sec">
      <div className="container">
        <SectionTitle
          no="05"
          label="terminal"
          title="Explore it like a developer"
          desc="Prefer the command line? Ask the terminal anything about me, my skills or my projects."
        />

        <Reveal className="term" >
          <div ref={wrapRef}>
            <div className="term-bar">
              <i /><i /><i />
              <span>sara@portfolio: ~</span>
            </div>
            <div className="term-body" ref={bodyRef} onClick={() => inputRef.current?.focus({ preventScroll: true })} role="log" aria-live="polite">
              {lines.map((ln) => (
                <div key={ln.id} className={`t-line t-${ln.kind}`}>
                  {ln.kind === 'cmd' && <><span className="t-ps">sara@portfolio:~$</span> {ln.content}</>}
                  {ln.kind === 'boot' && <span className="t-boot">{ln.content}</span>}
                  {ln.kind === 'out' && ln.content}
                </div>
              ))}
              <label className="t-input-row">
                <span className="t-ps">sara@portfolio:~$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  spellCheck="false"
                  autoComplete="off"
                  autoCapitalize="off"
                  aria-label="Terminal command"
                />
              </label>
            </div>
            <div className="term-shortcuts">
              {SHORTCUTS.map((c) => <button key={c} onClick={() => shortcut(c)}>{c}</button>)}
              <span className="term-hint">↑↓ history · Tab autocomplete</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
export default Terminal
