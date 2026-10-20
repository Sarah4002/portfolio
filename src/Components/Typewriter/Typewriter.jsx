import React, { useEffect, useState } from 'react'
import useInView, { prefersReducedMotion } from '../../hooks/useInView'
import './Typewriter.css'

// Types `text` once it scrolls into view. The not-yet-typed part stays in the
// layout (invisible) so the page never jumps while typing.
const Typewriter = ({ text, speed = 18, delay = 0, as: Tag = 'span', className = '' }) => {
  const [ref, inView] = useInView()
  const [n, setN] = useState(0)
  const reduced = prefersReducedMotion()

  useEffect(() => {
    if (!inView || reduced) return
    let i = 0
    let timer
    const start = setTimeout(function tick() {
      i += 1
      setN(i)
      if (i < text.length) timer = setTimeout(tick, speed + Math.random() * speed * 0.6)
    }, delay)
    return () => { clearTimeout(start); clearTimeout(timer) }
  }, [inView, text, speed, delay, reduced])

  const shown = reduced ? text.length : n
  const typing = inView && shown < text.length
  return (
    <Tag ref={ref} className={`tw ${className}`} aria-label={text}>
      <span aria-hidden="true">
        {text.slice(0, shown)}
        <span className={`tw-caret ${typing ? 'on' : ''}`} />
        <span className="tw-rest">{text.slice(shown)}</span>
      </span>
    </Tag>
  )
}

export default Typewriter
