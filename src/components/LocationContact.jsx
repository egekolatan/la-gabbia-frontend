import React from 'react';
import { ExternalLink, MessageSquare, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function LocationContact({ t, onOpenReservation }) {
  const openGoogleMaps = () => {
    // Open Google Maps search for Alsancak Izmir
    window.open('https://maps.google.com/?q=Alsancak+Kultur+Mahallesi+Izmir', '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/905387733511?text=Merhaba%20La%20Gabbia%2C%20rezervasyon%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com', '_blank');
  };

  return (
    <section id="contact-section" style={{ padding: '90px 24px 80px 24px', background: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* 3-Column Minimalist Grid (Inspired by yonalsancak.com) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start'
          }}
        >
          
          {/* Column 1: Neredeyiz (Where we are) */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-hand)', fontSize: '2.5rem', color: '#141310', fontWeight: 400, marginBottom: '18px' }}>
              {t.contact.whereTitle}
            </h3>
            
            <p style={{ fontSize: '0.98rem', color: '#141310', lineHeight: 1.6, marginBottom: '22px', maxWidth: '320px' }}>
              {t.contact.addressText}
            </p>

            {/* Interactive Clean Map Preview Card */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                background: '#f4f1ea',
                height: '200px'
              }}
            >
              {/* Stylized Minimalist Map background image or vector */}
              <iframe 
                title="La Gabbia Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.0489953259837!2d27.1396901!3d38.4357303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd85ec52b82bb%3A0x6b4cfb06dfce335a!2sAlsancak%2C%20Konak%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'contrast(92%) grayscale(20%)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Float Map link badge like reference site */}
              <button 
                onClick={openGoogleMaps}
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--border-light)',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#141310',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                }}
              >
                <span>{t.contact.mapBtn}</span>
                <ExternalLink size={13} />
              </button>
            </div>

          </div>

          {/* Column 2: İletişim (Contact & Hours) */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-hand)', fontSize: '2.5rem', color: '#141310', fontWeight: 400, marginBottom: '18px' }}>
              {t.actions.contact}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.98rem', color: '#141310', lineHeight: 1.6 }}>
              <div>
                <span style={{ color: 'var(--text-light)', display: 'block', fontSize: '0.85rem', marginBottom: '2px' }}>Telefon:</span>
                <a href={`tel:${t.contact.phone}`} style={{ color: '#141310', textDecoration: 'none', fontWeight: 500 }}>
                  {t.contact.phone}
                </a>
              </div>

              <div>
                <span style={{ color: 'var(--text-light)', display: 'block', fontSize: '0.85rem', marginBottom: '2px' }}>E-mail:</span>
                <a href={`mailto:${t.contact.email}`} style={{ color: '#141310', textDecoration: 'none' }}>
                  {t.contact.email}
                </a>
              </div>

              <div style={{ marginTop: '8px' }}>
                <span style={{ color: 'var(--text-light)', display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>{t.contact.hoursLabel}</span>
                <p style={{ fontWeight: 500 }}>{t.contact.hoursWeekdays}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{t.contact.hoursMonday}</p>
              </div>
            </div>

          </div>

          {/* Column 3: Rezervasyon (Booking & Socials) */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-hand)', fontSize: '2.5rem', color: '#141310', fontWeight: 400, marginBottom: '18px' }}>
              {t.actions.reservation}
            </h3>

            <p style={{ fontSize: '1.02rem', color: '#141310', lineHeight: 1.6, marginBottom: '24px', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
              {t.contact.socialSubtitle}
            </p>

            {/* Action Buttons: Instagram & WhatsApp (Matching yonalsancak pill style) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              
              <button 
                onClick={openInstagram}
                style={{
                  background: '#141310',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '12px 28px',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Instagram</span>
              </button>

              <button 
                onClick={openWhatsApp}
                style={{
                  background: '#141310',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '12px 28px',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                </svg>
                <span>WhatsApp</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
