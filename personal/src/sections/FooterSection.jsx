import TextFadeScroll from '../components/TextFadeScroll'
import InteractiveRobot from '../components/InteractiveRobot'

export default function FooterSection({ localTime }) {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Footer Top */}
        <div className="footer-top">
          {/* Links */}
          <div className="footer-column">
            <h4 className="footer-heading">LINKS</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#works">Work</a></li>
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
  )
}
