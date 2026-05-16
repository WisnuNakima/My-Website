import { useEffect, useState } from 'react'
import TextFadeScroll from '../components/TextFadeScroll'
import MarqueeText from '../components/MarqueeText'
import RadiusOnScroll from '../components/RadiusOnScroll'
import InteractiveRobot from '../components/InteractiveRobot'
import CounterAnimation from '../components/CounterAnimation'
import PageTransition from '../components/PageTransition'
import wisnuPhoto from '../assets/wisnu-about.jpeg'
import '../App.css'
import './About.css'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [localTime, setLocalTime] = useState('')

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

    // Handle scroll for navbar animation
    const handleScroll = () => {
      const heroSection = document.querySelector('.about-hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight / 2
        setScrolled(scrollPosition > heroBottom)
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
    // Don't prevent default navigation
    setMenuOpen(false)
  }

  return (
    <div className="app">
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
            <a href="/about" className="nav-link active">About</a>
            <a href="/works" className="nav-link">Works</a>
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
          <p>Made with ❤️ by Wisnu</p>
          <p>© 2026</p>
        </div>
      </div>

      {/* About Content */}
      <PageTransition>
      <section className={`about-hero ${isVisible ? 'visible' : ''}`}>
        <div className="about-hero-content">
          <TextFadeScroll
            text={
              <>
                <h1 className="about-hero-title">About Me</h1>
                <p className="about-hero-subtitle">
                  Saya memiliki hobi bermain game, mendengarkan musik, dan membeli berbagai mainan untuk koleksi pribadi meskipun saya sudah dewasa, 
                  karena hal tersebut menjadi salah satu cara saya untuk menikmati waktu luang dan mengekspresikan minat yang saya sukai sejak lama. 
                  Selain itu, saya juga memiliki keinginan besar untuk dapat bekerja atau berlibur di luar negeri agar bisa mendapatkan pengalaman baru, mengenal budaya yang berbeda, serta memperluas wawasan dan relasi di masa depan.

                </p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>
      </section>

      {/* Section 2 - UI & UX Designer */}
      <section className="about-section-2">
        {/* Marquee Text */}
        <div className="about-marquee-wrapper">
          <MarqueeText text="INTERESTED IN FRONTEND AND BACKEND • " speed={80} />
        </div>

        {/* Two Column Layout */}
        <div className="about-two-column">
          {/* Left - Text Content */}
          <div className="about-text-content">
            <TextFadeScroll
              text={
                <>
                  <p className="about-paragraph">
                    Saya memiliki kemampuan soft skill berupa kemampuan menghafal sesuatu dengan cukup cepat serta mampu memotivasi diri sendiri agar tetap konsisten dalam menjalankan tugas dan kegiatan sehari-hari, 
                    disertai dengan sedikit kreativitas dalam menyelesaikan berbagai pekerjaan.
                  </p>
                  <p className="about-paragraph">
                   Dalam bidang hard skill, saya mampu membuat desain menggunakan Canva serta menyusun prompt AI agar hasil yang diberikan sesuai dengan kebutuhan dan keinginan saya. 
                   Selain itu, saya juga termasuk pribadi yang tidak suka menunda pekerjaan, 
                   sehingga saya selalu berusaha menyelesaikan tugas-tugas lebih awal sebelum akhir pekan tiba agar pekerjaan tetap teratur dan tidak menumpuk.
                  </p>
                </>
              }
              direction="Bottom → Top"
            />
          </div>

          {/* Right - Photo */}
          <div className="about-photo-wrapper">
            <div className="about-photo-placeholder">
              <img src={wisnuPhoto} alt="Wisnu" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Skills */}
      <section className="about-section-3">
        <div className="skills-header">
          <TextFadeScroll
            text={
              <>
                <h2 className="skills-title">My Skills</h2>
                <p className="skills-subtitle">
                  Saya akan terus belajar sebanyak-banyaknya 
                  agar ilmu yang saya pelajari agar berguna di masa depan
                </p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skill-card">
            <TextFadeScroll
              text={
                <>
                  <div className="skill-percentage">
                    <CounterAnimation target={30} duration={2000} />
                  </div>
                  <h3 className="skill-label">HTML</h3>
                  <p className="skill-description">
                    Saya sudah mempelajari dasar HTML untuk membuat struktur dan tampilan awal sebuah website sederhana.
                  </p>
                </>
              }
              direction="Bottom → Top"
            />
          </div>

          <div className="skill-card">
            <TextFadeScroll
              text={
                <>
                  <div className="skill-percentage">
                    <CounterAnimation target={15} duration={2000} />
                  </div>
                  <h3 className="skill-label">CSS</h3>
                  <p className="skill-description">
                    Saya mempelajari dasar CSS untuk mengatur warna, font, dan tampilan website agar lebih menarik.
                  </p>
                </>
              }
              direction="Bottom → Top"
            />
          </div>

          <div className="skill-card">
            <TextFadeScroll
              text={
                <>
                  <div className="skill-percentage">
                    <CounterAnimation target={5} duration={2000} />
                  </div>
                  <h3 className="skill-label">JavaScript</h3>
                  <p className="skill-description">
                    Saya baru memahami dasar JavaScript untuk membuat interaksi sederhana pada website.
                  </p>
                </>
              }
              direction="Bottom → Top"
            />
          </div>

          {/* Tools & Software */}
          <div className="skill-card">
            <TextFadeScroll
              text={
                <>
                  <div className="skill-percentage">
                    <CounterAnimation target={10} duration={2000} />
                  </div>
                  <h3 className="skill-label">Cisco Packet Tracer</h3>
                  <p className="skill-description">
                    Saya dapat membuat topologi sederhana seperti topologi star di Cisco Packet Tracer
                  </p>
                </>
              }
              direction="Bottom → Top"
            />
          </div>

          <div className="skill-card">
            <TextFadeScroll
              text={
                <>
                  <div className="skill-percentage">
                    <CounterAnimation target={75} duration={2000} />
                  </div>
                  <h3 className="skill-label">Canva</h3>
                  <p className="skill-description">
                    Saya cukup memahami Canva untuk membuat desain seperti poster, presentasi, dan konten visual lainnya.
                  </p>
                </>
              }
              direction="Bottom → Top"
            />
          </div>

          <div className="skill-card">
            <TextFadeScroll
              text={
                <>
                  <div className="skill-percentage">
                    <CounterAnimation target={10} duration={2000} />
                  </div>
                  <h3 className="skill-label">Winbox</h3>
                  <p className="skill-description">
                    Saya dapat melakukan konfigurasi jaringan sederhana di Winbox
                  </p>
                </>
              }
              direction="Bottom → Top"
            />
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

export default About
