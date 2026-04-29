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
    <div className={language === 'ar' ? 'rtl' : 'ltr'} style={{ background: 'radial-gradient(circle at 50% -20%, #1a1a2e 0%, #0c0c14 100%)' }}>
      <Helmet>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
      </Helmet>

      {/* Slogan Top Bar */}
      <div style={{ background: 'var(--ps-blue)', color: 'white', textAlign: 'center', padding: '10px 0', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1200 }}>
        Keçiören'in en heyecanlandıran yeri
      </div>

      {/* Header */}
      <header style={{ top: '35px' }}>
        <div className="container">
          <div className="logo-area">
            <img src={logoImg} alt="Asemm Logo" />
            <div>
              <span style={{ fontSize: '22px', fontWeight: 900, display: 'block', lineHeight: 1, letterSpacing: '-0.02em' }}>ASEMM</span>
              <span style={{ fontSize: '9px', color: 'var(--ps-blue)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>PlayStation Cafe</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div className="lang-dropdown">
              <button className="lang-btn" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </button>
              <div className="lang-menu">
                <button onClick={() => setLanguage('tr')} style={{ width: '100%', padding: '12px', textAlign: 'center', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 700 }}>TR</button>
                <button onClick={() => setLanguage('en')} style={{ width: '100%', padding: '12px', textAlign: 'center', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 700 }}>EN</button>
                <button onClick={() => setLanguage('ar')} style={{ width: '100%', padding: '12px', textAlign: 'center', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 700 }}>AR</button>
              </div>
            </div>
            <a href="https://wa.me/905519815916" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: '13px', borderRadius: '10px', whiteSpace: 'nowrap' }}>
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
              <div style={{ color: 'var(--ps-blue)', fontWeight: 800, fontSize: '13px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <Star size={16} fill="currentColor" />
                {t('ps5_status')}
              </div>
              <h1 className="title-large text-balance">
                {t('hero_title').split(':')[0]} <br />
                <span className="neon-text">{t('hero_title').split(':')[1]}</span>
              </h1>
              <p className="text-balance" style={{ fontSize: '19px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px' }}>
                {t('hero_subtitle')}
              </p>
              <a href="https://wa.me/905519815916" className="btn btn-primary">
                <Phone size={20} />
                {t('whatsapp_cta')}
              </a>
            </div>
            <div className="hero-image">
              <img src={heroImg} alt="Gaming Zone" style={{ border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Netflix & Cinema Section */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: '#E50914', fontWeight: 800, fontSize: '13px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <Tv size={18} />
              PREMIUM ENTERTAINMENT
            </div>
            <h2 className="title-section" style={{ fontSize: 'clamp(36px, 6vw, 56px)' }}>{t('cinema_title')}</h2>
            
            <div style={{ maxWidth: '650px', margin: '0 auto' }}>
              <p style={{ fontSize: '22px', color: 'white', marginBottom: '20px', fontWeight: 700, lineHeight: 1.3 }} className="text-balance">
                {t('cinema_subtitle')}
              </p>
              <p className="desc-text text-balance">
                {t('cinema_desc')}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
               <div style={{ padding: '12px 28px', background: 'rgba(229, 9, 20, 0.1)', border: '1px solid #E50914', borderRadius: '12px', color: '#E50914', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>NETFLIX 4K</div>
               <div style={{ padding: '12px 28px', background: 'rgba(0, 114, 206, 0.1)', border: '1px solid var(--ps-blue)', borderRadius: '12px', color: 'var(--ps-blue)', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>VIP CINEMA</div>
            </div>
          </div>
          
          <div className="hero-image" style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-30px', background: 'radial-gradient(circle, rgba(229, 9, 20, 0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
            <div style={{ padding: '15px', background: '#1a1a22', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}>
               <div style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <span style={{ color: '#E50914', fontSize: 'clamp(40px, 10vw, 90px)', fontWeight: 900, letterSpacing: '-0.04em' }}>NETFLIX</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2 className="title-section">{t('features_title')}</h2>
            <div style={{ width: '50px', height: '4px', background: 'var(--ps-blue)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>
          <div className="features-grid" style={{ marginTop: '60px' }}>
            {[
              { icon: <Monitor size={36} />, title: t('feature_1_title'), desc: t('feature_1_desc') },
              { icon: <Cpu size={36} />, title: t('feature_2_title'), desc: t('feature_2_desc') },
              { icon: <Zap size={36} />, title: t('feature_3_title'), desc: t('feature_3_desc') },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div style={{ color: 'var(--ps-blue)', marginBottom: '24px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '24px', marginBottom: '16px', fontWeight: 800 }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Catalog */}
      <section className="section-padding" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-image">
              <img src={gamesImg} alt="Games Catalog" style={{ borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)' }} />
            </div>
            <div className="hero-content" style={{ textAlign: 'left' }}>
              <h2 className="title-section" style={{ textAlign: 'left', marginBottom: '16px' }}>{t('games_title')}</h2>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '32px' }}>{t('games_subtitle')}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
                {[
                  'FIFA 26', 
                  'Mortal Kombat 11', 
                  'PES 26', 
                  'Asphalt', 
                  'GTA V', 
                  'NBA 2K'
                ].map((game, i) => (
                  <div key={i} style={{ padding: '18px', background: 'rgba(255,255,255,0.02)', borderRadius: '14px', fontWeight: 700, fontSize: '14px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
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
          <div className="hero-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="hero-content" style={{ textAlign: 'left' }}>
              <h2 className="title-section" style={{ textAlign: 'left', marginBottom: '40px' }}>{t('contact_title')}</h2>
              <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '14px', background: 'rgba(0, 114, 206, 0.1)', color: 'var(--ps-blue)', borderRadius: '14px' }}><MapPin size={24} /></div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--ps-blue)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>KONUM</div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>{t('contact_address')}</div>
                </div>
              </div>
              <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '14px', background: 'rgba(0, 114, 206, 0.1)', color: 'var(--ps-blue)', borderRadius: '14px' }}><Phone size={24} /></div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--ps-blue)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>WHATSAPP</div>
                  <div style={{ fontWeight: 800, fontSize: '20px' }}>+90 551 981 59 16</div>
                </div>
              </div>
              <a href="https://wa.me/905519815916" className="btn btn-primary" style={{ width: '100%' }}>
                {t('whatsapp_cta')}
              </a>
            </div>
            <div className="hero-image">
               <div style={{ padding: '40px', background: 'var(--bg-card)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.03)', textAlign: 'center' }}>
                  <InstagramIcon />
                  <p style={{ marginTop: '24px', fontWeight: 700, fontSize: '17px', color: 'white' }}>En yeni turnuvalar için bizi takip edin!</p>
                  <a href="https://www.instagram.com/asemmplaystation/" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: '24px', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', color: 'white', width: '100%' }}>Instagram'a Katıl</a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#08080f', padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <div className="logo-area">
               <img src={logoImg} alt="Asemm Logo" style={{ width: '36px', height: '36px' }} />
               <span style={{ fontWeight: 900, fontSize: '20px', letterSpacing: '-0.02em' }}>ASEMM</span>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <a href="https://www.instagram.com/asemmplaystation/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: '0.3s' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500 }}>
                © 2026 ASEMM PS CAFE
              </div>
            </div>
            <div style={{ fontWeight: 900, fontSize: '11px', color: 'var(--ps-blue)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Keçiören'in en heyecanlandıran yeri
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const InstagramIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ps-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default App;
