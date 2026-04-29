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
    <div className={language === 'ar' ? 'rtl' : 'ltr'} lang={language}>
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
            <img src={logoImg} alt="Asemm Logo" style={{ width: '48px', height: '48px' }} />
            <div>
              <span className="no-wrap" style={{ fontSize: '26px', fontWeight: 900, lineHeight: 1 }}>ASEMM</span>
              <span className="no-wrap" style={{ fontSize: '10px', color: 'var(--ps-blue)', fontWeight: 800, textTransform: 'uppercase' }}>PlayStation Cafe</span>
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
              <span className="btn-text-desktop">{t('whatsapp_cta')}</span>
              <span className="btn-text-mobile"><Phone size={18} /></span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div style={{ color: 'var(--ps-blue)', fontWeight: 800, fontSize: '13px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star size={16} fill="currentColor" />
                <span className="no-wrap">{t('ps5_status')}</span>
              </div>
              <h1 className="title-large">
                <span className="no-wrap">ASEMM PS CAFE</span>
                <span className="neon-text no-wrap">GERÇEK REKABET</span>
              </h1>
              <p className="desc-text" style={{ marginBottom: '40px', maxWidth: '540px' }}>{t('hero_subtitle')}</p>
              <a href="https://wa.me/905519815916" className="btn btn-primary">
                <Phone size={20} style={{ marginRight: '8px' }} />
                <span className="no-wrap">{t('whatsapp_cta')}</span>
              </a>
            </div>
            <div className="hero-image">
              <img src={heroImg} alt="Gaming Zone" />
            </div>
          </div>
        </div>
      </section>

      {/* Netflix & Cinema Section */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: '#E50914', fontWeight: 800, fontSize: '13px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <Tv size={18} />
              <span className="no-wrap">PREMIUM ENTERTAINMENT</span>
            </div>
            <h2 className="title-section no-wrap">NETFLİX KEYFİ</h2>
            
            <div style={{ maxWidth: '100%', margin: '0 auto' }}>
              <p className="no-wrap" style={{ fontSize: 'clamp(14px, 4.5vw, 18px)', color: 'var(--text-secondary)', marginBottom: '0', fontWeight: 400, lineHeight: 1.5 }}>
                Oyun biter, sinema başlar!
              </p>
              <p className="no-wrap" style={{ fontSize: 'clamp(14px, 4.5vw, 18px)', color: 'var(--text-secondary)', marginBottom: '40px', fontWeight: 400, lineHeight: 1.5 }}>
                VIP odalarımızda Netflix keyfini dev ekranda yaşa.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
               <div className="no-wrap" style={{ padding: '12px 24px', border: '1px solid #E50914', borderRadius: '12px', color: '#E50914', fontWeight: 800, fontSize: '12px' }}>NETFLIX 4K</div>
               <div className="no-wrap" style={{ padding: '12px 28px', border: '1px solid var(--ps-blue)', borderRadius: '12px', color: 'var(--ps-blue)', fontWeight: 800, fontSize: '12px' }}>VIP CINEMA</div>
            </div>
          </div>
          
          <div style={{ maxWidth: '850px', margin: '0 auto', padding: '10px', background: '#1a1a22', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
             <div style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(229, 9, 20, 0.1) 0%, transparent 80%)' }}></div>
                <span className="no-wrap" style={{ color: '#E50914', fontSize: 'clamp(40px, 12vw, 100px)', fontWeight: 900, letterSpacing: '-0.02em', textShadow: '0 0 40px rgba(229, 9, 20, 0.4)' }}>NETFLIX</span>
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container">
          <h2 className="title-section no-wrap">{t('features_title')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '60px' }}>
            {[
              { icon: <Monitor size={40} />, title: t('feature_1_title'), desc: t('feature_1_desc') },
              { icon: <Cpu size={40} />, title: t('feature_2_title'), desc: t('feature_2_desc') },
              { icon: <Zap size={40} />, title: t('feature_3_title'), desc: t('feature_3_desc') },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div style={{ color: 'var(--ps-blue)', marginBottom: '24px' }}>{f.icon}</div>
                <h3 className="no-wrap" style={{ fontSize: '24px', marginBottom: '16px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
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
              <img src={gamesImg} alt="Games" />
            </div>
            <div className="hero-content" style={{ textAlign: 'left' }}>
              <h2 className="title-section no-wrap" style={{ textAlign: 'inherit', marginBottom: '16px' }}>EFSANE OYUN LİSTEMİZ</h2>
              <p className="desc-text" style={{ textAlign: 'inherit', margin: '0 0 8px 0' }}>FIFA 26, Mortal Kombat 11, GTA ve Asphalt!</p>
              <p className="no-wrap" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(11px, 2.5vw, 14px)', margin: '0 0 24px 0' }}>En güncel oyunlar ve turnuvalar için bizi takip et.</p>
              <div className="games-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {[
                  'FIFA 26', 
                  'Mortal Kombat 11', 
                  'PES 26', 
                  'Asphalt', 
                  'GTA V', 
                  'NBA 2K'
                ].map((game, i) => (
                  <div key={i} className="game-card" style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ps-blue)' }}></div>
                    <span className="no-wrap">{game}</span>
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
            <div className="hero-content contact-stack">
              <h2 className="title-section no-wrap" style={{ textAlign: 'inherit', marginBottom: '32px' }}>{t('contact_title')}</h2>

              {/* Location Card */}
              <a
                href="https://maps.google.com/?q=Bağlarbaşı+Mahallesi+Kızlarpınarı+Caddesi+130/C+Keçiören+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block', width: '100%', marginBottom: '16px' }}
              >
                <div className="contact-card" style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '20px 24px',
                  background: 'linear-gradient(135deg, rgba(0,114,206,0.12), rgba(0,114,206,0.04))',
                  border: '1px solid rgba(0,114,206,0.3)',
                  borderRadius: '20px',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,114,206,0.8)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 30px rgba(0,114,206,0.2)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,114,206,0.3)'; (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                >
                  <div style={{ padding: '14px', background: 'rgba(0,114,206,0.2)', borderRadius: '14px', flexShrink: 0 }}>
                    <MapPin size={24} color="var(--ps-blue)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--ps-blue)', letterSpacing: '0.12em', marginBottom: '4px' }}>KONUM</div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: 'white', lineHeight: 1.4 }}>{t('contact_address')}</div>
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/905519815916"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block', width: '100%', marginBottom: '24px' }}
              >
                <div className="contact-card" style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '20px 24px',
                  background: 'linear-gradient(135deg, rgba(37,211,102,0.12), rgba(37,211,102,0.04))',
                  border: '1px solid rgba(37,211,102,0.3)',
                  borderRadius: '20px',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(37,211,102,0.8)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 30px rgba(37,211,102,0.2)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(37,211,102,0.3)'; (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                >
                  <div style={{ padding: '14px', background: 'rgba(37,211,102,0.2)', borderRadius: '14px', flexShrink: 0 }}>
                    <Phone size={24} color="#25D366" />
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: '#25D366', letterSpacing: '0.12em', marginBottom: '4px' }}>WHATSAPP</div>
                    <div className="no-wrap" style={{ fontWeight: 800, fontSize: '18px', color: 'white' }}>+90 551 981 59 16</div>
                  </div>
                </div>
              </a>
            </div>
            <div style={{ padding: '40px', background: 'var(--bg-card)', borderRadius: '32px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', alignSelf: 'end' }}>
               <InstagramIcon />
               <p style={{ marginTop: '24px', fontWeight: 700, fontSize: '17px' }}>En yeni turnuvalar için bizi takip edin!</p>
               <a href="https://www.instagram.com/asemmplaystation/" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: '24px', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', color: 'white', width: '100%' }}>
                <span className="no-wrap">Instagram'a Katıl</span>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#05050a', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div className="logo-area">
               <img src={logoImg} alt="Asemm Logo" style={{ width: '36px', height: '36px' }} />
               <span className="no-wrap" style={{ fontWeight: 900, fontSize: '20px' }}>ASEMM</span>
            </div>
            <div className="no-wrap" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              © 2026 ASEMM PS CAFE
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div className="no-wrap" style={{ fontWeight: 900, fontSize: '11px', color: 'var(--ps-blue)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
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
