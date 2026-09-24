import { useState, useEffect } from 'react'
import RadiusOnScroll from '../components/RadiusOnScroll'
import InteractiveRobot from '../components/InteractiveRobot'
import PageTransition from '../components/PageTransition'
import TextFadeScroll from '../components/TextFadeScroll'
import LanguageToggle from '../components/LanguageToggle'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import WorksContentSection from '../sections/WorksContentSection'
import '../App.css'
import './Works.css'

function Works() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [localTime, setLocalTime] = useState('')

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

  // Handle scroll for navbar animation
  useEffect(() => {
    const handleScroll = () => {
      // Navbar will hide after scrolling past 300px
      setScrolled(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev)
  }

  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navbar - Only visible in header section */}
      <nav className={`navbar ${scrolled ? 'hidden' : ''}`}>
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M10 10 L30 10 L20 30 Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="nav-right">
          <div className="nav-menu">
            <a href="/" className="nav-link">{t.nav.home}</a>
            <a href="/about" className="nav-link">{t.nav.about}</a>
            <a href="/works" className="nav-link active">{t.nav.works}</a>
          </div>
          <LanguageToggle />
          <button className="contact-btn" onClick={() => window.location.href = '/contact'}>{t.nav.contact}</button>
        </div>
      </nav>

      {/* Hamburger Menu Button - Visible after scrolling */}
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
            <span>{t.nav.home}</span>
            <span className="sidebar-plus">+</span>
          </a>
          <a href="/about" className="sidebar-link" onClick={handleMenuClose}>
            <span>{t.nav.about}</span>
            <span className="sidebar-plus">+</span>
          </a>
          <a href="/works" className="sidebar-link" onClick={handleMenuClose}>
            <span>{t.nav.works}</span>
            <span className="sidebar-plus">+</span>
          </a>
          <a href="/contact" className="sidebar-link" onClick={handleMenuClose}>
            <span>{t.nav.contact}</span>
            <span className="sidebar-plus">+</span>
          </a>
        </nav>

        <div className="sidebar-card">
          <RadiusOnScroll startRadius={24} endRadius={24} startScale={1} endScale={1}>
            <div className="sidebar-card-content">
              <div className="sidebar-card-emoji">👋</div>
              <p className="sidebar-card-title">{t.sidebar.greeting}</p>
              <p className="sidebar-card-text">{t.sidebar.intro}</p>
            </div>
          </RadiusOnScroll>
        </div>

        <div className="sidebar-footer">
          <p>{t.footer.madeBy}</p>
          <p>{t.footer.copyright}</p>
        </div>
      </div>

      {/* Works Content */}
      <PageTransition>
      <WorksContentSection />

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          {/* Footer Top */}
          <div className="footer-top">
            {/* Links */}
            <div className="footer-column">
              <h4 className="footer-heading">LINKS</h4>
              <ul className="footer-links">
                <li><a href="/">{t.nav.home}</a></li>
                <li><a href="/works">{t.nav.works}</a></li>
                <li><a href="/about">{t.nav.about}</a></li>
                <li><a href="/contact">{t.nav.contact}</a></li>
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
              <h4 className="footer-heading">{language === 'en' ? 'LOCAL TIME' : 'WAKTU LOKAL'}</h4>
              <p className="footer-time">{localTime}</p>
            </div>

            {/* Version */}
            <div className="footer-column">
              <h4 className="footer-heading">{language === 'en' ? 'VERSION' : 'VERSI'}</h4>
              <p className="footer-version">{t.footer.copyright} Edition</p>
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

export default Works
