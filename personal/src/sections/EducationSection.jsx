import { useRef } from 'react'
import TextFadeScroll from '../components/TextFadeScroll'

export default function EducationSection({ pathProgress, timelineRef }) {
  return (
    <section id="education" className="education-section" ref={timelineRef}>
      <div className="education-header">
        <TextFadeScroll 
          text={
            <h2 className="education-title">
              Jelajahi perjalanan hidup saya...
            </h2>
          }
          direction="Bottom → Top"
        />
      </div>

      <div className="timeline-container">
        {/* SVG Path - Animated on Scroll */}
        <svg className="timeline-path" viewBox="0 0 1000 2400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c4ff00" stopOpacity="0" />
              <stop offset="5%" stopColor="#c4ff00" stopOpacity="1" />
              <stop offset="95%" stopColor="#c4ff00" stopOpacity="1" />
              <stop offset="100%" stopColor="#c4ff00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="path-line"
            d="M 100 0 Q 100 200, 500 300 T 900 600 Q 900 800, 500 900 T 100 1200 Q 100 1400, 500 1500 T 900 1800 Q 900 2000, 500 2100 T 100 2400"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="50"
            strokeLinecap="round"
            strokeDasharray="4000"
            strokeDashoffset={4000 - (pathProgress * 4000)}
            style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
          />
        </svg>

        {/* Vertical Line in Center */}
        <div className="timeline-line"></div>

        {/* Timeline Items */}
        <div className="timeline-items">
          {/* Item 1 - TK (Left) */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <TextFadeScroll 
                text={
                  <>
                    <h3 className="timeline-school">TK Busthanul Atfal 36</h3>
                    <p className="timeline-role">Kindergarten Student</p>
                    <p className="timeline-description">
                      Pada sekitar tahun 2014 saya masuk TK yang bernama TK Bustanul Athfal.
                    </p>
                    <p className="timeline-period">2014 - 2016</p>
                  </>
                }
                direction="Bottom → Top"
                edgePct={30}
              />
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* Item 2 - SD (Right) */}
          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <TextFadeScroll 
                text={
                  <>
                    <h3 className="timeline-school">SD N Lamper Kidul 01</h3>
                    <p className="timeline-role">Elementary School Student</p>
                    <p className="timeline-description">
                      Lalu, pada sekitar tahun 2016 saya masuk SDN Lamper Kidul 01. Karena pada tahun 2019 terjadi pandemi COVID-19, akhirnya, saat saya kelas 5 dan 6 pembelajaran dilakukan secara daring.
                    </p>
                    <p className="timeline-period">2016 - 2021</p>
                  </>
                }
                direction="Bottom → Top"
                edgePct={30}
              />
            </div>
          </div>

          {/* Item 3 - SMP (Left) */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <TextFadeScroll 
                text={
                  <>
                    <h3 className="timeline-school">SMP N 27 Semarang</h3>
                    <p className="timeline-role">Junior High School Student</p>
                    <p className="timeline-description">
                      Lalu, pada tahun 2021 saya masuk SMPN 27 Semarang. Ini adalah masa paling seru dalam hidup saya menurut saya sendiri. 
                    </p>
                    <p className="timeline-period">2021 - 2024</p>
                  </>
                }
                direction="Bottom → Top"
                edgePct={30}
              />
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* Item 4 - SMK (Right) */}
          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <TextFadeScroll 
                text={
                  <>
                    <h3 className="timeline-school">SMK N 7 Semarang</h3>
                    <p className="timeline-role">Vocational High School Student (SIJA)</p>
                    <p className="timeline-description">
                      Nah, pada tahun 2024 saya masuk SMKN 7 Semarang. Semoga kedepannya, saya bisa belajar dengan serius dan menjadi sukses di masa depan.
                    </p>
                    <p className="timeline-period">2024 - PRESENT</p>
                  </>
                }
                direction="Bottom → Top"
                edgePct={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
