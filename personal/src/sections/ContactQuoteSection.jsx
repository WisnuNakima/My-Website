import TextFadeScroll from '../components/TextFadeScroll'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function ContactQuoteSection({ quoteTextColor, quoteAuthorColor }) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="contact-section-quote" style={{ '--quote-text-color': quoteTextColor, '--quote-author-color': quoteAuthorColor }}>
      <div className="quote-wrapper">
        <TextFadeScroll
          text={
            <>
              <div className="quote-mark">"</div>
              <blockquote className="quote-text">
                {t.contactQuote.quote.replace(/"/g, '')}
              </blockquote>
              <div className="quote-author">{t.contactQuote.author}</div>
            </>
          }
          direction="Bottom → Top"
        />
      </div>
    </section>
  )
}
