import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TextFadeScroll from '../components/TextFadeScroll'
import RadiusOnScroll from '../components/RadiusOnScroll'
import MarqueeText from '../components/MarqueeText'
import InteractiveRobot from '../components/InteractiveRobot'
import '../App.css'
import './ProjectDetail.css'
import project1Image from '../assets/website 1.png'
import project2Image from '../assets/website 2.png'
import project3Image from '../assets/desainmug.png'
import project4Image from '../assets/websitesejarah.png'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [exploreProgress, setExploreProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [backButtonVisible, setBackButtonVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [localTime, setLocalTime] = useState('')

  const projects = {
    'paperplay-company-profile': {
      title: 'Website\nPertama Saya',
      subtitle: 'Website Pertama Saya',
      image: project1Image,
      description: 'Ini adalah tugas jurusan dan web pertama saya. Saya membuat web ini sekitar 8 jam non-stop dengan melihat tutorial di youtube.',
      link: 'https://github.com/WisnuNakima/Website-Pertama-Saya.git',
      tech: ['HTML', 'CSS']
    },
    'smkn-8-graduation-website': {
      title: 'Website\nGame Journal &\nReview',
      subtitle: 'Website Game Journal & Review',
      image: project2Image,
      description: 'Ini juga merupakan tugas website kelompok dari jurusan dan kami membuat website ini dengan tema Game Journal dan Review.',
      link: 'https://game-journal-review.page.gd/',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    'kelas-kita': {
      title: 'Desain Mug',
      subtitle: 'Desain Mug',
      image: project3Image,
      description: 'Jadi saat itu ada tugas dari jurusan untuk mendesain sebuah mug dan saya kepikiran untuk mendesain mug itu dengan artis favorit saya.',
      link: 'https://canva.link/6d0sam7udnpr46t',
      tech: ['Canva']
    },
    'sis-absensi': {
      title: 'Website\nSejarah',
      subtitle: 'Website Sejarah',
      image: project4Image,
      description: 'Website ini adalah tugas mata pelajaran sejarah dan bertema tentang era reformasi Indonesia.',
      link: 'https://wisnunakima.github.io/Website-Sejarah/',
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  }

  const project = projects[id]

  useEffect(() => {
    if (!project) {
      navigate('/works')
    }
  }, [project, navigate])

  // Scroll to top when component mounts or project changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

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

  // Handle scroll for background transition
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.project-hero')
      const heroImage = document.querySelector('.project-hero-image')
      const exploreSection = document.querySelector('.explore-more-section')
      
      if (heroSection && heroImage) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        
        // Only start transition after scrolling past hero section
        if (scrollPosition > heroBottom - windowHeight) {
          const scrollFromHero = scrollPosition - (heroBottom - windowHeight)
          // Transition over 1 viewport height
          const progress = Math.min(scrollFromHero / windowHeight, 1)
          setScrollProgress(progress)
        } else {
          // Still in hero section, keep background light
          setScrollProgress(0)
        }
      }

      // Calculate transition from dark to light when approaching explore section
      if (exploreSection) {
        const exploreTop = exploreSection.offsetTop
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        
        // Start transition when explore section is about to enter viewport
        const exploreStartPoint = exploreTop - windowHeight
        const exploreScrollFromStart = Math.max(0, scrollPosition - exploreStartPoint)
        
        // Calculate progress from 0 to 1 for transition back to light
        const exploreProgressValue = Math.min(exploreScrollFromStart / (windowHeight * 0.6), 1)
        setExploreProgress(exploreProgressValue)
      }
      
      // Navbar and back button will hide after scrolling past hero section
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPos = window.scrollY + window.innerHeight / 2
        const shouldHide = scrollPos > heroBottom
        setScrolled(shouldHide)
        setBackButtonVisible(!shouldHide)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
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

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev)
  }

  const handleMenuClose = (e) => {
    // Don't prevent default navigation
    setMenuOpen(false)
  }

  if (!project) {
    return null
  }

  // Calculate background color based on scroll progress
  const lightColor = { r: 245, g: 245, b: 245 } // #f5f5f5
  const darkColor = { r: 26, g: 26, b: 26 } // #1a1a1a
  
  // Combine both transitions
  // scrollProgress goes from 0 to 1 (light to dark)
  // exploreProgress goes from 0 to 1 (dark to light)
  
  // Net progress: scrollProgress pushes toward dark, exploreProgress pushes back to light
  const netProgress = scrollProgress - exploreProgress
  const clampedProgress = Math.max(0, Math.min(1, netProgress))
  
  const currentColor = {
    r: Math.round(lightColor.r + (darkColor.r - lightColor.r) * clampedProgress),
    g: Math.round(lightColor.g + (darkColor.g - lightColor.g) * clampedProgress),
    b: Math.round(lightColor.b + (darkColor.b - lightColor.b) * clampedProgress)
  }

  const backgroundColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`

  return (
    <div className="app project-detail-page" style={{ backgroundColor }}>
      {/* Back Button - Only visible in section 1 */}
      <button 
        className={`back-button ${backButtonVisible ? '' : 'hidden'}`}
        onClick={() => navigate('/works')}
        aria-label="Back to Works"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Back</span>
      </button>

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
            <a href="/works" className="nav-link active">Works</a>
          </div>
          <button className="contact-btn" onClick={() => window.location.href = '/contact'}>Contact</button>
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
          <p>Made by Wisnu</p>
          <p>© 2026</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-content">
          <TextFadeScroll
            text={
              <h1 className="project-hero-title">
                {project.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < project.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
            }
            direction="Bottom → Top"
          />
          <p className="project-hero-subtitle">
            Disini anda akan melihat<br />lebih detail tentang projek saya
          </p>
          <div className="scroll-indicator">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v8m0 0l-4-4m4 4l4-4"></path>
            </svg>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>

        {/* Large Project Image */}
        <div className="project-hero-image">
          <img src={project.image} alt={project.title} />
        </div>
      </section>

      {/* Project Details Section */}
      <section className="project-details">
        <div className="project-details-content">
          {/* Left: Description and Link */}
          <div className="project-info">
            <p className="project-description">
              {project.description}
            </p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-btn"
            >
              <span>Live Website</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"></path>
              </svg>
            </a>
          </div>

          {/* Right: Tech Stack */}
          <div className="project-tech">
            <h3 className="project-tech-title">Client</h3>
            <p className="project-tech-client">Wisnu Nakima</p>
            <div className="project-tech-tags">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="explore-more-section">
        {/* Curved Marquee Text */}
        <div className="curved-marquee-wrapper">
          <MarqueeText text="EXPLORE MORE • MY WORKS • " speed={80} />
        </div>

        {/* Other Projects */}
        <div className="other-projects">
          <div className="other-projects-list">
            {Object.entries(projects)
              .filter(([slug]) => slug !== id)
              .map(([slug, proj]) => (
                <div
                  key={slug}
                  className="other-project-item"
                  onClick={() => navigate(`/works/${slug}`)}
                  onMouseEnter={() => setHoveredProject(slug)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Marquee Text with Image on Hover */}
                  {hoveredProject === slug && (
                    <div className="other-project-marquee">
                      <div className="other-project-marquee-content">
                        <span className="other-marquee-text-item">
                          {proj.title.replace(/\n/g, ' ')}
                          <img src={proj.image} alt={proj.title} className="other-marquee-image" />
                        </span>
                        <span className="other-marquee-text-item">
                          {proj.title.replace(/\n/g, ' ')}
                          <img src={proj.image} alt={proj.title} className="other-marquee-image" />
                        </span>
                        <span className="other-marquee-text-item">
                          {proj.title.replace(/\n/g, ' ')}
                          <img src={proj.image} alt={proj.title} className="other-marquee-image" />
                        </span>
                        <span className="other-marquee-text-item">
                          {proj.title.replace(/\n/g, ' ')}
                          <img src={proj.image} alt={proj.title} className="other-marquee-image" />
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Project Title */}
                  <TextFadeScroll
                    text={<h2 className="other-project-title">{proj.title.replace(/\n/g, ' ')}</h2>}
                    direction="Bottom → Top"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

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
                <li><a href="#contact">Contact</a></li>
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
    </div>
  )
}

export default ProjectDetail
