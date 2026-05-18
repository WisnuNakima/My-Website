import TextFadeScroll from '../components/TextFadeScroll'

export default function ContactQuoteSection({ quoteTextColor, quoteAuthorColor }) {
  return (
    <section className="contact-section-quote" style={{ '--quote-text-color': quoteTextColor, '--quote-author-color': quoteAuthorColor }}>
      <div className="quote-wrapper">
        <TextFadeScroll
          text={
            <>
              <div className="quote-mark">"</div>
              <blockquote className="quote-text">
                Bentuk keputusasaan yang paling mengerikan adalah kamu tidak menjadi dirimu sendiri
              </blockquote>
              <div className="quote-author">— Søren Kierkegaard</div>
            </>
          }
          direction="Bottom → Top"
        />
      </div>
    </section>
  )
}
