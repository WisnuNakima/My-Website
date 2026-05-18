import TextFadeScroll from '../components/TextFadeScroll'
import CounterAnimation from '../components/CounterAnimation'

export default function AboutSkillsSection() {
  return (
    <section className="about-section-3">
      <div className="skills-header">
        <TextFadeScroll
          text={
            <>
              <h2 className="skills-title">My Skills</h2>
              <p className="skills-subtitle">
                Saya akan terus belajar sebanyak-banyaknya 
                agar ilmu yang saya pelajari agar berguna di masa depan
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
                  Saya sudah mempelajari dasar HTML untuk membuat struktur dan tampilan awal sebuah website sederhana.
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
                  Saya mempelajari dasar CSS untuk mengatur warna, font, dan tampilan website agar lebih menarik.
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
                  Saya baru memahami dasar JavaScript untuk membuat interaksi sederhana pada website.
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
                <h3 className="skill-label">Cisco Packet Tracer</h3>
                <p className="skill-description">
                  Saya dapat membuat topologi sederhana seperti topologi star di Cisco Packet Tracer
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
                  Saya cukup memahami Canva untuk membuat desain seperti poster, presentasi, dan konten visual lainnya.
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
                  Saya dapat melakukan konfigurasi jaringan sederhana di Winbox
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
