import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Monitor, 
  Cpu, 
  Zap, 
  Star,
  MapPin,
  Tv,
  ChevronDown
} from 'lucide-react';
import { useTranslation } from './hooks/useTranslation';
import heroImg from './assets/hero.png';
import gamesImg from './assets/games.png';
import logoImg from './assets/logo.png';

const App: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleLang = () => setIsLangOpen(!isLangOpen);
  const changeLang = (lang: 'tr' | 'en' | 'ar') => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
      </Helmet>

      {/* Slogan Bar */}
      <div className="top-bar">
        Keçiören'in en heyecanlandıran yeri
      </div>

      {/* Header */}
      <header>
        <div className="container nav-wrapper">
          <div className="logo-area">
            <img src={logoImg} alt="Asemm Logo" />
            <div>
              <span style={{ fontSize: '22px', fontWeight: 900, display: 'block', lineHeight: 1 }}>ASEMM</span>
              <span style={{ fontSize: '9px', color: 'var(--ps-blue)', fontWeight: 800, textTransform: 'uppercase' }}>PlayStation Cafe</span>
            </div>
          </div>

          <div className="nav-actions">
            <div className="lang-dropdown">
              <button className="lang-dropdown-btn" onClick={toggleLang}>
                <span>{language.toUpperCase()}</span>
                <ChevronDown size={14} style={{ transform: isLangOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </button>
              {isLangOpen && (
                <div className="lang-dropdown-menu">
                  <button onClick={() => changeLang('tr')}>TÜRKÇE</button>
                  <button onClick={() => changeLang('en')}>ENGLISH</button>
                  <button onClick={() => changeLang('ar')}>العربية</button>
                </div>
              )}
            </div>
            <a href="https://wa.me/905519815916" className="btn btn-primary">
              {t('whatsapp_cta')}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div style={{ color: 'var(--ps-blue)', fontWeight: 800, fontSize: '12px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase' }}>
                <Star size={14} fill="currentColor" />
                {t('ps5_status')}
              </div>
              <h1 className="title-large text-balance">
                {t('hero_title').split(':')[0]} <br />
                <span className="neon-text">{t('hero_title').split(':')[1]}</span>
              </h1>
              <p className="text-balance" style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '520px' }}>
                {t('hero_subtitle')}
              </p>
              <a href="https://wa.me/905519815916" className="btn btn-primary">
                <Phone size={18} style={{ marginRight: '8px' }} />
                {t('whatsapp_cta')}
              </a>
            </div>
            <div className="hero-image">
              <img src={heroImg} alt="Gaming Zone" />
            </div>
          </div>
        </div>
      </section>

      {/* Netflix & Cinema Section */}
      <section style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: '#E50914', fontWeight: 800, fontSize: '12px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', textTransform: 'uppercase' }}>
              <Tv size={16} />
              PREMIUM ENTERTAINMENT
            </div>
            <h2 className="title-section text-balance" style={{ marginBottom: '20px' }}>{t('cinema_title')}</h2>
            
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <p style={{ fontSize: '20px', color: 'white', marginBottom: '16px', fontWeight: 700, lineHeight: 1.3 }} className="text-balance">
                {t('cinema_subtitle')}
              </p>
              <p className="desc-text text-balance" style={{ fontSize: '15px' }}>
                {t('cinema_desc')}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
               <div style={{ padding: '10px 20px', border: '1px solid #E50914', borderRadius: '10px', color: '#E50914', fontWeight: 800, fontSize: '11px', textTransform: 'uppercase' }}>NETFLIX 4K</div>
               <div style={{ padding: '10px 20px', border: '1px solid var(--ps-blue)', borderRadius: '10px', color: 'var(--ps-blue)', fontWeight: 800, fontSize: '11px', textTransform: 'uppercase' }}>VIP CINEMA</div>
            </div>
          </div>
          
          <div style={{ maxWidth: '750px', margin: '0 auto', padding: '10px', background: '#1a1a22', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
             <div style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#E50914', fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900 }}>NETFLIX</span>
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="title-section">{t('features_title')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {[
              { icon: <Monitor size={36} />, title: t('feature_1_title'), desc: t('feature_1_desc') },
              { icon: <Cpu size={36} />, title: t('feature_2_title'), desc: t('feature_2_desc') },
              { icon: <Zap size={36} />, title: t('feature_3_title'), desc: t('feature_3_desc') },
            ].map((f, i) => (
              <div key={i} style={{ padding: '40px', background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ color: 'var(--ps-blue)', marginBottom: '24px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games */}
      <section style={{ padding: '80px 0', background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-image">
              <img src={gamesImg} alt="Games" style={{ borderRadius: '20px' }} />
            </div>
            <div className="hero-content" style={{ textAlign: 'left' }}>
              <h2 className="title-section" style={{ textAlign: 'left', marginBottom: '16px' }}>{t('games_title')}</h2>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', marginBottom: '32px' }}>{t('games_subtitle')}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
                {[
                  'FIFA 26', 
                  'Mortal Kombat 11', 
                  'PES 26', 
                  'Asphalt', 
                  'GTA V', 
                  'NBA 2K'
                ].map((game, i) => (
                  <div key={i} style={{ padding: '14px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ps-blue)' }}></div>
                    {game}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="hero-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="hero-content" style={{ textAlign: 'left' }}>
              <h2 className="title-section" style={{ textAlign: 'left', marginBottom: '32px' }}>{t('contact_title')}</h2>
              <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '12px', background: 'rgba(0, 114, 206, 0.1)', color: 'var(--ps-blue)', borderRadius: '12px' }}><MapPin size={22} /></div>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--ps-blue)', fontWeight: 900 }}>KONUM</div>
                  <div style={{ fontWeight: 700, fontSize: '15px' }}>{t('contact_address')}</div>
                </div>
              </div>
              <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '12px', background: 'rgba(0, 114, 206, 0.1)', color: 'var(--ps-blue)', borderRadius: '12px' }}><Phone size={22} /></div>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--ps-blue)', fontWeight: 900 }}>WHATSAPP</div>
                  <div style={{ fontWeight: 800, fontSize: '18px' }}>+90 551 981 59 16</div>
                </div>
              </div>
              <a href="https://wa.me/905519815916" className="btn btn-primary" style={{ width: '100%' }}>
                {t('whatsapp_cta')}
              </a>
            </div>
            <div style={{ padding: '40px', background: 'var(--bg-card)', borderRadius: '32px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.03)' }}>
               <InstagramIcon />
               <p style={{ marginTop: '20px', fontWeight: 700, fontSize: '15px' }}>En yeni turnuvalar için takipte kalın!</p>
               <a href="https://www.instagram.com/asemmplaystation/" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: '20px', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', color: 'white', width: '100%' }}>Instagram'a Katıl</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#05050a', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div className="logo-area">
               <img src={logoImg} alt="Asemm Logo" style={{ width: '32px', height: '32px' }} />
               <span style={{ fontWeight: 900, fontSize: '18px' }}>ASEMM</span>
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
              © 2026 ASEMM PS CAFE
            </div>
            <div style={{ fontWeight: 900, fontSize: '10px', color: 'var(--ps-blue)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Keçiören'in en heyecanlandıran yeri
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const InstagramIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--ps-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default App;
