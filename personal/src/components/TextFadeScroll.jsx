import { useRef, useEffect, useState } from 'react';

/**
 * TextFadeScroll - Advanced text reveal on scroll effect
 * Smooth gradient mask reveal without external dependencies
 */
export default function TextFadeScroll({ 
  text, 
  className = '',
  delay = 0,
  direction = 'Bottom → Top'
}) {
  const rootRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!rootRef.current) return;

      const rect = rootRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when element enters viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start revealing when element is 90% down the viewport
      // Finish when element is 50% up the viewport
      const startPoint = windowHeight * 0.9;
      const endPoint = windowHeight * 0.5;
      
      let progress = 0;
      
      if (elementTop <= startPoint && elementTop >= endPoint) {
        progress = (startPoint - elementTop) / (startPoint - endPoint);
      } else if (elementTop < endPoint) {
        progress = 1;
      }
      
      // Smooth easing (ease-out cubic)
      progress = 1 - Math.pow(1 - progress, 3);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate styles based on scroll progress
  const opacity = scrollProgress;
  const translateY = (1 - scrollProgress) * 30; // Move up 30px as it fades in
  
  // Gradient mask percentage
  const visiblePct = scrollProgress * 100;
  const edgePct = 30;
  
  // Create gradient mask
  const maskImage = direction === 'Bottom → Top'
    ? `linear-gradient(180deg,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0) calc(${100 - visiblePct - edgePct}%),
        rgba(0,0,0,1) calc(${100 - visiblePct}%),
        rgba(0,0,0,1) 100%)`
    : `linear-gradient(180deg,
        rgba(0,0,0,1) 0%,
        rgba(0,0,0,1) ${visiblePct}%,
        rgba(0,0,0,0) calc(${visiblePct + edgePct}%),
        rgba(0,0,0,0) 100%)`;

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
        WebkitMaskImage: maskImage,
        maskImage: maskImage,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
        willChange: 'opacity, transform'
      }}
    >
      {text}
    </div>
  );
}
