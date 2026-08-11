import React from 'react';
import { Sparkles, Wine, Flame, Clock } from 'lucide-react';

export default function PhilosophySection({ t }) {
  const pillars = [
    {
      icon: <Sparkles size={22} style={{ color: 'var(--gold-accent)' }} />,
      title: "Pasta Fresca Fatta a Mano",
      desc: "Her sabah organik un ve taze yumurta sarılarıyla mutfağımızda tek tek açılan el yapımı taze makarnalar."
    },
    {
      icon: <Wine size={22} style={{ color: 'var(--gold-accent)' }} />,
      title: "Cantina & Sommelier",
      desc: "Piemonte'den Toskana'ya uzanan, özenle seçilmiş 180+ etiketlik İtalyan şarap kavı ve imza kokteyller."
    },
    {
      icon: <Flame size={22} style={{ color: 'var(--gold-accent)' }} />,
      title: "Materia Prima D.O.P.",
      desc: "Modena balzamiği, San Marzano domatesleri ve 24 aylık Parmigiano Reggiano gibi İtalyan coğrafi işaretli ürünler."
    },
    {
      icon: <Clock size={22} style={{ color: 'var(--gold-accent)' }} />,
      title: "Slow Food & Intimate Dining",
      desc: "Aceleye yer olmayan, zamanın ve lezzetin tadının çıkarıldığı samimi ve sakin bir atmosfer."
    }
  ];

  return (
    <section id="philosophy-section" style={{ padding: '90px 24px 100px 24px', background: '#faf9f6' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-accent)', display: 'block', marginBottom: '8px' }}>
            cucina italiana d'autore
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#141310', fontWeight: 400, letterSpacing: '0.02em', marginBottom: '20px' }}>
            {t.philosophyTitle}
          </h2>
          <div style={{ width: '60px', height: '1.5px', background: 'var(--gold-accent)', margin: '0 auto 28px auto' }} />
          
          <p style={{ color: '#2b2925', fontSize: '1.15rem', maxWidth: '780px', margin: '0 auto 16px auto', lineHeight: 1.8, fontFamily: 'var(--font-serif)' }}>
            {t.philosophyText1}
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7, fontStyle: 'italic' }}>
            {t.philosophyText2}
          </p>
        </div>

        {/* Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="clean-card"
              style={{
                padding: '32px 24px',
                background: '#ffffff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div 
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  border: '1px solid var(--border-light)'
                }}
              >
                {pillar.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#141310', marginBottom: '10px', fontWeight: 600 }}>
                {pillar.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
