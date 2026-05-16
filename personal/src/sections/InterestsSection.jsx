import MarqueeText from '../components/MarqueeText'

export default function InterestsSection() {
  return (
    <section id="interests" className="interests-section">
      {/* Top Diagonal Marquee - Left to Right (/) */}
      <div className="diagonal-marquee diagonal-forward">
        <div className="diagonal-content">
          <MarqueeText text="MUSIC LOVER ✦ HISTORY LOVER ✦ MOVIE LOVER ✦ " speed={-60} />
        </div>
      </div>

      {/* Bottom Diagonal Marquee - Right to Left (\) */}
      <div className="diagonal-marquee diagonal-backward">
        <div className="diagonal-content">
          <MarqueeText text="MUSIC LOVER ✦ HISTORY LOVER ✦ MOVIE LOVER ✦ " speed={60} />
        </div>
      </div>
    </section>
  )
}
