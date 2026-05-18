import { useEffect, useState } from 'react'
import RadiusOnScroll from '../components/RadiusOnScroll'
import InteractiveRobot from '../components/InteractiveRobot'
import PageTransition from '../components/PageTransition'
import TextFadeScroll from '../components/TextFadeScroll'
import ContactHeroSection from '../sections/ContactHeroSection'
import ContactPersonalDataSection from '../sections/ContactPersonalDataSection'
import ContactEducationSection from '../sections/ContactEducationSection'
import ContactSkillsSection from '../sections/ContactSkillsSection'
import ContactQuoteSection from '../sections/ContactQuoteSection'
import '../App.css'
import './Contact.css'

function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [localTime, setLocalTime] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [skillsProgress, setSkillsProgress] = useState(0)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  // Update local time (Indonesia - WIB)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }
      const timeString = now.toLocaleTimeString('en-US', options)
      setLocalTime(`${timeString} WIB`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Trigger fade in animation after mount
    setTimeout(() => setIsVisible(true), 100)

    // Handle scroll for navbar animation and background transition
    const handleScroll = () => {
      const heroSection = document.querySelector('.contact-hero')
      const personalSection = document.querySelector('.contact-section-personal')
      const skillsSection = document.querySelector('.contact-section-skills')
      
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight / 2
        setScrolled(scrollPosition > heroBottom)
      }

      // Calculate scroll progress for background transition (light to dark)
      if (heroSection && personalSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const personalTop = personalSection.offsetTop
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        
        // Start transition when approaching personal section
        const startPoint = heroBottom - windowHeight
        const scrollFromStart = Math.max(0, scrollPosition - startPoint)
        
        // Calculate progress from 0 to 1
        const progress = Math.min(scrollFromStart / (windowHeight * 0.8), 1)
        setScrollProgress(progress)
      }

      // Calculate scroll progress for skills section transition (dark to light)
      if (skillsSection) {
        const skillsTop = skillsSection.offsetTop
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        
        // Start transition when approaching skills section
        const skillsStartPoint = skillsTop - windowHeight
        const skillsScrollFromStart = Math.max(0, scrollPosition - skillsStartPoint)
        
        // Calculate progress from 0 to 1 for transition back to light
        const skillsProgressValue = Math.min(skillsScrollFromStart / (windowHeight * 0.8), 1)
        setSkillsProgress(skillsProgressValue)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuToggle = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setMenuOpen(prev => !prev)
  }

  const handleMenuClose = (e) => {
    setMenuOpen(false)
  }

  // Calculate background color based on scroll progress
  const lightColor = { r: 245, g: 245, b: 245 } // #f5f5f5
  const darkColor = { r: 26, g: 26, b: 26 } // #1a1a1a
  
  // Combine both transitions
  // scrollProgress goes from 0 to 1 (light to dark)
  // skillsProgress goes from 0 to 1 (dark to light)
  
  // Net progress: scrollProgress pushes toward dark, skillsProgress pushes back to light
  const netProgress = scrollProgress - skillsProgress
  const clampedProgress = Math.max(0, Math.min(1, netProgress))
  
  const currentColor = {
    r: Math.round(lightColor.r + (darkColor.r - lightColor.r) * clampedProgress),
    g: Math.round(lightColor.g + (darkColor.g - lightColor.g) * clampedProgress),
    b: Math.round(lightColor.b + (darkColor.b - lightColor.b) * clampedProgress)
  }

  const backgroundColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`

  // Calculate text color (inverse of background)
  const textColor = clampedProgress > 0.5 ? '#f5f5f5' : '#1a1a1a'
  const labelColor = clampedProgress > 0.5 ? 'rgba(245, 245, 245, 0.6)' : 'rgba(26, 26, 26, 0.6)'

  return (
    <div className="app" style={{ backgroundColor }}>
      {/* Navbar - Only visible in section 1 */}
      <nav className={`navbar ${scrolled ? 'hidden' : ''}`}>
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M10 10 L30 10 L20 30 Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="nav-right">
          <div className="nav-menu">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/works" className="nav-link">Works</a>
          </div>
          <button className="contact-btn active">Contact</button>
        </div>
      </nav>

      {/* Hamburger Menu Button - Visible from section 2 onwards */}
      <button 
        type="button"
        className={`hamburger-menu ${scrolled ? 'visible' : ''} ${menuOpen ? 'open' : ''}`}
        onClick={handleMenuToggle}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Sidebar Menu Overlay */}
      <div className={`sidebar-overlay ${menuOpen ? 'open' : ''}`} onClick={handleMenuClose}>
        <div className="sidebar-blur"></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${menuOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={handleMenuClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <nav className="sidebar-nav">
          <a href="/" className="sidebar-link" onClick={handleMenuClose}>
            <span>Home</span>
            <span className="sidebar-plus">+</span>
          </a>
          <a href="/about" className="sidebar-link" onClick={handleMenuClose}>
            <span>About</span>
            <span className="sidebar-plus">+</span>
          </a>
          <a href="/works" className="sidebar-link" onClick={handleMenuClose}>
            <span>Works</span>
            <span className="sidebar-plus">+</span>
          </a>
          <a href="/contact" className="sidebar-link" onClick={handleMenuClose}>
            <span>Contact</span>
            <span className="sidebar-plus">+</span>
          </a>
        </nav>

        <div className="sidebar-card">
          <RadiusOnScroll startRadius={24} endRadius={24} startScale={1} endScale={1}>
            <div className="sidebar-card-content">
              <div className="sidebar-card-emoji">👋</div>
              <p className="sidebar-card-title">Nice to see you!</p>
              <p className="sidebar-card-text">I'm Wisnu, Frontend and Backend Enthusiast based in Semarang, Indonesia</p>
            </div>
          </RadiusOnScroll>
        </div>

        <div className="sidebar-footer">
          <p>Made with ❤️ by Wisnu</p>
          <p>© 2026</p>
        </div>
      </div>

      <PageTransition>
        {/* Hero Section */}
        <ContactHeroSection isVisible={isVisible} />

        {/* Personal Data Section */}
        <ContactPersonalDataSection textColor={textColor} labelColor={labelColor} />

        {/* Education Section */}
        <ContactEducationSection 
          educationTitleColor={clampedProgress > 0.5 ? '#f5f5f5' : '#1a1a1a'}
          educationTextColor={clampedProgress > 0.5 ? '#f5f5f5' : '#1a1a1a'}
          educationRoleColor={clampedProgress > 0.5 ? 'rgba(245, 245, 245, 0.7)' : 'rgba(26, 26, 26, 0.7)'}
          educationPeriodColor={clampedProgress > 0.5 ? '#f5f5f5' : '#1a1a1a'}
        />

        {/* Skills Section */}
        <ContactSkillsSection skillsTitleColor={clampedProgress < 0.5 ? '#1a1a1a' : '#f5f5f5'} />

        {/* Quote Section */}
        <ContactQuoteSection 
          quoteTextColor={clampedProgress < 0.5 ? '#1a1a1a' : '#f5f5f5'}
          quoteAuthorColor={clampedProgress < 0.5 ? '#666' : 'rgba(245, 245, 245, 0.7)'}
        />

        {/* Footer Section */}
        <footer className="footer-section">
          <div className="footer-content">
            {/* Footer Top */}
            <div className="footer-top">
            {/* Links */}
            <div className="footer-column">
              <h4 className="footer-heading">LINKS</h4>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/works">Work</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="footer-column">
              <h4 className="footer-heading">SOCIALS</h4>
              <ul className="footer-links">
                <li><a href="mailto:wisnunakima09@gmail.com">Email</a></li>
                <li><a href="https://www.linkedin.com/in/wisnu-nakima-70884340a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://wa.me/6281212264997" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
                <li><a href="https://github.com/WisnuNakima" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
            </div>

            {/* Local Time */}
            <div className="footer-column">
              <h4 className="footer-heading">LOCAL TIME</h4>
              <p className="footer-time">{localTime}</p>
            </div>

            {/* Version */}
            <div className="footer-column">
              <h4 className="footer-heading">VERSION</h4>
              <p className="footer-version">2026 © Edition</p>
            </div>

            {/* Contact Buttons */}
            <div className="footer-contact">
              <a href="https://wa.me/6281212264997" className="footer-contact-btn" target="_blank" rel="noopener noreferrer">
                +6281212264997
              </a>
              <a href="mailto:wisnunakima09@gmail.com" className="footer-contact-btn">
                wisnunakima09@gmail.com
              </a>
            </div>
          </div>

          {/* Footer Main - Large Name with Robot */}
          <div className="footer-main">
            <div className="footer-robot">
              <InteractiveRobot />
            </div>
            <TextFadeScroll
              text={<h1 className="footer-name">WISNU</h1>}
              direction="Bottom → Top"
            />
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <button className="footer-scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12L12 8L16 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </footer>
      </PageTransition>
    </div>
  )
}

export default Contact