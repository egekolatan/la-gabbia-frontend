import React from 'react';
import { X, Wine, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DishModal({ dish, onClose, lang }) {
  if (!dish) return null;

  return (
    <div 
      className="modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        className="clean-card"
        style={{
          maxWidth: '680px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#ffffff',
          position: 'relative',
          borderRadius: '24px',
          padding: '0',
          animation: 'fadeIn 0.3s ease'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(6px)',
            border: '1px solid var(--border-light)',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#141310'
          }}
        >
          <X size={18} />
        </button>

        {/* Dish Image if available */}
        {dish.image && (
          <div style={{ width: '100%', height: '320px', position: 'relative', overflow: 'hidden' }}>
            <img 
              src={dish.image} 
              alt={dish.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }} />
          </div>
        )}

        {/* Content */}
        <div style={{ padding: '32px' }}>
          
          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
            {dish.tags && dish.tags.map((tag, idx) => (
              <span 
                key={idx}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--gold-accent)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title and Price */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', marginBottom: '6px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#141310', fontWeight: 600 }}>
              {dish.name}
            </h3>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: '#141310', whiteSpace: 'nowrap' }}>
              {dish.price}
            </span>
          </div>

          <p style={{ color: 'var(--gold-accent)', fontSize: '1rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)', marginBottom: '18px' }}>
            {dish.subtitle}
          </p>

          {/* Description */}
          <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
            {lang === 'en' ? dish.enDesc : (lang === 'it' ? dish.itDesc : dish.desc)}
          </p>

          {/* Wine Pairing recommendation */}
          {dish.winePairing && (
            <div 
              style={{
                background: 'var(--bg-card-subtle)',
                border: '1px solid rgba(176, 141, 87, 0.2)',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px'
              }}
            >
              <Wine size={20} style={{ color: 'var(--gold-accent)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--gold-accent)', display: 'block', marginBottom: '2px' }}>
                  Sommelier Eşleşmesi / Wine Pairing
                </span>
                <p style={{ fontSize: '0.92rem', color: '#141310', fontWeight: 500 }}>
                  {dish.winePairing}
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
