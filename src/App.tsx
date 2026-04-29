import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Monitor, 
  Cpu, 
  Zap, 
  Globe,
  Star,
  MapPin
} from 'lucide-react';
import { useTranslation } from './hooks/useTranslation';
import heroImg from './assets/hero.png';
import gamesImg from './assets/games.png';
import logoImg from './assets/logo.png';

const App: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
      </Helmet>

      {/* Proper Header */}
      <header>
        <div className="container">
          <div className="logo-area">
            <img src={logoImg} alt="Asemm Logo" />
            <div>
              <span style={{ fontSize: '24px', fontWeight: 900, display: 'block', lineHeight: 1 }}>ASEMM</span>
              <span style={{ fontSize: '10px', color: 'var(--ps-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>PlayStation Cafe</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="lang-dropdown">
              <button className="lang-btn">
                <Globe size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                {language.toUpperCase()}
              </button>
              <div className="lang-menu">
                <button onClick={() => setLanguage('tr')}>TÜRKÇE</button>
                <button onClick={() => setLanguage('en')}>ENGLISH</button>
                <button onClick={() => setLanguage('ar')}>العربية</button>
              </div>
            </div>
            <a href="https://wa.me/905519815916" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
              {t('whatsapp_cta')}
            </a>
          </div>
        </div>
      </header>

      {/* Proper Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div style={{ color: 'var(--ps-blue)', fontWeight: 800, fontSize: '14px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star size={16} fill="currentColor" />
                {t('ps5_status')}
              </div>
              <h1>
                {t('hero_title').split(':')[0]} <br />
                <span className="neon-text">{t('hero_title').split(':')[1]}</span>
              </h1>
              <p>{t('hero_subtitle')}</p>
              <a href="https://wa.me/905519815916" className="btn btn-primary">
                <Phone size={20} />
                {t('whatsapp_cta')}
              </a>
            </div>
            <div className="hero-image">
              <img src={heroImg} alt="Gaming Zone" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ background: '#08080a' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('features_title')}</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--ps-blue)', margin: '0 auto' }}></div>
          </div>
          <div className="features-grid">
            {[
              { icon: <Monitor size={40} />, title: t('feature_1_title'), desc: t('feature_1_desc') },
              { icon: <Cpu size={40} />, title: t('feature_2_title'), desc: t('feature_2_desc') },
              { icon: <Zap size={40} />, title: t('feature_3_title'), desc: t('feature_3_desc') },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div style={{ color: 'var(--ps-blue)', marginBottom: '24px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Catalog */}
      <section className="section-padding">
        <div className="container">
          <div className="hero-grid" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
            <div className="hero-image">
              <img src={gamesImg} alt="Games Catalog" style={{ borderRadius: '24px' }} />
            </div>
            <div className="hero-content">
              <h2 style={{ fontSize: '48px', marginBottom: '24px' }}>{t('games_title')}</h2>
              <p style={{ fontSize: '18px', marginBottom: '32px' }}>{t('games_subtitle')}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  'FIFA 22, 24, 26', 
                  'PES 18, 21, 26', 
                  'Assassin\'s Creed', 
                  'GTA V', 
                  'NBA 2K', 
                  'Asphalt'
                ].map((game, i) => (
                  <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ps-blue)' }}></div>
                    {game}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding" style={{ background: '#08080a' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h2 style={{ fontSize: '48px', marginBottom: '32px' }}>{t('contact_title')}</h2>
              <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '12px', background: 'var(--ps-blue)', borderRadius: '12px' }}><MapPin size={24} /></div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--ps-blue)', fontWeight: 800 }}>KONUM</div>
                  <div style={{ fontWeight: 'bold' }}>{t('contact_address')}</div>
                </div>
              </div>
              <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '12px', background: 'var(--ps-blue)', borderRadius: '12px' }}><Phone size={24} /></div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--ps-blue)', fontWeight: 800 }}>WHATSAPP</div>
                  <div style={{ fontWeight: 'bold' }}>+90 551 981 59 16</div>
                </div>
              </div>
              <a href="https://wa.me/905519815916" className="btn btn-primary">
                {t('whatsapp_cta')}
              </a>
            </div>
            <div style={{ height: '350px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
               <div style={{ textAlign: 'center', width: '100%' }}>
                 <MapPin size={48} color="var(--ps-blue)" style={{ marginBottom: '16px' }} />
                 <div style={{ fontWeight: 'bold' }}>Google Maps</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proper Footer */}
      <footer>
        <div className="container">
          <div className="logo-area">
             <img src={logoImg} alt="Asemm Logo" style={{ width: '40px', height: '40px' }} />
             <span style={{ fontWeight: 900, fontSize: '20px' }}>ASEMM</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="https://www.instagram.com/asemmplaystation/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              © 2026 ASEMM PS CAFE. Tüm hakları saklıdır.
            </div>
          </div>
          <div style={{ fontWeight: 800, fontSize: '10px', color: 'var(--ps-blue)', textTransform: 'uppercase' }}>
            Keçiören'in en heyecanlandıran yeri
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
