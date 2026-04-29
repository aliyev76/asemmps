import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Monitor, 
  Cpu, 
  Zap, 
  Globe,
  Star,
  MapPin,
  Tv
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

      {/* Slogan Top Bar */}
      <div style={{ background: 'var(--ps-blue)', color: 'white', textAlign: 'center', padding: '8px 0', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Keçiören'in en heyecanlandıran yeri
      </div>

      {/* Proper Header */}
      <header style={{ top: '32px' }}>
        <div className="container">
          <div className="logo-area">
            <img src={logoImg} alt="Asemm Logo" />
            <div>
              <span style={{ fontSize: '24px', fontWeight: 900, display: 'block', lineHeight: 1 }}>ASEMM</span>
              <span style={{ fontSize: '10px', color: 'var(--ps-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>PlayStation Cafe</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="lang-dropdown">
              <button className="lang-btn">
                <Globe size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                {language.toUpperCase()}
              </button>
              <div className="lang-menu">
                <button onClick={() => setLanguage('tr')} style={{ width: '100%', padding: '10px', textAlign: 'left', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>TR</button>
                <button onClick={() => setLanguage('en')} style={{ width: '100%', padding: '10px', textAlign: 'left', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>EN</button>
                <button onClick={() => setLanguage('ar')} style={{ width: '100%', padding: '10px', textAlign: 'left', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>AR</button>
              </div>
            </div>
            <a href="https://wa.me/905519815916" className="btn btn-primary btn-header-cta" style={{ padding: '10px 16px', fontSize: '13px' }}>
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
              <div style={{ color: 'var(--ps-blue)', fontWeight: 800, fontSize: '14px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'inherit' }}>
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

      {/* Netflix & Cinema Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, #0a0a0c, #151518)' }}>
        <div className="container">
          <div className="hero-grid">
             <div className="hero-content">
                <div style={{ color: '#E50914', fontWeight: 800, fontSize: '14px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'inherit' }}>
                  <Tv size={16} />
                  PREMIUM ENTERTAINMENT
                </div>
                <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '20px' }}>{t('cinema_title')}</h2>
                <p style={{ fontSize: '18px', color: 'white', marginBottom: '16px', fontWeight: 'bold' }}>{t('cinema_subtitle')}</p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>{t('cinema_desc')}</p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'inherit' }}>
                   <div style={{ padding: '10px 20px', background: 'rgba(229, 9, 20, 0.1)', border: '1px solid #E50914', borderRadius: '10px', color: '#E50914', fontWeight: 'bold', fontSize: '14px' }}>NETFLIX 4K</div>
                   <div style={{ padding: '10px 20px', background: 'rgba(0, 114, 206, 0.1)', border: '1px solid var(--ps-blue)', borderRadius: '10px', color: 'var(--ps-blue)', fontWeight: 'bold', fontSize: '14px' }}>VIP CINEMA</div>
                </div>
             </div>
             <div className="hero-image">
                <div style={{ padding: '15px', background: '#000', borderRadius: '24px', border: '3px solid #333', maxWidth: '500px', margin: '0 auto' }}>
                   <div style={{ width: '100%', aspectRatio: '16/9', background: '#111', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: '#E50914', fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 900 }}>NETFLIX</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
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
                <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Catalog */}
      <section className="section-padding" style={{ background: '#08080a' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-image">
              <img src={gamesImg} alt="Games Catalog" style={{ borderRadius: '20px' }} />
            </div>
            <div className="hero-content">
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '20px' }}>{t('games_title')}</h2>
              <p style={{ fontSize: '17px', marginBottom: '24px' }}>{t('games_subtitle')}</p>
              <div className="games-grid">
                {[
                  'FIFA 26', 
                  'Mortal Kombat 11', 
                  'PES 26', 
                  'Asphalt', 
                  'GTA V', 
                  'NBA 2K'
                ].map((game, i) => (
                  <div key={i} style={{ padding: '14px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ps-blue)' }}></div>
                    {game}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '24px' }}>{t('contact_title')}</h2>
              <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'inherit' }}>
                <div style={{ padding: '10px', background: 'var(--ps-blue)', borderRadius: '10px' }}><MapPin size={20} /></div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '11px', color: 'var(--ps-blue)', fontWeight: 800 }}>KONUM</div>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{t('contact_address')}</div>
                </div>
              </div>
              <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'inherit' }}>
                <div style={{ padding: '10px', background: 'var(--ps-blue)', borderRadius: '10px' }}><Phone size={20} /></div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '11px', color: 'var(--ps-blue)', fontWeight: 800 }}>WHATSAPP</div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>+90 551 981 59 16</div>
                </div>
              </div>
              <a href="https://wa.me/905519815916" className="btn btn-primary" style={{ width: '100%' }}>
                {t('whatsapp_cta')}
              </a>
            </div>
            <div className="hero-image">
               <div style={{ padding: '30px', background: 'var(--bg-card)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                  <InstagramIcon />
                  <p style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '15px' }}>En yeni oyunlar ve güncellemeler için bizi takip edin!</p>
                  <a href="https://www.instagram.com/asemmplaystation/" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: '20px', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', color: 'white', width: '100%' }}>Instagram</a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proper Footer */}
      <footer>
        <div className="container">
          <div className="logo-area">
             <img src={logoImg} alt="Asemm Logo" />
             <span style={{ fontWeight: 900, fontSize: '20px' }}>ASEMM</span>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <a href="https://www.instagram.com/asemmplaystation/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
              © 2026 ASEMM PS CAFE.
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

const InstagramIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--ps-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default App;
