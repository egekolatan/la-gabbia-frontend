import React, { useState } from 'react';
import { Wine, Sparkles, Filter, Eye, ChevronRight } from 'lucide-react';
import { menuItems } from '../data/menuData';

export default function MenuSection({ t, lang, onSelectDish, onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState('degustazione');
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'degustazione', label: t.categories.degustazione },
    { id: 'antipasti', label: t.categories.antipasti },
    { id: 'primi', label: t.categories.primi },
    { id: 'secondi', label: t.categories.secondi },
    { id: 'dolci', label: t.categories.dolci },
    { id: 'bevande', label: t.categories.bevande }
  ];

  const filteredItems = menuItems.filter((item) => {
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    if (activeFilter === 'veg' && !item.tags.includes('Vejetaryen')) return false;
    if (activeFilter === 'gf' && !item.tags.some(t => t.includes('Gluten'))) return false;
    if (activeFilter === 'chef' && !item.tags.some(t => t.includes('İmza') || t.includes('İmzası'))) return false;
    return true;
  });

  return (
    <section id="menu-section" style={{ padding: '90px 24px 120px 24px', background: '#ffffff' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontFamily: 'var(--font-hand)', fontSize: '2.1rem', color: 'var(--gold-accent)', display: 'block', marginBottom: '2px' }}>
            esperienza culinaria
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#141310', fontWeight: 400, letterSpacing: '0.02em', marginBottom: '12px' }}>
            {t.menuTitle}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
            "{t.menuSubtitle}"
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '36px'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  background: isActive ? '#141310' : '#ffffff',
                  color: isActive ? '#ffffff' : '#141310',
                  border: isActive ? '1px solid #141310' : '1px solid var(--border-light)',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.02em',
                  boxShadow: isActive ? '0 8px 20px rgba(0,0,0,0.12)' : '0 2px 10px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dietary Filters (shown for general categories) */}
        {activeCategory !== 'degustazione' && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '4px', marginRight: '6px' }}>
              <Filter size={14} /> Filtrele:
            </span>
            {[
              { id: 'all', label: 'Tümü' },
              { id: 'chef', label: '★ Şefin İmzası' },
              { id: 'veg', label: '🌱 Vejetaryen' },
              { id: 'gf', label: '🌾 Glutensiz' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  background: activeFilter === f.id ? 'var(--gold-subtle)' : 'transparent',
                  color: activeFilter === f.id ? 'var(--gold-hover)' : 'var(--text-muted)',
                  border: activeFilter === f.id ? '1px solid var(--gold-accent)' : '1px solid transparent',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {/* Content View */}
        {activeCategory === 'degustazione' ? (
          /* 5-Course Tasting Menu Degustation Card */
          <div 
            className="clean-card"
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              padding: 'clamp(28px, 5vw, 56px)',
              background: '#ffffff',
              border: '1px solid rgba(176, 141, 87, 0.3)',
              boxShadow: '0 20px 60px -15px rgba(176, 141, 87, 0.08)',
              position: 'relative'
            }}
          >
            {/* Top Badge */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span 
                style={{
                  display: 'inline-block',
                  background: 'var(--gold-subtle)',
                  color: 'var(--gold-hover)',
                  border: '1px solid rgba(176, 141, 87, 0.3)',
                  padding: '6px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '14px'
                }}
              >
                {t.tastingMenu.badge}
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#141310', fontWeight: 500, marginBottom: '8px' }}>
                {t.tastingMenu.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
                {t.tastingMenu.desc}
              </p>
            </div>

            {/* Courses Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '40px' }}>
              {t.tastingMenu.courses.map((c, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    paddingBottom: idx === t.tastingMenu.courses.length - 1 ? '0' : '24px',
                    borderBottom: idx === t.tastingMenu.courses.length - 1 ? 'none' : '1px dashed var(--border-light)'
                  }}
                >
                  <div 
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--gold-accent)',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#141310', fontWeight: 600 }}>
                        {c.title}
                      </h4>
                      <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-accent)', fontWeight: 600 }}>
                        {c.course}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tasting Menu Pricing and CTA */}
            <div 
              style={{
                background: 'var(--bg-secondary)',
                borderRadius: '16px',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
                border: '1px solid var(--border-light)'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: '#141310', fontWeight: 600 }}>
                  {t.tastingMenu.price}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gold-accent)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Wine size={14} /> {t.tastingMenu.wineOption}
                </div>
              </div>

              <button 
                onClick={onOpenReservation}
                className="btn-gold"
                style={{ padding: '14px 32px' }}
              >
                <span>Tadım Menüsü Rezervasyonu</span>
                <ChevronRight size={16} />
              </button>
            </div>

          </div>
        ) : (
          /* Dish Cards Grid */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="clean-card"
                style={{
                  background: '#ffffff',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onClick={() => onSelectDish(item)}
              >
                {/* Optional Top Photo Preview if item has photo */}
                {item.image && (
                  <div style={{ width: '100%', height: '180px', borderRadius: '14px', overflow: 'hidden', marginBottom: '20px', position: 'relative' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                    <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(255,255,255,0.9)', padding: '4px 8px', borderRadius: '9999px', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                      <Eye size={12} /> İncele
                    </div>
                  </div>
                )}

                <div>
                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {item.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        style={{
                          fontSize: '0.72rem',
                          background: 'var(--bg-secondary)',
                          color: 'var(--gold-accent)',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          fontWeight: 600,
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dish Title & Price */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#141310', fontWeight: 600, lineHeight: 1.3 }}>
                      {item.name}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: '#141310', whiteSpace: 'nowrap' }}>
                      {item.price}
                    </span>
                  </div>

                  {/* Subtitle / Turkish title */}
                  <p style={{ color: 'var(--gold-accent)', fontSize: '0.88rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)', marginBottom: '12px' }}>
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {lang === 'en' ? item.enDesc : (lang === 'it' ? item.itDesc : item.desc)}
                  </p>
                </div>

                {/* Bottom Wine Pairing or inspect button */}
                <div style={{ paddingTop: '14px', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {item.winePairing ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--gold-accent)', fontWeight: 500 }}>
                      <Wine size={14} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
                        {item.winePairing}
                      </span>
                    </div>
                  ) : <span />}

                  <span style={{ fontSize: '0.78rem', color: '#141310', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
                    Detay <ChevronRight size={14} />
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
