import { useEffect, useState, useRef } from 'react'

function CounterAnimation({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state every time intersection changes
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) {
      // Reset to 0 when not visible
      setCount(0)
      return
    }

    let startTime = null
    let animationFrame = null

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOut * target)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, target, duration])

  return (
    <span ref={elementRef}>
      {count}%
    </span>
  )
}

export default CounterAnimation
