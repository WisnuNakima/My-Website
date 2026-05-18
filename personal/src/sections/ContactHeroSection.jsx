import TextFadeScroll from '../components/TextFadeScroll'

export default function ContactHeroSection({ isVisible }) {
  return (
    <section className={`contact-hero ${isVisible ? 'visible' : ''}`}>
      <div className="contact-hero-content">
        <TextFadeScroll
          text={
            <>
              <h1 className="contact-hero-title">Let's Connect</h1>
              <p className="contact-hero-subtitle">
                Hubungi saya untuk kolaborasi, pertanyaan, atau sekadar ngobrol tentang teknologi dan proyek menarik
              </p>
            </>
          }
          direction="Bottom → Top"
        />
      </div>
    </section>
  )
}
