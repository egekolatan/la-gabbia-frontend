import React, { useState } from 'react';
import FineDiningMenu from './components/FineDiningMenu';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const scrollToElement = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="logo-container">
          <div className="logo-letter l1">l</div>
          <div className="logo-letter a1">a</div>
          <div className="logo-space"></div>
          <div className="logo-letter g">g</div>
          <div className="logo-letter a2">a</div>
          <div className="logo-letter b1">b</div>
          <div className="logo-letter b2">b</div>
          <div className="logo-letter i">i</div>
          <div className="logo-letter a3">a</div>
          <span className="logo-star">★</span>
        </div>
        <p className="slogan">
          Burası, aceleye yer olmayan, sohbetlerin derinleştiği ve lezzetlerin damağınızda iz bıraktığı bir yer. Aynı İtalya gibi…
        </p>
        <div 
          className="scroll-indicator"
          onClick={() => scrollToElement('menu')}
          title="Aşağı kaydır"
        >
          ↓
        </div>
      </section>

      {/* 2. MENU ACTIONS SECTION */}
      <section className="menu-section" id="menu">
        <div className="menu-container">
          <div className="menu-item" onClick={() => setIsMenuOpen(true)}>
            <h3>menü</h3>
          </div>
          <div className="menu-item" onClick={() => scrollToElement('kitchen')}>
            <h3>mutfağımız</h3>
          </div>
          <div className="menu-item" onClick={() => scrollToElement('contact')}>
            <h3>iletişim</h3>
          </div>
        </div>
      </section>

      {/* 3. KITCHEN & CULINARY HERITAGE SECTION */}
      <section className="kitchen-section" id="kitchen">
        <div className="kitchen-container">
          <h2 className="kitchen-title">la gabbia'da mutfak</h2>
          <p className="kitchen-intro">
            "Bizim için İtalyan mutfağı bir gösteriş değil; sabır, el emeği ve asırlık gastronomi mirasına duyulan derin bir saygıdır."
          </p>

          <div className="kitchen-grid">
            
            {/* 1. Taze Hamur & El Emeği */}
            <div className="kitchen-card">
              <h3 className="kitchen-card-title">pasta fresca (el açması taze makarna)</h3>
              <p className="kitchen-card-desc">
                Mutfağımızda asla kurutulmuş paket makarna kullanılmaz. Her sabah gün doğumunda; İtalya'dan gelen taş değirmen 'Tipo 00' unu ve taze serbest gezen tavuk yumurtalarının sarısıyla hamurumuzu yoğuruyoruz. Merdanelerle elde açılan hamurumuz, Tagliolini, Pappardelle ve dolgulu Ravioli olarak siparişiniz anında taze taze haşlanır ve tam kıvamında (al dente) masanıza ulaşır.
              </p>
            </div>

            {/* 2. Orijinal Coğrafi İşaretli Malzemeler */}
            <div className="kitchen-card">
              <h3 className="kitchen-card-title">materia prima (coğrafi işaretli lezzetler)</h3>
              <p className="kitchen-card-desc">
                İtalyan yemeklerinin kalbi malzemenin saf kalitesindedir. Puglia'dan haftalık gelen taze manda burratası, Emilia-Romagna'nın 24 ay dinlendirilmiş Parmigiano Reggiano peyniri, Modena'nın meşe fıçılarında yıllanmış geleneksel balzamiği ve Vezüv Yanardağı'nın zengin volkanik topraklarında yetişen San Marzano domatesleri ile çalışıyoruz.
              </p>
            </div>

            {/* 3. Ağır Ateşte Pişen Soslar */}
            <div className="kitchen-card">
              <h3 className="kitchen-card-title">cottura lenta (sabırla demlenen soslar)</h3>
              <p className="kitchen-card-desc">
                Gerçek bir İtalyan sosu aceleye gelmez. Ördek ragùmuz ve dana inciklerimiz; taze biberiye, dağ kekiği, ardıç tohumları ve Toskana'nın Chianti şarabı eşliğinde döküm tencerelerde tam 8 saat boyunca kısık ateşte demlenerek pişirilir. Derin, yoğun ve damağınızda iz bırakan lezzetin sırrı bu sabırda saklıdır.
              </p>
            </div>

            {/* 4. Şarap Kavı & Eşleşme Sanatı */}
            <div className="kitchen-card">
              <h3 className="kitchen-card-title">la cantina (seçkin şarap kavı)</h3>
              <p className="kitchen-card-desc">
                Piemonte'nin asil Barolo'sundan Toskana'nın gövdeli Brunello di Montalcino'suna, Veneto'nun ferahlatıcı Prosecco'suna kadar İtalya'nın dört bir yanından seçilmiş zengin bir şarap kavına sahibiz. Sommelierimiz eşliğinde her tabak, damak zevkinizi tamamlayan doğru bir şarap veya fıçıda dinlendirilmiş imza Negroni ile buluşur.
              </p>
            </div>

          </div>

          <div className="kitchen-quote-box">
            <p className="kitchen-quote-text">
              "Mutfağımızda hiçbir yapay tatlandırıcı, hazır bulyon veya dondurulmuş ürün yer almaz. Soğuk sıkım erken hasat zeytinyağımız, taze Akdeniz otlarımız ve ateşin zanaatiyle hazırlanan sade bir ziyafete davetlisiniz."
            </p>
          </div>

        </div>
      </section>

      {/* 4. CONTACT SECTION (3 COLUMNS) */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          
          {/* Neredeyiz */}
          <div className="contact-info">
            <h3>Neredeyiz</h3>
            <p><strong>Adres:</strong> La Gabbia, Kültür Mah. 1381. Sk. No:11A, 35220 Konak/İzmir</p>
            <div className="map-container">
              <iframe 
                title="La Gabbia Konum Haritası"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.2847492087844!2d27.1418295756043!3d38.43926397177394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9253bb5ffff%3A0x3df8e5b8d6b4e5b8!2s1381.+Sk.+No%3A11A%2C+35220+Konak%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1703584800000!5m2!1str!2str" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* İletişim */}
          <div className="contact-info">
            <h3>İletişim</h3>
            <p><strong>Telefon:</strong> +90 538 773 3511</p>
            <p><strong>E-mail:</strong> lagabbiarestaurant@gmail.com</p>
            <p>
              <strong>Çalışma Saatleri:</strong><br />
              Pazartesi - Pazar: 17:30 - 01:00
            </p>
          </div>

          {/* Rezervasyon */}
          <div className="contact-info">
            <h3>Rezervasyon</h3>
            <p>
              Dükkan küçük, muhabbet büyük!<br />
              Yer kapmak için rezervasyon şart.
            </p>

            <div style={{ marginBottom: '16px' }}>
              <button
                onClick={() => setIsReservationOpen(true)}
                style={{
                  background: '#0f0c06',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '10px 24px',
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  fontFamily: '"Indie Flower", cursive',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Masa Ayırt (Online)
              </button>
            </div>

            <div className="social-links" style={{ marginTop: '10px' }}>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a 
                href="https://wa.me/905387733511?text=Merhaba%20La%20Gabbia%2C%20rezervasyon%20yapt%C4%B1rmak%20istiyorum." 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => alert('WhatsApp ile iletişime geçiliyor')}
              >
                Whatsapp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="footer-signature">
        <div className="signature-link">
          <div className="signature-text">
            <span className="signature-year">© 2026</span>
            <span className="signature-name">La Gabbia Restaurant</span>
          </div>
        </div>
      </footer>

      {/* 6. FINE DINING ITALIAN MENU MODAL */}
      {isMenuOpen && (
        <FineDiningMenu onClose={() => setIsMenuOpen(false)} />
      )}

      {/* 7. ONLINE RESERVATION MODAL (CONNECTED TO PYTHON BACKEND) */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />

    </div>
  );
}
