import TextFadeScroll from '../components/TextFadeScroll'
import RadiusOnScroll from '../components/RadiusOnScroll'
import MarqueeText from '../components/MarqueeText'
import wisnuPhoto from '../assets/me 5.png'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function AboutMeSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about-me" className="about-me-section-wrapper">
      <RadiusOnScroll startRadius={100} endRadius={0} startScale={0.8} endScale={1.15}>
        <div className="about-me-section">
          {/* Marquee Text */}
          <div className="marquee-wrapper">
            <MarqueeText text={t.aboutMe.marquee} speed={80} />
          </div>

          {/* Main Content */}
          <div className="about-me-content">
            {/* Photo */}
            <div className="about-me-photo-wrapper">
              <div className="about-me-photo">
                <img 
                  src={wisnuPhoto}
                  alt="Wisnu"
                />
              </div>
            </div>

            {/* Description */}
            <div className="about-me-description">
              <TextFadeScroll
                text={
                  <>
                    <h2 className="about-me-title">
                      {t.aboutMe.title}
                    </h2>
                    <p className="about-me-text">
                      {t.aboutMe.description}
                    </p>
                  </>
                }
                direction="Bottom → Top"
              />

              {/* Stats */}
              <div className="about-me-stats">
                <div className="stat-item">
                  <TextFadeScroll
                    text={
                      <>
                        <p className="stat-label">{t.aboutMe.stats.experience}</p>
                        <h3 className="stat-value">3+</h3>
                      </>
                    }
                    direction="Bottom → Top"
                  />
                </div>
                <div className="stat-item">
                  <TextFadeScroll
                    text={
                      <>
                        <p className="stat-label">{t.aboutMe.stats.projects}</p>
                        <h3 className="stat-value">2+</h3>
                      </>
                    }
                    direction="Bottom → Top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RadiusOnScroll>
    </section>
  )
}
