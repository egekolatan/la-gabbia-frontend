import React from 'react';
import { UtensilsCrossed, Image as ImageIcon, BookOpen, Calendar, MapPin } from 'lucide-react';

export default function ActionButtons({ t, onOpenReservation }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="action-hub" style={{ padding: '20px 24px 70px 24px', background: '#ffffff' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          {/* Menu Button */}
          <button 
            onClick={() => scrollTo('menu-section')}
            className="nav-pill-btn"
          >
            <UtensilsCrossed size={18} style={{ marginRight: '10px', color: 'var(--gold-accent)' }} />
            <span>{t.actions.menu}</span>
          </button>

          {/* Gallery Button */}
          <button 
            onClick={() => scrollTo('gallery-section')}
            className="nav-pill-btn"
          >
            <ImageIcon size={18} style={{ marginRight: '10px', color: 'var(--gold-accent)' }} />
            <span>{t.actions.gallery}</span>
          </button>

          {/* Philosophy / Story Button */}
          <button 
            onClick={() => scrollTo('philosophy-section')}
            className="nav-pill-btn"
          >
            <BookOpen size={18} style={{ marginRight: '10px', color: 'var(--gold-accent)' }} />
            <span>{t.actions.philosophy}</span>
          </button>

          {/* Reservation Button */}
          <button 
            onClick={onOpenReservation}
            className="nav-pill-btn"
            style={{ borderColor: 'var(--gold-accent)', background: 'linear-gradient(180deg, #ffffff 0%, #faf8f5 100%)' }}
          >
            <Calendar size={18} style={{ marginRight: '10px', color: 'var(--gold-accent)' }} />
            <span style={{ fontWeight: 600 }}>{t.actions.reservation}</span>
          </button>

          {/* Contact Button */}
          <button 
            onClick={() => scrollTo('contact-section')}
            className="nav-pill-btn"
          >
            <MapPin size={18} style={{ marginRight: '10px', color: 'var(--gold-accent)' }} />
            <span>{t.actions.contact}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
