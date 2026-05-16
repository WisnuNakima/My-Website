import { useEffect, useState } from 'react'
import './PageTransition.css'

export default function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade in animation after mount
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`page-transition ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  )
}
