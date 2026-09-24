import TextFadeScroll from '../components/TextFadeScroll'
import CounterAnimation from '../components/CounterAnimation'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function AboutSkillsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="about-section-3">
      <div className="skills-header">
        <TextFadeScroll
          text={
            <>
              <h2 className="skills-title">{t.aboutSkills.title}</h2>
              <p className="skills-subtitle">
                {t.aboutSkills.subtitle}
              </p>
            </>
          }
          direction="Bottom → Top"
        />
      </div>

      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skill-card">
          <TextFadeScroll
            text={
              <>
                <div className="skill-percentage">
                  <CounterAnimation target={30} duration={2000} />
                </div>
                <h3 className="skill-label">HTML</h3>
                <p className="skill-description">
                  {t.aboutSkills.skills.html.description}
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
                  {t.aboutSkills.skills.css.description}
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
                  {t.aboutSkills.skills.javascript.description}
                </p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        {/* Tools & Software */}
        <div className="skill-card">
          <TextFadeScroll
            text={
              <>
                <div className="skill-percentage">
                  <CounterAnimation target={10} duration={2000} />
                </div>
                <h3 className="skill-label">{t.aboutSkills.skills.ciscoPacketTracer.label}</h3>
                <p className="skill-description">
                  {t.aboutSkills.skills.ciscoPacketTracer.description}
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
                  {t.aboutSkills.skills.canva.description}
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
                  {t.aboutSkills.skills.winbox.description}
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
