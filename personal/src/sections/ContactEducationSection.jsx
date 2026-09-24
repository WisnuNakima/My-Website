import TextFadeScroll from '../components/TextFadeScroll'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function ContactEducationSection({ educationTitleColor, educationTextColor, educationRoleColor, educationPeriodColor }) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="contact-section-education" style={{ '--education-title-color': educationTitleColor, '--education-text-color': educationTextColor, '--education-role-color': educationRoleColor, '--education-period-color': educationPeriodColor }}>
      <div className="contact-section-header">
        <TextFadeScroll
          text={<h2 className="contact-section-title">{t.contactEducation.dataTitle}</h2>}
          direction="Bottom → Top"
        />
      </div>

      <div className="education-list">
        <div className="education-item">
          <TextFadeScroll
            text={
              <>
                <div className="education-period">{t.contactEducation.timeline.tk.period}</div>
                <h3 className="education-school">{t.contactEducation.timeline.tk.school}</h3>
                <p className="education-role">{t.contactEducation.timeline.tk.role}</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="education-item">
          <TextFadeScroll
            text={
              <>
                <div className="education-period">{t.contactEducation.timeline.sd.period}</div>
                <h3 className="education-school">{t.contactEducation.timeline.sd.school}</h3>
                <p className="education-role">{t.contactEducation.timeline.sd.role}</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="education-item">
          <TextFadeScroll
            text={
              <>
                <div className="education-period">{t.contactEducation.timeline.smp.period}</div>
                <h3 className="education-school">{t.contactEducation.timeline.smp.school}</h3>
                <p className="education-role">{t.contactEducation.timeline.smp.role}</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="education-item">
          <TextFadeScroll
            text={
              <>
                <div className="education-period">{t.contactEducation.timeline.smk.period}</div>
                <h3 className="education-school">{t.contactEducation.timeline.smk.school}</h3>
                <p className="education-role">{t.contactEducation.timeline.smk.role}</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>
      </div>
    </section>
  )
}
