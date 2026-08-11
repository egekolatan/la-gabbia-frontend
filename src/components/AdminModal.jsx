import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { RefreshCw, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function AdminModal({ isOpen, onClose }) {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReservations = async () => {
    setLoading(true);
    const data = await api.getReservations();
    setReservations(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      fetchReservations();
    }
  }, [isOpen]);

  const handleStatusChange = async (id, status) => {
    await api.updateReservationStatus(id, status);
    fetchReservations();
  };

  if (!isOpen) return null;

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
        background: 'rgba(15, 12, 6, 0.7)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#ffffff',
          position: 'relative',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          fontFamily: '"Indie Flower", cursive'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '14px' }}>
          <div>
            <h2 style={{ fontFamily: '"Shadows Into Light", cursive', fontSize: '2.4rem', color: '#0f0c06', margin: 0 }}>
              la gabbia - rezervasyon yönetimi (python backend)
            </h2>
            <p style={{ color: '#666', margin: 0 }}>
              SQLite Veritabanı & FastAPI API: <code>http://127.0.0.1:8088/docs</code>
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={fetchReservations}
              style={{
                background: '#faf8f5',
                border: '1px solid #ccc',
                padding: '6px 14px',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'inherit'
              }}
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              Yenile
            </button>

            <button 
              onClick={onClose}
              style={{
                background: '#0f0c06',
                color: '#fff',
                border: 'none',
                padding: '6px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              Kapat
            </button>
          </div>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '30px', fontSize: '1.2rem' }}>Yükleniyor...</p>
        ) : reservations.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '40px', color: '#666', fontSize: '1.2rem' }}>
            Henüz kayıtlı rezervasyon bulunmuyor.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {reservations.map((res) => (
              <div 
                key={res.id}
                style={{
                  background: '#faf8f5',
                  border: '1px solid rgba(15,12,6,0.1)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '14px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 'bold', color: '#8B4513', fontSize: '1.2rem' }}>
                      {res.booking_code}
                    </span>
                    <span style={{ fontSize: '1.1rem', color: '#0f0c06' }}>
                      {res.name} ({res.phone})
                    </span>
                    <span 
                      style={{
                        padding: '2px 10px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        background: res.status === 'confirmed' ? '#e6f4ea' : (res.status === 'cancelled' ? '#fce8e6' : '#fff3e0'),
                        color: res.status === 'confirmed' ? '#137333' : (res.status === 'cancelled' ? '#c5221f' : '#b06000')
                      }}
                    >
                      {res.status === 'confirmed' ? 'Onaylandı' : (res.status === 'cancelled' ? 'İptal' : 'Beklemede')}
                    </span>
                  </div>

                  <p style={{ color: '#555', margin: 0, fontSize: '1rem' }}>
                    📅 <strong>Tarih:</strong> {res.date} · ⏰ <strong>Saat:</strong> {res.time} · 👥 <strong>Kişi:</strong> {res.guests} · 📍 <strong>Masa:</strong> {res.area}
                  </p>
                  {res.notes && (
                    <p style={{ color: '#777', margin: '4px 0 0 0', fontStyle: 'italic', fontSize: '0.95rem' }}>
                      ✍️ "{res.notes}"
                    </p>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {res.status !== 'confirmed' && (
                    <button 
                      onClick={() => handleStatusChange(res.id, 'confirmed')}
                      style={{
                        background: '#137333',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.95rem'
                      }}
                    >
                      <CheckCircle size={14} /> Onayla
                    </button>
                  )}

                  {res.status !== 'cancelled' && (
                    <button 
                      onClick={() => handleStatusChange(res.id, 'cancelled')}
                      style={{
                        background: '#c5221f',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.95rem'
                      }}
                    >
                      <XCircle size={14} /> İptal Et
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
