import React, { useState } from 'react';
import { Calendar, Check, Loader2 } from 'lucide-react';
import { api } from '../services/api';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2',
    area: 'main',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.createReservation(formData);
      setConfirmedBooking(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const code = confirmedBooking ? confirmedBooking.booking_code : '';
    const msg = `Merhaba La Gabbia Ekibi, rezervasyon yaptırmak istiyorum:%0A%0A${code ? `📌 Kod: ${code}%0A` : ''}👤 İsim: ${formData.name || 'Misafir'}%0A📅 Tarih: ${formData.date}%0A⏰ Saat: ${formData.time}%0A👥 Kişi Sayısı: ${formData.guests} Kişi%0A📍 Tercih: ${formData.area}%0A✍️ Not: ${formData.notes || 'Yok'}`;
    window.open(`https://wa.me/905387733511?text=${msg}`, '_blank');
  };

  return (
    <div 
      className="modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(15, 12, 6, 0.6)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          maxWidth: '560px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: '#ffffff',
          position: 'relative',
          borderRadius: '20px',
          padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
          fontFamily: '"Indie Flower", cursive'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#666',
            fontSize: '1.4rem'
          }}
        >
          ✕
        </button>

        {confirmedBooking ? (
          /* Success State */
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#faf8f5',
                border: '2px solid #8B4513',
                color: '#8B4513',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <Check size={36} strokeWidth={2.5} />
            </div>

            <h3 style={{ fontFamily: '"Shadows Into Light", cursive', fontSize: '2.4rem', color: '#0f0c06', marginBottom: '8px' }}>
              rezervasyon talebiniz alındı!
            </h3>

            <div style={{ display: 'inline-block', background: '#faf8f5', border: '1px dashed #8B4513', padding: '6px 16px', borderRadius: '30px', marginBottom: '18px' }}>
              <span style={{ fontSize: '1.1rem', color: '#8B4513', fontWeight: 'bold' }}>
                Rezervasyon Kodu: {confirmedBooking.booking_code}
              </span>
            </div>

            <p style={{ color: '#555', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Talebiniz Python backend sistemimize kaydedildi. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>

            <div 
              style={{
                background: '#faf8f5',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'left',
                marginBottom: '24px',
                border: '1px solid rgba(15,12,6,0.1)',
                fontSize: '1.05rem',
                lineHeight: 1.6
              }}
            >
              <div><strong>Tarih & Saat:</strong> {formData.date} - {formData.time}</div>
              <div><strong>Kişi Sayısı:</strong> {formData.guests} Kişi</div>
              <div><strong>Misafir:</strong> {formData.name} ({formData.phone})</div>
            </div>

            <button 
              onClick={handleWhatsAppDirect}
              style={{
                width: '100%',
                padding: '12px',
                background: '#0f0c06',
                color: '#ffffff',
                border: 'none',
                borderRadius: '30px',
                fontSize: '1.15rem',
                cursor: 'pointer',
                marginBottom: '10px',
                fontFamily: '"Indie Flower", cursive'
              }}
            >
              WhatsApp'tan Anında Teyit Et
            </button>

            <button 
              onClick={() => { setConfirmedBooking(null); onClose(); }}
              style={{
                width: '100%',
                padding: '10px',
                background: 'transparent',
                color: '#666',
                border: '1px solid #ccc',
                borderRadius: '30px',
                fontSize: '1rem',
                cursor: 'pointer',
                fontFamily: '"Indie Flower", cursive'
              }}
            >
              Kapat
            </button>
          </div>
        ) : (
          /* Form State */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontFamily: '"Shadows Into Light", cursive', fontSize: '2.6rem', color: '#0f0c06', margin: 0 }}>
                masa rezervasyonu
              </h3>
              <p style={{ color: '#666', fontSize: '1.15rem', marginTop: '4px' }}>
                Dükkan küçük, lezzetler büyük! Yer kapmak için rezervasyon şart.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px', color: '#0f0c06', fontWeight: 'bold' }}>
                    Tarih
                  </label>
                  <input 
                    type="date"
                    required
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #ccc', fontFamily: 'inherit', fontSize: '1rem' }}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px', color: '#0f0c06', fontWeight: 'bold' }}>
                    Saat
                  </label>
                  <select 
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #ccc', fontFamily: 'inherit', fontSize: '1rem' }}
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="18:00">18:00 (Akşam)</option>
                    <option value="19:00">19:00 (Akşam)</option>
                    <option value="19:30">19:30 (Akşam)</option>
                    <option value="20:00">20:00 (Akşam)</option>
                    <option value="20:30">20:30 (Akşam)</option>
                    <option value="21:30">21:30 (Akşam)</option>
                    <option value="22:00">22:00 (Akşam)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px', color: '#0f0c06', fontWeight: 'bold' }}>
                    Kişi Sayısı
                  </label>
                  <select 
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #ccc', fontFamily: 'inherit', fontSize: '1rem' }}
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1">1 Kişi</option>
                    <option value="2">2 Kişi (Romantik Masa)</option>
                    <option value="3">3 Kişi</option>
                    <option value="4">4 Kişi</option>
                    <option value="5">5 Kişi</option>
                    <option value="6">6 Kişi</option>
                    <option value="7">7 Kişi</option>
                    <option value="8">8+ Kişi (Grup)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px', color: '#0f0c06', fontWeight: 'bold' }}>
                    Masa Tercihi
                  </label>
                  <select 
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #ccc', fontFamily: 'inherit', fontSize: '1rem' }}
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  >
                    <option value="Ana Salon">Ana Salon</option>
                    <option value="Şömine Başı">Şömine Başı</option>
                    <option value="Şef Masası">Şef Masası (Chef's Table)</option>
                    <option value="Kış Bahçesi">Kış Bahçesi / Teras</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px', color: '#0f0c06', fontWeight: 'bold' }}>
                    Ad Soyad
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #ccc', fontFamily: 'inherit', fontSize: '1rem' }}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px', color: '#0f0c06', fontWeight: 'bold' }}>
                    Telefon
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #ccc', fontFamily: 'inherit', fontSize: '1rem' }}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px', color: '#0f0c06', fontWeight: 'bold' }}>
                  Özel İstek / Alerji Notu
                </label>
                <textarea 
                  rows={2}
                  placeholder="Doğum günü, evlilik yıl dönümü, şarap ön siparişi veya alerjiler..."
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #ccc', fontFamily: 'inherit', fontSize: '1rem' }}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                style={{
                  padding: '14px',
                  background: '#0f0c06',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  marginTop: '6px',
                  fontFamily: '"Indie Flower", cursive',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Calendar size={20} />}
                <span>Rezervasyon Talebi Oluştur</span>
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
