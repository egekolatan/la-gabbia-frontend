import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { galleryItems } from '../data/menuData';

export default function GalleryCarousel({ t, onSelectImage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  const currentItem = galleryItems[currentIndex];

  return (
    <section id="gallery-section" style={{ padding: '80px 24px 100px 24px', background: '#ffffff' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontFamily: 'var(--font-hand)', fontSize: '2rem', color: 'var(--gold-accent)', display: 'block', marginBottom: '4px' }}>
            atmosfera & cucina
          </span>
          <h2 style={{ fontFamily: 'var(--font-hand)', fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#141310', fontWeight: 400, letterSpacing: '0.02em', marginBottom: '12px' }}>
            {t.galleryTitle}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
            "{t.gallerySubtitle}"
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div 
          style={{ position: 'relative', maxWidth: '960px', margin: '0 auto' }}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Main Slide Card */}
          <div 
            style={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              background: '#141310',
              aspectRatio: '16 / 10',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.18)',
              border: '1px solid rgba(0, 0, 0, 0.08)'
            }}
          >
            {/* Image */}
            <img 
              src={currentItem.image} 
              alt={currentItem.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'block'
              }}
            />

            {/* Subtle Gradient Overlay */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(20, 19, 16, 0.85) 0%, rgba(20, 19, 16, 0.1) 50%, transparent 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Slide Info Badge */}
            <div 
              style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(8px)',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#141310'
              }}
            >
              {currentItem.tag}
            </div>

            {/* Zoom / Fullscreen icon button */}
            <button
              onClick={() => onSelectImage(currentItem)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(8px)',
                border: 'none',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#141310',
                transition: 'transform 0.2s'
              }}
              title="Büyüt"
            >
              <Maximize2 size={16} />
            </button>

            {/* Caption */}
            <div 
              style={{
                position: 'absolute',
                bottom: '28px',
                left: '32px',
                right: '32px',
                color: '#ffffff',
                textAlign: 'left'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 500, marginBottom: '6px', letterSpacing: '0.02em' }}>
                {currentItem.title}
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem', maxWidth: '600px', lineHeight: 1.5 }}>
                {currentItem.subtitle}
              </p>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '-22px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid var(--border-light)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#141310',
              zIndex: 10,
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)'; e.currentTarget.style.borderColor = 'var(--gold-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
            aria-label="Önceki görsel"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-22px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid var(--border-light)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#141310',
              zIndex: 10,
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)'; e.currentTarget.style.borderColor = 'var(--gold-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
            aria-label="Sonraki görsel"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Indicators & Thumbnails Preview */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '24px' }}>
            {galleryItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: currentIndex === idx ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  background: currentIndex === idx ? '#141310' : '#d8d4cb',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                aria-label={`Görsel ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
