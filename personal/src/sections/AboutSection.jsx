import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function AboutSection({ scrolled }) {
  const { language } = useLanguage()
  const t = translations[language]

  const aboutTitle = language === 'en' 
    ? "Hello, I'm Wisnu – My full name is Wisnu Nakima Farras Yovidevano and I am someone who really loves music."
    : "Halo I'm Wisnu – Nama panjang saya adalah Wisnu Nakima Farras Yovidevano dan saya adalah seseorang yang sangat menyukai musik."

  const aboutDescription = language === 'en'
    ? "I am an only child. I was born and raised in Semarang, Central Java. Both my father and mother are also from Semarang."
    : "Saya adalah seorang anak tunggal. Saya lahir dan besar di Semarang, Jawa Tengah. Ayah saya dan ibu saya, keduanya berasal dari Semarang juga."

  const scrollToExplore = language === 'en' ? 'Scroll to Explore' : 'Gulir untuk Menjelajah'
  const myStory = language === 'en' ? 'My Short Story' : 'Cerita Singkat Saya'

  return (
    <>
      {/* Curved Divider */}
      <div className="curved-divider">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#1a1a1a"/>
        </svg>
      </div>

      {/* About Section - Dark Background */}
      <section id="about" className="about-section">
        {/* Scroll Indicators - Moved to section 2 */}
        <div className={`scroll-indicators-section2 ${scrolled ? 'visible' : ''}`}>
          <button className="scroll-to-explore">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L8 14M8 14L3 9M8 14L13 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{scrollToExplore}</span>
          </button>
          <span className="my-story">{myStory}</span>
        </div>

        <div className={`about-content ${scrolled ? 'visible' : ''}`}>
          <h2 className="about-title">
            {aboutTitle}
          </h2>
          
          <p className="about-description">
            {aboutDescription}
          </p>
          
          <div className="about-actions">
            <a href="/about" className="about-btn">{t.about.title}</a>
            <a href="/about" className="arrow-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
