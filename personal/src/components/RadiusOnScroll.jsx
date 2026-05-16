import { useRef, useEffect, useState } from 'react';

/**
 * RadiusOnScroll - Image/element with border-radius and scale that changes on scroll
 * Simplified from Framer template
 */
export default function RadiusOnScroll({ 
  children,
  startRadius = 100,
  endRadius = 0,
  startScale = 0.85,
  endScale = 1,
  className = ''
}) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start when element enters viewport (bottom)
      const elementTop = rect.top;
      
      // Calculate scroll progress
      // Start animation when section is about to enter (below viewport)
      const startPoint = windowHeight; // Bottom of viewport
      const endPoint = 0; // Top of viewport
      
      let prog = 0;
      
      if (elementTop <= startPoint && elementTop >= endPoint) {
        prog = (startPoint - elementTop) / (startPoint - endPoint);
      } else if (elementTop < endPoint) {
        prog = 1;
      }
      
      // Clamp between 0 and 1
      prog = Math.max(0, Math.min(1, prog));
      
      // Apply easing (ease-out cubic)
      prog = 1 - Math.pow(1 - prog, 3);
      
      setProgress(prog);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Interpolate values
  const currentRadius = startRadius + (endRadius - startRadius) * progress;
  const currentScale = startScale + (endScale - startScale) * progress;

  return (
    <div
      ref={containerRef}
      className={`radius-scroll-container ${className}`}
      style={{
        borderRadius: `${currentRadius}px`,
        transform: `scale(${currentScale})`,
        transition: 'none', // Remove transition, use scroll-driven animation
        overflow: 'hidden',
        willChange: 'border-radius, transform',
        transformOrigin: 'center center'
      }}
    >
      {children}
    </div>
  );
}
