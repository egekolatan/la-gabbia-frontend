import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ t, onScrollToNext }) {
  // Letters: "la gabbia"
  const firstWord = ["l", "a"];
  const secondWord = ["g", "a", "b", "b", "i", "a"];

  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '120px 24px 80px 24px',
        textAlign: 'center',
        background: '#ffffff'
      }}
      className="bg-arch-pattern"
    >
      {/* Decorative Golden Arch Monogram */}
      <div style={{ marginBottom: '24px', opacity: 0.85 }}>
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 25 85 V 45 A 25 25 0 0 1 75 45 V 85" stroke="#b08d57" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3"/>
          <path d="M 35 85 V 48 A 15 15 0 0 1 65 48 V 85" stroke="#141310" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="50" cy="24" r="3.5" fill="#b08d57" />
        </svg>
      </div>

      {/* Animated Brand Lettering: "l a   g a b b i a" */}
      <div className="brand-letters-container" style={{ marginBottom: '32px' }}>
        {/* "la" */}
        {firstWord.map((letter, idx) => (
          <span key={`w1-${idx}`} className="brand-letter">
            {letter}
          </span>
        ))}

        {/* Space between words */}
        <span className="brand-space" />

        {/* "gabbia" */}
        {secondWord.map((letter, idx) => (
          <span key={`w2-${idx}`} className="brand-letter">
            {letter}
          </span>
        ))}
      </div>

      {/* Subtitle / Tagline */}
      <div style={{ maxWidth: '640px', margin: '0 auto 40px auto' }}>
        <p 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#141310',
            lineHeight: 1.45,
            letterSpacing: '0.01em',
            marginBottom: '12px'
          }}
        >
          "{t.slogan}"
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold-accent)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
          <span>★</span>
          <span>Alsancak · İzmir</span>
          <span>★</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={onScrollToNext}
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: '#141310',
          transition: 'transform 0.2s ease'
        }}
        className="animate-bounce-slow"
        aria-label="Aşağı kaydır"
      >
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 600 }}>
          {t.scrollDown}
        </span>
        <ArrowDown size={22} strokeWidth={1.75} style={{ color: '#141310' }} />
      </button>
    </section>
  );
}
