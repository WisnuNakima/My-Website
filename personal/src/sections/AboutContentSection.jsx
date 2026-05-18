import TextFadeScroll from '../components/TextFadeScroll'
import MarqueeText from '../components/MarqueeText'
import wisnuPhoto from '../assets/wisnu-about.jpeg'

export default function AboutContentSection() {
  return (
    <section className="about-section-2">
      {/* Marquee Text */}
      <div className="about-marquee-wrapper">
        <MarqueeText text="INTERESTED IN FRONTEND AND BACKEND • " speed={80} />
      </div>

      {/* Two Column Layout */}
      <div className="about-two-column">
        {/* Left - Text Content */}
        <div className="about-text-content">
          <TextFadeScroll
            text={
              <>
                <p className="about-paragraph">
                  Saya memiliki kemampuan soft skill berupa kemampuan menghafal sesuatu dengan cukup cepat serta mampu memotivasi diri sendiri agar tetap konsisten dalam menjalankan tugas dan kegiatan sehari-hari, 
                  disertai dengan sedikit kreativitas dalam menyelesaikan berbagai pekerjaan.
                </p>
                <p className="about-paragraph">
                 Dalam bidang hard skill, saya mampu membuat desain menggunakan Canva serta menyusun prompt AI agar hasil yang diberikan sesuai dengan kebutuhan dan keinginan saya. 
                 Selain itu, saya juga termasuk pribadi yang tidak suka menunda pekerjaan, 
                 sehingga saya selalu berusaha menyelesaikan tugas-tugas lebih awal sebelum akhir pekan tiba agar pekerjaan tetap teratur dan tidak menumpuk.
                </p>
              </>
            }
            direction="Bottom → Top"
          />
        </div>

        {/* Right - Photo */}
        <div className="about-photo-wrapper">
          <div className="about-photo-placeholder">
            <img src={wisnuPhoto} alt="Wisnu" />
          </div>
        </div>
      </div>
    </section>
  )
}
