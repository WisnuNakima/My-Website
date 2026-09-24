import MarqueeText from '../components/MarqueeText'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function InterestsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="interests" className="interests-section">
      {/* Top Diagonal Marquee - Left to Right (/) */}
      <div className="diagonal-marquee diagonal-forward">
        <div className="diagonal-content">
          <MarqueeText text={t.interests.marquee} speed={-60} />
        </div>
      </div>

      {/* Bottom Diagonal Marquee - Right to Left (\) */}
      <div className="diagonal-marquee diagonal-backward">
        <div className="diagonal-content">
          <MarqueeText text={t.interests.marquee} speed={60} />
        </div>
      </div>
    </section>
  )
}
