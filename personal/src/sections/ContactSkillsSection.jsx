import TextFadeScroll from '../components/TextFadeScroll'
import CounterAnimation from '../components/CounterAnimation'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function ContactSkillsSection({ skillsTitleColor }) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="contact-section-skills" style={{ '--skills-title-color': skillsTitleColor }}>
      <div className="contact-section-header">
        <TextFadeScroll
          text={<h2 className="contact-section-title">{t.contactSkills.dataTitle}</h2>}
          direction="Bottom → Top"
        />
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <TextFadeScroll
            text={
              <>
                <div className="skill-percentage">
                  <CounterAnimation target={30} duration={2000} />
                </div>
                <h3 className="skill-label">HTML</h3>
                <p className="skill-description">
                  {t.contactSkills.skills.html.description}
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
                  {t.contactSkills.skills.css.description}
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
                  {t.contactSkills.skills.javascript.description}
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
                <h3 className="skill-label">{t.contactSkills.skills.ciscoPacketTracer.label}</h3>
                <p className="skill-description">
                  {t.contactSkills.skills.ciscoPacketTracer.description}
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
                  {t.contactSkills.skills.canva.description}
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
                  {t.contactSkills.skills.winbox.description}
                </p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>
      </div>
    </section>
  )
}
