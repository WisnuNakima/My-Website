import TextFadeScroll from '../components/TextFadeScroll'
import wisnuImage from '../assets/wisnu.png'

export default function ContactHeroSection({ isVisible }) {
  return (
    <section className={`contact-hero ${isVisible ? 'visible' : ''}`}>
      <div className="contact-hero-content">
        <div className="contact-hero-text">
          <TextFadeScroll
            text={
              <>
                <h1 className="contact-hero-title">Let's Connect</h1>
                <p className="contact-hero-subtitle">
                  Hubungi saya untuk kolaborasi, pertanyaan, atau sekadar ngobrol tentang teknologi dan proyek menarik
                </p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>
        <div className="contact-hero-image-wrapper">
          <div className="contact-hero-image-placeholder">
            <img src={wisnuImage} alt="Wisnu" className="contact-hero-image" />
          </div>
        </div>
      </div>
    </section>
  )
}
