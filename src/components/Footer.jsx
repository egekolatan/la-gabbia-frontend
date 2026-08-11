import React from 'react';

export default function Footer({ t }) {
  return (
    <footer style={{ background: '#ffffff', padding: '40px 24px', textAlign: 'center', borderTop: '1px solid var(--border-light)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#141310', letterSpacing: '0.04em' }}>
          la gabbia
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontFamily: 'var(--font-sans)' }}>
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
