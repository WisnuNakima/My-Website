import TextFadeScroll from '../components/TextFadeScroll'
import RadiusOnScroll from '../components/RadiusOnScroll'
import MarqueeText from '../components/MarqueeText'
import wisnuPhoto from '../assets/wisnu.png'

export default function AboutMeSection() {
  return (
    <section id="about-me" className="about-me-section-wrapper">
      <RadiusOnScroll startRadius={100} endRadius={0} startScale={0.8} endScale={1.15}>
        <div className="about-me-section">
          {/* Marquee Text */}
          <div className="marquee-wrapper">
            <MarqueeText text="INTERESTED IN FRONTEND AND BACKEND • " speed={80} />
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
                      Saya berminat pada pengembangan website terutama di bagian Frontend dan Backend.
                    </h2>
                    <p className="about-me-text">
                      Saya tidak punya pengalaman lomba, organisasi, atau PKL tetapi, saya punya pengalaman dalam mendesain dan membuat webiste. Saya juga sedang terus belajar dalam bidang pengembangan website terutama dalam bidang Frontend dan Backend
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
                        <p className="stat-label">MONTHS OF EXPERIENCE</p>
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
                        <p className="stat-label">PROJECTS COMPLETED</p>
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
