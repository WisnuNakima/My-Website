import TextFadeScroll from '../components/TextFadeScroll'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function AboutHeroSection({ isVisible }) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className={`about-hero ${isVisible ? 'visible' : ''}`}>
      <div className="about-hero-content">
        <TextFadeScroll
          text={
            <>
              <h1 className="about-hero-title">{t.aboutHero.title}</h1>
              <p className="about-hero-subtitle">
                {t.aboutHero.subtitle}
              </p>
            </>
          }
          direction="Bottom → Top"
        />
      </div>
    </section>
  )
}
