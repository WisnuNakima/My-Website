import TextFadeScroll from '../components/TextFadeScroll'

export default function ContactEducationSection({ educationTitleColor, educationTextColor, educationRoleColor, educationPeriodColor }) {
  return (
    <section className="contact-section-education" style={{ '--education-title-color': educationTitleColor, '--education-text-color': educationTextColor, '--education-role-color': educationRoleColor, '--education-period-color': educationPeriodColor }}>
      <div className="contact-section-header">
        <TextFadeScroll
          text={<h2 className="contact-section-title">Data Pendidikan</h2>}
          direction="Bottom → Top"
        />
      </div>

      <div className="education-list">
        <div className="education-item">
          <TextFadeScroll
            text={
              <>
                <div className="education-period">2014 - 2016</div>
                <h3 className="education-school">TK Busthanul Atfal 36</h3>
                <p className="education-role">Kindergarten Student</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="education-item">
          <TextFadeScroll
            text={
              <>
                <div className="education-period">2016 - 2021</div>
                <h3 className="education-school">SD N Lamper Kidul 01</h3>
                <p className="education-role">Elementary School Student</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="education-item">
          <TextFadeScroll
            text={
              <>
                <div className="education-period">2021 - 2024</div>
                <h3 className="education-school">SMP N 27 Semarang</h3>
                <p className="education-role">Junior High School Student</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        <div className="education-item">
          <TextFadeScroll
            text={
              <>
                <div className="education-period">2024 - PRESENT</div>
                <h3 className="education-school">SMK N 7 Semarang</h3>
                <p className="education-role">Vocational High School Student (SIJA)</p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>
      </div>
    </section>
  )
}
