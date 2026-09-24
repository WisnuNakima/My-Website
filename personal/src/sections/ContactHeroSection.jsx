import TextFadeScroll from '../components/TextFadeScroll'
import wisnuImage from '../assets/me2.png'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function ContactHeroSection({ isVisible }) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className={`contact-hero ${isVisible ? 'visible' : ''}`}>
      <div className="contact-hero-content">
        <div className="contact-hero-text">
          <TextFadeScroll
            text={
              <>
                <h1 className="contact-hero-title">{t.contactHero.connectTitle}</h1>
                <p className="contact-hero-subtitle">
                  {t.contactHero.connectSubtitle}
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
