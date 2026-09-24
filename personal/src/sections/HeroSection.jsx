import NovaGlow from '../components/NovaGlow'
import TypewriterEffect from '../components/TypewriterEffect'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="sphere-container">
          <NovaGlow 
            hue={280} 
            hoverIntensity={0.3} 
            rotateOnHover={true} 
          />
        </div>
        <div className="hero-text">
          <p className="greeting">{t.hero.greeting}</p>
          <h1 className="title">
            <TypewriterEffect 
              words={t.hero.typewriterWords}
              typingSpeed={100}
              deletingSpeed={60}
              pauseDuration={2000}
              cursorColor="#1a1a1a"
              cursorWidth={3}
              cursorHeight={90}
              fontSize="inherit"
              fontWeight="inherit"
              textColor="inherit"
            />
          </h1>
        </div>
      </div>
    </section>
  )
}
