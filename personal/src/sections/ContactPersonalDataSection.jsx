import TextFadeScroll from '../components/TextFadeScroll'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function ContactPersonalDataSection({ textColor, labelColor }) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="contact-section-personal" style={{ '--text-color': textColor, '--label-color': labelColor }}>
      <div className="contact-section-header">
        <TextFadeScroll
          text={<h2 className="contact-section-title">{t.contactPersonalData.title}</h2>}
          direction="Bottom → Top"
        />
      </div>

      <div className="personal-data-grid">
        <div className="personal-data-item">
          <TextFadeScroll
            text={
              <>
                <h3 className="data-label">{t.contactPersonalData.labels.fullName}</h3>
                <p className="data-value">{t.contactPersonalData.values.fullName}</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="personal-data-item">
          <TextFadeScroll
            text={
              <>
                <h3 className="data-label">{t.contactPersonalData.labels.email}</h3>
                <a href="mailto:wisnunakima09@gmail.com" className="data-value data-link">
                  wisnunakima09@gmail.com
                </a>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="personal-data-item">
          <TextFadeScroll
            text={
              <>
                <h3 className="data-label">{t.contactPersonalData.labels.whatsapp}</h3>
                <a href="https://wa.me/6281212264997" target="_blank" rel="noopener noreferrer" className="data-value data-link">
                  +62 812-1226-4997
                </a>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="personal-data-item">
          <TextFadeScroll
            text={
              <>
                <h3 className="data-label">{t.contactPersonalData.labels.location}</h3>
                <p className="data-value">{t.contactPersonalData.values.location}</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="personal-data-item">
          <TextFadeScroll
            text={
              <>
                <h3 className="data-label">{t.contactPersonalData.labels.github}</h3>
                <a href="https://github.com/WisnuNakima" target="_blank" rel="noopener noreferrer" className="data-value data-link">
                  github.com/WisnuNakima
                </a>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="personal-data-item">
          <TextFadeScroll
            text={
              <>
                <h3 className="data-label">{t.contactPersonalData.labels.linkedin}</h3>
                <a href="https://www.linkedin.com/in/wisnu-nakima-70884340a/" target="_blank" rel="noopener noreferrer" className="data-value data-link">
                  linkedin.com/in/wisnu-nakima
                </a>
              </>
            }
            direction="Bottom → Top"
          />
        </div>
      </div>

      {/* Download CV Button */}
      <div className="download-cv-container">
        <TextFadeScroll
          text={
            <a href="/Wisnu-CV.pdf" download="Wisnu-Nakima-CV.pdf" className="download-cv-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>{t.contactPersonalData.downloadCV}</span>
            </a>
          }
          direction="Bottom → Top"
          className="download-cv-wrapper"
        />
      </div>
    </section>
  )
}
