import TextFadeScroll from '../components/TextFadeScroll'
import MarqueeText from '../components/MarqueeText'
import wisnuPhoto from '../assets/me 3.png'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function AboutContentSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="about-section-2">
      {/* Marquee Text */}
      <div className="about-marquee-wrapper">
        <MarqueeText text={t.aboutContent.marquee} speed={80} />
      </div>

      {/* Two Column Layout */}
      <div className="about-two-column">
        {/* Left - Text Content */}
        <div className="about-text-content">
          <TextFadeScroll
            text={
              <>
                <p className="about-paragraph">
                  {t.aboutContent.paragraph1}
                </p>
                <p className="about-paragraph">
                  {t.aboutContent.paragraph2}
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
  )
}
