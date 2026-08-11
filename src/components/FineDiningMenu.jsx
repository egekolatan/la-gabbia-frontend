import React, { useState } from 'react';

export default function FineDiningMenu({ onClose }) {
  const [lang, setLang] = useState('tr');

  const toggleLanguage = () => {
    setLang(lang === 'tr' ? 'en' : 'tr');
  };

  return (
    <div className="menu-overlay-modal">
      
      {/* Floating Close Button */}
      <button 
        className="menu-close-floating-btn"
        onClick={onClose}
      >
        ← {lang === 'tr' ? 'ana sayfaya dön' : 'back to home'}
      </button>

      {/* Floating Language Switcher */}
      <button 
        className="language-toggle"
        onClick={toggleLanguage}
      >
        <span className="current-lang">{lang.toUpperCase()}</span>
        <span className="switch-indicator"> 🌐</span>
      </button>

      <div className="menu-page-container">
        
        <header className="menu-header">
          <h1 className="restaurant-name">la gabbia</h1>
          <p style={{ fontStyle: 'italic', color: '#666', fontSize: '1.1rem', marginTop: '6px' }}>
            {lang === 'tr' ? 'cucina contemporanea & cantina' : 'contemporary italian & wine cellar'}
          </p>
        </header>

        <main>
          {lang === 'tr' ? (
            /* =================== TURKISH MENU =================== */
            <div>
              {/* TADIM MENÜSÜ */}
              <section>
                <h2 className="section-title">şefin tadım menüsü (5 aşama)</h2>
                <ul className="menu-list">
                  <li>
                    <span className="item-name">menu degustazione la gabbia ✦</span>
                    <p>1. burrata di puglia & balzamik havyarı | 2. carpaccio di manzo al tartufo | 3. el açması tagliolini al tartufo | 4. dana bonfile al chianti | 5. tiramisù la gabbia - 3250 ₺</p>
                  </li>
                </ul>
                <div className="legend">
                  <span>✦ Sommelier Şarap Eşleşmesi opsiyonu: + 1850 ₺</span>
                </div>
              </section>

              {/* SOĞUKLAR & BAŞLANGIÇLAR */}
              <section>
                <h2 className="section-title">antipasti (başlangıçlar)</h2>
                <ul className="menu-list">
                  <li>
                    <span className="item-name">pane & burro al tartufo</span>
                    <p>taze fırınlanmış biberiyeli focaccia, trüf tereyağı, zeytin ezmesi - 250 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">burrata di puglia ♥</span>
                    <p>taze puglia burratası, fırınlanmış renkli yadigâr domatesler, fesleğen yağı, 12 yıllık modena balzamik havyarı - 690 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">carpaccio di manzo al tartufo ✦</span>
                    <p>ince dilimlenmiş dinlendirilmiş dana antrikot, trüf mayonezi, 24 ay parmigiano reggiano, kapari çıtırı - 780 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">tartare di tonno rosso ✦</span>
                    <p>ege ton balığı, sicilya kan portakalı jeli, avokado kreması, çıtır pirinç tuiles - 840 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">vitello tonnato</span>
                    <p>ağır ateşte pembe pişmiş dana nuar, geleneksel kaparili ton balığı sosu, taze frenk soğanı - 720 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">arancini al ragù e scamorza</span>
                    <p>ağır ateşte pişmiş dana ragù ve isli scamorza peynirli çıtır safranlı risotto topları, san marzano sos - 580 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">melanzane alla parmigiana ♥</span>
                    <p>fırınlanmış patlıcan katları, taze manda mozzarellası, fesleğenli domates sosu, parmesan kabuğu - 540 ₺</p>
                  </li>
                </ul>
              </section>

              {/* TAZE MAKARNALAR & RISOTTO */}
              <section>
                <h2 className="section-title">primi piatti (taze makarnalar & risotto)</h2>
                <ul className="menu-list">
                  <li>
                    <span className="item-name">tagliolini al tartufo pregiato ✦</span>
                    <p>her sabah taze açılan 30 sarılı el yapımı tagliolini, trüf tereyağı emülsiyonu, taze siyah trüf dilimleri - 920 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">pappardelle al ragù d'anatra</span>
                    <p>geniş taze pappardelle, 8 saat ağır ateşte pişmiş ördek ragùsu, ardıç tohumu, pecorino toscano - 860 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">ravioli di ricotta e spinaci ♥</span>
                    <p>taze manda ricottası ve ıspanak dolgulu el yapımı mantı, karamelize adaçayı tereyağı, çam fıstığı - 760 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">risotto all'astice e zafferano ✦</span>
                    <p>ıstakoz bulyonunda pişmiş Carnaroli pirinci, ılık tereyağlı ıstakoz kuyruğu, aquila safranı, amalfi limon kabuğu - 1250 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">risotto ai funghi porcini e tartufo ♥</span>
                    <p>yabani porçini mantarları, dinlendirilmiş parmigiano kreması, taze kekik, beyaz trüf esansı - 840 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">gnocchi alla sorrentina ♥</span>
                    <p>fırınlanmış ev yapımı patates gnocchi, fior di latte mozzarella, fesleğenli san marzano sosu - 720 ₺</p>
                  </li>
                </ul>
              </section>

              {/* ANA YEMEKLER */}
              <section>
                <h2 className="section-title">secondi piatti (ana yemekler)</h2>
                <ul className="menu-list">
                  <li>
                    <span className="item-name">filetto di manzo al chianti classico ✦</span>
                    <p>kömür ateşinde mühürlenmiş dana bonfile, chianti şarap redüksiyonu, ipeksi kereviz püresi, yabani kuşkonmaz - 1350 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">branzino in guazzetto di zafferano ✦</span>
                    <p>derisi çıtır tavada akdeniz levrek fileto, safranlı deniz suyu emülsiyonu, karamelize rezene kökü, bebek havuçlar - 1100 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">costolette d'agnello alle erbe</span>
                    <p>antep fıstığı ve taze biberiye kaplı süt kuzusu pirzola, fırın patates terrine, taze nane jus - 1280 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">polpo alla griglia</span>
                    <p>odun ateşinde ızgara ahtapot kolu, tütsülenmiş patates kreması, kurutulmuş kalamata zeytini kıtırı - 1050 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">ossobuco alla milanese</span>
                    <p>ağır ateşte pişmiş kemikli dana incik, taze narenciyeli gremolata, safranlı risotto yatağında - 1380 ₺</p>
                  </li>
                </ul>
              </section>

              {/* TATLILAR */}
              <section>
                <h2 className="section-title">dolci (tatlılar)</h2>
                <ul className="menu-list">
                  <li>
                    <span className="item-name">tiramisù tradizionale la gabbia ✦</span>
                    <p>geleneksel ev yapımı savoyardi bisküvisi, özel kavrum espresso, hafif mascarpone kreması, valrhona kakao - 420 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">panna cotta alla vaniglia del madagascar ♥</span>
                    <p>gerçek madagaskar vanilya taneli ipeksi krema, ılık yabani orman meyveleri sosu, nane çıtırı - 380 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">cannoli siciliani al pistacchio</span>
                    <p>çıtır kızarmış kabuk, tatlı manda ricottası, bronte antep fıstığı kaplaması, bitter çikolata damlaları - 390 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">torta caprese al cioccolato fondente</span>
                    <p>unsuz bitter çikolatalı ve bademli geleneksel capri keki, manda sütlü vanilyalı gelato - 420 ₺</p>
                  </li>
                </ul>
              </section>

              {/* ŞARAP KAVI & BAR */}
              <section>
                <h2 className="section-title">carta dei vini & cocktail (şarap & bar)</h2>
                
                <h3 style={{ fontSize: '1.25em', color: '#0f0c06', marginTop: '20px', marginBottom: '10px', textTransform: 'lowercase' }}>kırmızı şaraplar (vini rossi)</h3>
                <ul className="menu-list">
                  <li><span className="item-name">Barolo DOCG - Pio Cesare (Piemonte)</span><p>nebbiolo - Şişe: 3900 ₺ 𐃯 Kadeh: 780 ₺</p></li>
                  <li><span className="item-name">Brunello di Montalcino DOCG - Banfi (Toscana)</span><p>sangiovese grosso - Şişe: 4200 ₺ 𐃯 Kadeh: 840 ₺</p></li>
                  <li><span className="item-name">Chianti Classico Riserva DOCG - Antinori</span><p>sangiovese, cabernet - Şişe: 2900 ₺ 𐃯 Kadeh: 580 ₺</p></li>
                  <li><span className="item-name">Amarone della Valpolicella DOCG - Masi</span><p>corvina, rondinella - Şişe: 4600 ₺</p></li>
                  <li><span className="item-name">Tignanello Toscana IGT - Antinori</span><p>sangiovese, cabernet sauvignon - Şişe: 9800 ₺</p></li>
                </ul>

                <h3 style={{ fontSize: '1.25em', color: '#0f0c06', marginTop: '20px', marginBottom: '10px', textTransform: 'lowercase' }}>beyaz & köpüklü şaraplar (vini bianchi & bollicine)</h3>
                <ul className="menu-list">
                  <li><span className="item-name">Gavi di Gavi DOCG - Villa Sparina</span><p>cortese - Şişe: 2800 ₺ 𐃯 Kadeh: 560 ₺</p></li>
                  <li><span className="item-name">Pinot Grigio delle Venezie DOC - Santa Margherita</span><p>pinot grigio - Şişe: 2600 ₺ 𐃯 Kadeh: 520 ₺</p></li>
                  <li><span className="item-name">Franciacorta Brut DOCG - Ca' del Bosco</span><p>chardonnay, pinot nero - Şişe: 4400 ₺ 𐃯 Kadeh: 880 ₺</p></li>
                  <li><span className="item-name">Prosecco Superiore Valdobbiadene DOCG</span><p>glera - Şişe: 2900 ₺ 𐃯 Kadeh: 580 ₺</p></li>
                </ul>

                <h3 style={{ fontSize: '1.25em', color: '#0f0c06', marginTop: '20px', marginBottom: '10px', textTransform: 'lowercase' }}>la gabbia bar & kokteyller</h3>
                <ul className="menu-list">
                  <li><span className="item-name">negroni riserva 'la gabbia'</span><p>gin, carpano antica formula, campari, meşe dumanı, portakal esansı - 580 ₺</p></li>
                  <li><span className="item-name">aperol spritz veneziano</span><p>aperol, valdobbiadene prosecco docg, soda, portakal dilimi - 520 ₺</p></li>
                  <li><span className="item-name">limoncello sour</span><p>ev yapımı amalfi limoncellosu, cin, taze limon suyu, şeker şurubu - 540 ₺</p></li>
                  <li><span className="item-name">espresso martini italiano</span><p>votka, kahlua, taze çekilmiş italyan espresso - 560 ₺</p></li>
                  <li><span className="item-name">bellini classico</span><p>taze beyaz şeftali püresi, prosecco superiore - 520 ₺</p></li>
                  <li><span className="item-name">peroni nastro azzurro (33cl)</span><p>italyan birası - 320 ₺</p></li>
                </ul>

                <p className="note">
                  Herhangi bir gıda alerjiniz varsa lütfen servis personelimize bildiriniz.<br />
                  Tüm fiyatlar ₺ cinsindendir ve KDV dahildir.<br />
                  Menü güncelleme tarihi: 11/08/2026
                </p>
              </section>
            </div>
          ) : (
            /* =================== ENGLISH MENU =================== */
            <div>
              {/* CHEF'S TASTING MENU */}
              <section>
                <h2 className="section-title">chef's tasting menu (5 courses)</h2>
                <ul className="menu-list">
                  <li>
                    <span className="item-name">menu degustazione la gabbia ✦</span>
                    <p>1. burrata di puglia & balsamic pearls | 2. black truffle beef carpaccio | 3. fresh handmade truffle tagliolini | 4. beef fillet in chianti glaze | 5. signature tiramisù - 3250 ₺</p>
                  </li>
                </ul>
                <div className="legend">
                  <span>✦ Optional Sommelier Wine Pairing: + 1850 ₺</span>
                </div>
              </section>

              {/* ANTIPASTI */}
              <section>
                <h2 className="section-title">antipasti (starters)</h2>
                <ul className="menu-list">
                  <li>
                    <span className="item-name">pane & burro al tartufo</span>
                    <p>warm freshly baked rosemary focaccia, artisan truffle butter, olive tapenade - 250 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">burrata di puglia ♥</span>
                    <p>fresh pugliese burrata, roasted heirloom tomatoes, basil oil infusion, 12-yr aged modena balsamic caviar - 690 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">carpaccio di manzo al tartufo ✦</span>
                    <p>thinly sliced aged beef tenderloin, black truffle emulsion, 24-month parmigiano reggiano, crispy capers - 780 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">tartare di tonno rosso ✦</span>
                    <p>aegean wild bluefin tuna, sicilian blood orange reduction, avocado mousse, crisp rice paper - 840 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">vitello tonnato</span>
                    <p>slow-poached tender veal loin, creamy tuna and caper sauce, wild chives - 720 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">arancini al ragù e scamorza</span>
                    <p>crisp saffron arborio spheres with slow-braised veal ragù and smoked scamorza cheese, san marzano sauce - 580 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">melanzane alla parmigiana ♥</span>
                    <p>baked eggplant layers, buffalo mozzarella, fresh basil, san marzano tomato reduction - 540 ₺</p>
                  </li>
                </ul>
              </section>

              {/* PRIMI PIATTI */}
              <section>
                <h2 className="section-title">primi piatti (fresh handmade pasta & risotto)</h2>
                <ul className="menu-list">
                  <li>
                    <span className="item-name">tagliolini al tartufo pregiato ✦</span>
                    <p>daily hand-rolled 30-egg-yolk tagliolini, normandy truffle butter emulsion, freshly shaved black truffles - 920 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">pappardelle al ragù d'anatra</span>
                    <p>broad ribbon pasta, 8-hour braised duck leg ragù, tuscan juniper berry essence, aged pecorino - 860 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">ravioli di ricotta e spinaci ♥</span>
                    <p>fresh buffalo ricotta & baby spinach stuffed ravioli, brown hazelnut butter, crispy sage, toasted pine nuts - 760 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">risotto all'astice e zafferano ✦</span>
                    <p>carnaroli rice cooked in lobster bisque, poached buttered lobster tail, l'aquila saffron, preserved lemon zest - 1250 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">risotto ai funghi porcini e tartufo ♥</span>
                    <p>wild porcini mushrooms, 24-month parmigiano reggiano cream, fresh thyme, white truffle drizzle - 840 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">gnocchi alla sorrentina ♥</span>
                    <p>baked artisanal potato gnocchi, fior di latte mozzarella, fresh sweet basil san marzano sauce - 720 ₺</p>
                  </li>
                </ul>
              </section>

              {/* SECONDI PIATTI */}
              <section>
                <h2 className="section-title">secondi piatti (main courses)</h2>
                <ul className="menu-list">
                  <li>
                    <span className="item-name">filetto di manzo al chianti classico ✦</span>
                    <p>charcoal-seared beef tenderloin, chianti classico wine reduction, silky celeriac purée, wild asparagus - 1350 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">branzino in guazzetto di zafferano ✦</span>
                    <p>crisp-skin mediterranean sea bass fillet, saffron seafood broth, braised baby fennel, glazed carrots - 1100 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">costolette d'agnello alle erbe</span>
                    <p>pistachio and mountain herb crusted lamb rack, layered potato terrine, fresh mint jus - 1280 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">polpo alla griglia</span>
                    <p>wood-fired grilled octopus tentacle, smoked potato velouté, dehydrated kalamata olive crunch - 1050 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">ossobuco alla milanese</span>
                    <p>slow-braised cross-cut veal shank, citrus gremolata, served over saffron carnaroli risotto - 1380 ₺</p>
                  </li>
                </ul>
              </section>

              {/* DOLCI */}
              <section>
                <h2 className="section-title">dolci (desserts)</h2>
                <ul className="menu-list">
                  <li>
                    <span className="item-name">tiramisù tradizionale la gabbia ✦</span>
                    <p>house-made savoiardi ladyfingers, specialty roasted espresso soak, airy mascarpone cloud, valrhona cocoa - 420 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">panna cotta alla vaniglia del madagascar ♥</span>
                    <p>silky cooked cream infused with real madagascar vanilla bean, warm wild forest berry compote - 380 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">cannoli siciliani al pistacchio</span>
                    <p>crispy fried shell, sweetened buffalo ricotta, bronte pistachio crust, dark chocolate chips - 390 ₺</p>
                  </li>
                  <li>
                    <span className="item-name">torta caprese al cioccolato fondente</span>
                    <p>traditional flourless dark chocolate and almond capri cake, served with artisanal fior di latte gelato - 420 ₺</p>
                  </li>
                </ul>
              </section>

              {/* WINES & COCKTAILS */}
              <section>
                <h2 className="section-title">carta dei vini & cocktail (wines & bar)</h2>
                
                <h3 style={{ fontSize: '1.25em', color: '#0f0c06', marginTop: '20px', marginBottom: '10px', textTransform: 'lowercase' }}>red wines (vini rossi)</h3>
                <ul className="menu-list">
                  <li><span className="item-name">Barolo DOCG - Pio Cesare (Piedmont)</span><p>nebbiolo - Bottle: 3900 ₺ 𐃯 Glass: 780 ₺</p></li>
                  <li><span className="item-name">Brunello di Montalcino DOCG - Banfi (Tuscany)</span><p>sangiovese grosso - Bottle: 4200 ₺ 𐃯 Glass: 840 ₺</p></li>
                  <li><span className="item-name">Chianti Classico Riserva DOCG - Antinori</span><p>sangiovese, cabernet - Bottle: 2900 ₺ 𐃯 Glass: 580 ₺</p></li>
                  <li><span className="item-name">Amarone della Valpolicella DOCG - Masi</span><p>corvina, rondinella - Bottle: 4600 ₺</p></li>
                  <li><span className="item-name">Tignanello Toscana IGT - Antinori</span><p>sangiovese, cabernet sauvignon - Bottle: 9800 ₺</p></li>
                </ul>

                <h3 style={{ fontSize: '1.25em', color: '#0f0c06', marginTop: '20px', marginBottom: '10px', textTransform: 'lowercase' }}>white & sparkling wines (vini bianchi & bollicine)</h3>
                <ul className="menu-list">
                  <li><span className="item-name">Gavi di Gavi DOCG - Villa Sparina</span><p>cortese - Bottle: 2800 ₺ 𐃯 Glass: 560 ₺</p></li>
                  <li><span className="item-name">Pinot Grigio delle Venezie DOC - Santa Margherita</span><p>pinot grigio - Bottle: 2600 ₺ 𐃯 Glass: 520 ₺</p></li>
                  <li><span className="item-name">Franciacorta Brut DOCG - Ca' del Bosco</span><p>chardonnay, pinot nero - Bottle: 4400 ₺ 𐃯 Glass: 880 ₺</p></li>
                  <li><span className="item-name">Prosecco Superiore Valdobbiadene DOCG</span><p>glera - Bottle: 2900 ₺ 𐃯 Glass: 580 ₺</p></li>
                </ul>

                <h3 style={{ fontSize: '1.25em', color: '#0f0c06', marginTop: '20px', marginBottom: '10px', textTransform: 'lowercase' }}>la gabbia signature bar & cocktails</h3>
                <ul className="menu-list">
                  <li><span className="item-name">negroni riserva 'la gabbia'</span><p>gin, carpano antica formula, campari, oak smoke, orange oils - 580 ₺</p></li>
                  <li><span className="item-name">aperol spritz veneziano</span><p>aperol, valdobbiadene prosecco docg, soda water, fresh orange slice - 520 ₺</p></li>
                  <li><span className="item-name">limoncello sour</span><p>house-made amalfi limoncello, artisanal gin, fresh lemon juice, simple syrup - 540 ₺</p></li>
                  <li><span className="item-name">espresso martini italiano</span><p>vodka, kahlua, freshly pulled specialty espresso - 560 ₺</p></li>
                  <li><span className="item-name">bellini classico</span><p>fresh white peach purée, prosecco superiore - 520 ₺</p></li>
                  <li><span className="item-name">peroni nastro azzurro (33cl)</span><p>italian draft lager - 320 ₺</p></li>
                </ul>

                <p className="note">
                  If you have any food allergies, please inform our staff.<br />
                  All prices are in ₺. Price update date: 11/08/2026<br />
                  Prices include VAT.
                </p>
              </section>
            </div>
          )}
        </main>
      </div>

    </div>
  );
}
