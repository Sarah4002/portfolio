import React, { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'

// Fades/slides children in when scrolled into view. The stagger delay is dropped
// once the entrance is over so hover transitions are not delayed.
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) => {
  const [ref, inView] = useInView({ threshold: 0.12 })
  const [done, setDone] = useState(false)
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setDone(true), delay + 800)
    return () => clearTimeout(t)
  }, [inView, delay])
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: done ? '0ms' : `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
export default Reveal
