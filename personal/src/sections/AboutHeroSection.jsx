import TextFadeScroll from '../components/TextFadeScroll'

export default function AboutHeroSection({ isVisible }) {
  return (
    <section className={`about-hero ${isVisible ? 'visible' : ''}`}>
      <div className="about-hero-content">
        <TextFadeScroll
          text={
            <>
              <h1 className="about-hero-title">About Me</h1>
              <p className="about-hero-subtitle">
                Saya memiliki hobi bermain game, mendengarkan musik, dan membeli berbagai mainan untuk koleksi pribadi meskipun saya sudah dewasa, 
                karena hal tersebut menjadi salah satu cara saya untuk menikmati waktu luang dan mengekspresikan minat yang saya sukai sejak lama. 
                Selain itu, saya juga memiliki keinginan besar untuk dapat bekerja atau berlibur di luar negeri agar bisa mendapatkan pengalaman baru, mengenal budaya yang berbeda, serta memperluas wawasan dan relasi di masa depan.
              </p>
            </>
          }
          direction="Bottom → Top"
        />
      </div>
    </section>
  )
}
