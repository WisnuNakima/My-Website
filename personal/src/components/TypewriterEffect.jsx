import { useState, useEffect, useRef, useMemo } from 'react';

/**
 * TypewriterEffect - Dynamic typing animation component
 * Ported from Framer template
 */
export default function TypewriterEffect({
  words = ['Hello', 'World', 'Framer'],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1000,
  cursorColor = '#1a1a1a',
  cursorWidth = 2,
  cursorHeight = 100,
  fontSize = '1.2rem',
  fontWeight = '400',
  textColor = '#666',
  className = ''
}) {
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const timeoutRef = useRef(null);
  const blinkRef = useRef(null);
  
  const currentWord = words.length > 0 ? words[wordIndex % words.length] : '';

  // Typing/Deleting Effect
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    let delay = typingSpeed;

    if (!isDeleting && charIndex < currentWord.length) {
      delay = typingSpeed;
      timeoutRef.current = window.setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, delay);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end of word
      timeoutRef.current = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && charIndex > 0) {
      delay = deletingSpeed;
      timeoutRef.current = window.setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, delay);
    } else if (isDeleting && charIndex === 0) {
      // Pause before next word
      timeoutRef.current = window.setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }, pauseDuration);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, wordIndex, currentWord, typingSpeed, deletingSpeed, pauseDuration, words.length]);

  // Reset charIndex when wordIndex changes
  useEffect(() => {
    if (!isDeleting) {
      setCharIndex(0);
    }
  }, [wordIndex, isDeleting]);

  // Blinking Cursor Effect
  useEffect(() => {
    if (blinkRef.current) clearInterval(blinkRef.current);
    
    blinkRef.current = window.setInterval(() => {
      setShowCursor(v => !v);
    }, 500);

    return () => {
      if (blinkRef.current) clearInterval(blinkRef.current);
    };
  }, []);

  // Calculate cursor height based on font size
  const calculatedFontSize = useMemo(() => {
    if (typeof fontSize === 'string' && fontSize.endsWith('px')) {
      return parseFloat(fontSize);
    } else if (typeof fontSize === 'string' && fontSize.endsWith('rem')) {
      return parseFloat(fontSize) * 16; // Assuming 1rem = 16px
    } else if (typeof fontSize === 'number') {
      return fontSize;
    }
    return 19.2; // Default for 1.2rem
  }, [fontSize]);

  return (
    <span
      className={className}
      style={{
        fontSize,
        fontWeight,
        color: textColor,
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap'
      }}
      aria-live="polite"
    >
      {displayed}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          background: cursorColor,
          width: `${cursorWidth}px`,
          height: `${calculatedFontSize * (cursorHeight / 100)}px`,
          marginLeft: '4px',
          marginRight: '2px',
          verticalAlign: 'bottom',
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s',
          borderRadius: '2px'
        }}
      />
    </span>
  );
}
