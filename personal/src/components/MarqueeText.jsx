import { useEffect, useRef } from 'react';

/**
 * MarqueeText - Infinite scrolling text from right to left or left to right
 */
export default function MarqueeText({ text, speed = 50 }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId;
    let position = 0;

    const animate = () => {
      position -= speed / 60; // 60fps, negative speed = reverse direction
      
      const textWidth = marquee.scrollWidth / 2; // Divide by 2 because we duplicate
      
      if (speed > 0) {
        // Normal direction (right to left)
        if (Math.abs(position) >= textWidth) {
          position = 0;
        }
      } else {
        // Reverse direction (left to right)
        if (position >= 0) {
          position = -textWidth;
        }
      }
      
      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed]);

  return (
    <div className="marquee-container">
      <div ref={marqueeRef} className="marquee-content">
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
}
