import NovaGlow from '../components/NovaGlow'
import TypewriterEffect from '../components/TypewriterEffect'

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="sphere-container">
          <NovaGlow 
            hue={280} 
            hoverIntensity={0.3} 
            rotateOnHover={true} 
          />
        </div>
        <div className="hero-text">
          <p className="greeting">Hi! I'm Wisnu</p>
          <h1 className="title">
            <TypewriterEffect 
              words={['Interested in Front-End', 'Interested in Back-End']}
              typingSpeed={100}
              deletingSpeed={60}
              pauseDuration={2000}
              cursorColor="#1a1a1a"
              cursorWidth={3}
              cursorHeight={90}
              fontSize="inherit"
              fontWeight="inherit"
              textColor="inherit"
            />
          </h1>
        </div>
      </div>
    </section>
  )
}
