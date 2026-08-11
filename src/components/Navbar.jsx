import React, { useState, useEffect } from 'react';
import { Globe, Volume2, VolumeX, Calendar, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar({ currentLang, setLang, t, onOpenReservation, isAudioPlaying, toggleAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-header py-4 shadow-sm' : 'bg-transparent py-6'}`} style={{ backdropFilter: scrolled ? 'blur(16px)' : 'none' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ textDecoration: 'none', color: '#141310', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, letterSpacing: '0.04em' }}>
            la gabbia
          </span>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-accent)', paddingLeft: '4px', borderLeft: '1px solid #e0dad0' }}>
            {t.subtitle}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <button 
            onClick={() => scrollToSection('menu-section')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.92rem', color: '#141310', fontWeight: 500, letterSpacing: '0.02em', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--gold-accent)'}
            onMouseLeave={(e) => e.target.style.color = '#141310'}
          >
            {t.actions.menu}
          </button>
          
          <button 
            onClick={() => scrollToSection('gallery-section')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.92rem', color: '#141310', fontWeight: 500, letterSpacing: '0.02em', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--gold-accent)'}
            onMouseLeave={(e) => e.target.style.color = '#141310'}
          >
            {t.actions.gallery}
          </button>

          <button 
            onClick={() => scrollToSection('philosophy-section')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.92rem', color: '#141310', fontWeight: 500, letterSpacing: '0.02em', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--gold-accent)'}
            onMouseLeave={(e) => e.target.style.color = '#141310'}
          >
            {t.actions.philosophy}
          </button>

          <button 
            onClick={() => scrollToSection('contact-section')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.92rem', color: '#141310', fontWeight: 500, letterSpacing: '0.02em', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--gold-accent)'}
            onMouseLeave={(e) => e.target.style.color = '#141310'}
          >
            {t.actions.contact}
          </button>
        </nav>

        {/* Right Action Tools (Lang, Audio, Reservation CTA) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* Audio toggle */}
          <button 
            onClick={toggleAudio}
            title={isAudioPlaying ? "Müziği Duraklat" : "Ambiyans Müziğini Başlat"}
            style={{
              background: isAudioPlaying ? 'var(--gold-subtle)' : '#ffffff',
              border: '1px solid var(--border-light)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: isAudioPlaying ? 'var(--gold-accent)' : '#6b665f',
              transition: 'all 0.2s ease'
            }}
          >
            {isAudioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Language Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', background: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '9999px', padding: '3px 8px', gap: '4px' }}>
            {['tr', 'en', 'it'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLang(lang)}
                style={{
                  background: currentLang === lang ? '#141310' : 'transparent',
                  color: currentLang === lang ? '#ffffff' : '#6b665f',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '4px 8px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease'
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Reservation CTA */}
          <button 
            onClick={onOpenReservation}
            className="btn-gold"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <Calendar size={14} />
            <span>{t.actions.reservation}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: '#ffffff',
              border: '1px solid var(--border-light)',
              borderRadius: '8px',
              width: '38px',
              height: '38px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <MenuIcon size={18} />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div style={{ background: '#ffffff', borderBottom: '1px solid var(--border-light)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}>
          <button onClick={() => scrollToSection('menu-section')} style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '1.1rem', padding: '8px 0', color: '#141310' }}>
            {t.actions.menu}
          </button>
          <button onClick={() => scrollToSection('gallery-section')} style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '1.1rem', padding: '8px 0', color: '#141310' }}>
            {t.actions.gallery}
          </button>
          <button onClick={() => scrollToSection('philosophy-section')} style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '1.1rem', padding: '8px 0', color: '#141310' }}>
            {t.actions.philosophy}
          </button>
          <button onClick={() => scrollToSection('contact-section')} style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '1.1rem', padding: '8px 0', color: '#141310' }}>
            {t.actions.contact}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
