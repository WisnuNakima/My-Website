import TextFadeScroll from '../components/TextFadeScroll'

export default function ContactPersonalDataSection({ textColor, labelColor }) {
  return (
    <section className="contact-section-personal" style={{ '--text-color': textColor, '--label-color': labelColor }}>
      <div className="contact-section-header">
        <TextFadeScroll
          text={<h2 className="contact-section-title">Data Pribadi</h2>}
          direction="Bottom → Top"
        />
      </div>

      <div className="personal-data-grid">
        <div className="personal-data-item">
          <TextFadeScroll
            text={
              <>
                <h3 className="data-label">Nama Lengkap</h3>
                <p className="data-value">Wisnu Nakima Farras Yovidevano</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="personal-data-item">
          <TextFadeScroll
            text={
              <>
                <h3 className="data-label">Email</h3>
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
                <h3 className="data-label">WhatsApp</h3>
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
                <h3 className="data-label">Lokasi</h3>
                <p className="data-value">Semarang, Indonesia</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="personal-data-item">
          <TextFadeScroll
            text={
              <>
                <h3 className="data-label">GitHub</h3>
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
                <h3 className="data-label">LinkedIn</h3>
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
              <span>Download CV</span>
            </a>
          }
          direction="Bottom → Top"
          className="download-cv-wrapper"
        />
      </div>
    </section>
  )
}
