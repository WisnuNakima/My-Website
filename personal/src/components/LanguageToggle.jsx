import { useLanguage } from '../context/LanguageContext'
import './LanguageToggle.css'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button 
      type="button"
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      title={language === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
    >
      <div className={`toggle-slider ${language === 'id' ? 'active' : ''}`}>
        <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
        <span className={`lang-option ${language === 'id' ? 'active' : ''}`}>ID</span>
      </div>
    </button>
  )
}
