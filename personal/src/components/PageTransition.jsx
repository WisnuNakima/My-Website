import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './PageTransition.css'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [displayPath, setDisplayPath] = useState('')

  useEffect(() => {
    // Set page name based on path
    const path = location.pathname
    let pageName = 'HOME'
    
    if (path.includes('/about')) pageName = 'ABOUT'
    else if (path.includes('/works')) pageName = 'WORKS'
    else if (path.includes('/contact')) pageName = 'CONTACT'
    
    setDisplayPath(pageName)
    setIsTransitioning(true)

    // Hide overlay after animation
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {/* Page Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="page-transition-overlay"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ 
              duration: 0.7, 
              ease: [0.76, 0, 0.24, 1] // Custom cubic-bezier for smooth easing
            }}
          >
            <motion.span
              className="page-transition-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {displayPath}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  )
}
