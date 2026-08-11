export const menuItems = [
  // ANTIPASTI
  {
    id: "anti-1",
    category: "antipasti",
    name: "Burrata di Puglia con Pomodori Antichi",
    subtitle: "Puglia Burratası & Yadigâr Domatesler",
    enName: "Pugliese Burrata & Heirloom Tomatoes",
    desc: "Taze Puglia burratası, fırınlanmış renkli yadigâr domatesler, fesleğen yağı, 12 yıllık Modena balzamik havyarı.",
    enDesc: "Artisanal burrata from Puglia, roasted heirloom tomatoes, cold-pressed basil infusion, 12-year aged Modena balsamic pearls.",
    itDesc: "Burrata pugliese DOP, pomodori antichi confit, estratto di basilico, perle di balsamico tradizionale di Modena.",
    price: "720 ₺",
    tags: ["Vejetaryen", "Şefin İmzası", "Glutensiz"],
    winePairing: "Pinot Grigio delle Venezie DOC",
    image: "/assets/antipasti.jpg"
  },
  {
    id: "anti-2",
    category: "antipasti",
    name: "Carpaccio di Manzo al Tartufo Nero",
    subtitle: "Trüflü Dana Carpaccio",
    enName: "Black Truffle Beef Carpaccio",
    desc: "İncecik dilimlenmiş dinlendirilmiş dana antrikot, trüf mayonezi, 24 ay olgunlaştırılmış Parmigiano-Reggiano, kapari çıtırı.",
    enDesc: "Prime dry-aged beef tenderloin, winter black truffle cream, 24-month Parmigiano-Reggiano crisps, caper petals.",
    itDesc: "Carpaccio di filetto di manzo marinato, crema di tartufo nero, scaglie di Parmigiano Reggiano 24 mesi.",
    price: "860 ₺",
    tags: ["Şefin İmzası", "Glutensiz Opsiyon"],
    winePairing: "Chianti Classico Riserva DOCG",
    image: null
  },
  {
    id: "anti-3",
    category: "antipasti",
    name: "Tartare di Tonno Rosso e Agrumi di Sicilia",
    subtitle: "Kızıl Ton Balığı Tartar & Sicilya Narenciyesi",
    enName: "Bluefin Tuna Tartare & Sicilian Citrus",
    desc: "Ege taze ton balığı, Sicilya kan portakalı jeli, avokado kreması, taze kişniş filizleri ve çıtır pirinç tuiles.",
    enDesc: "Wild bluefin tuna tartare, Sicilian blood orange reduction, avocado mousse, crisp rice paper.",
    itDesc: "Battuta di tonno rosso, gelée agli agrumi di Sicilia, quenelle di avocado, cialda di riso croccante.",
    price: "890 ₺",
    tags: ["Deniz Mahsulü", "Glutensiz"],
    winePairing: "Vermentino di Sardegna DOC",
    image: null
  },
  {
    id: "anti-4",
    category: "antipasti",
    name: "Arancini al Ragù e Scamorza Affumicata",
    subtitle: "Trüflü & İsli Peynirli Arancini",
    enName: "Smoked Scamorza & Wild Ragù Arancini",
    desc: "Ağır ateşte pişmiş dana ragù ve isli Scamorza peynirli çıtır Sicilya pirinç topları, güneşte kurutulmuş domates sosu.",
    enDesc: "Crisp saffron arborio spheres stuffed with slow-braised ragù and smoked scamorza, san marzano coulis.",
    itDesc: "Arancini dorati allo zafferano, ragù di vitello, scamorza affumicata fondente.",
    price: "640 ₺",
    tags: ["Sıcak Başlangıç"],
    winePairing: "Valpolicella Ripasso DOC",
    image: null
  },

  // PRIMI PIATTI (Taze El Açması Makarnalar & Risotto)
  {
    id: "primi-1",
    category: "primi",
    name: "Tagliolini al Tartufo Pregiato",
    subtitle: "Taze Siyah Trüflü Tagliolini",
    enName: "Fresh Handcrafted Truffle Tagliolini",
    desc: "Her sabah taze açılan 30 yumurta sarılı tagliolini, Normandiya trüf tereyağı emülsiyonu ve masada taze dilimlenen siyah trüf mantarı.",
    enDesc: "Daily hand-rolled 30-yolk tagliolini, Normandy truffle butter emulsion, freshly shaved Norcia black truffle tableside.",
    itDesc: "Tagliolini freschi all'uovo, emulsione al burro di malga e tartufo nero estivo di Norcia.",
    price: "980 ₺",
    tags: ["Özel İmza Yemek", "Taze El Açması", "Vejetaryen"],
    winePairing: "Barolo DOCG di Serralunga",
    image: "/assets/pasta.jpg"
  },
  {
    id: "primi-2",
    category: "primi",
    name: "Pappardelle al Ragù d'Anatra e Ginepro",
    subtitle: "Ördek Ragùlu Geniş Pappardelle",
    enName: "Braised Duck Pappardelle with Juniper",
    desc: "Geniş taze pappardelle, 8 saat ağır ateşte pişmiş ördek incik ragùsu, ardıç tohumları ve rendelenmiş Pecorino Romano.",
    enDesc: "Broad ribbons of pasta, slow-braised duck leg ragù, Tuscan juniper berry essence, aged Pecorino Romano.",
    itDesc: "Pappardelle rustiche all'uovo, ragù d'anatra in umido al profumo di ginepro, scaglie di pecorino toscano.",
    price: "920 ₺",
    tags: ["Taze El Açması"],
    winePairing: "Brunello di Montalcino DOCG",
    image: null
  },
  {
    id: "primi-3",
    category: "primi",
    name: "Ravioli di Ricotta Fresca, Spinaci e Burro Salvia",
    subtitle: "Ispanak & Ricottalı Taze Mantı",
    enName: "Ricotta & Spinach Ravioli in Brown Sage Butter",
    desc: "Krema kıvamında manda ricottası ve taze ıspanak dolgulu ravioli, karamelize adaçayı tereyağı, çıtır çam fıstığı.",
    enDesc: "Handcrafted ravioli filled with creamy buffalo ricotta & baby spinach, hazelnut-brown butter, crispy sage, toasted pine nuts.",
    itDesc: "Ravioli fatti a mano di ricotta e spinacini, burro nocciola alla salvia e pinoli tostati.",
    price: "820 ₺",
    tags: ["Vejetaryen", "Taze El Açması"],
    winePairing: "Gavi di Gavi DOCG",
    image: null
  },
  {
    id: "primi-4",
    category: "primi",
    name: "Risotto all'Astice e Zafferano dell'Aquila",
    subtitle: "Istakozlu & Safranlı Carnaroli Risotto",
    enName: "Lobster & L'Aquila Saffron Risotto",
    desc: "Akivades ve kerevit bulyonunda dinlendirilmiş Carnaroli pirinci, ılık tereyağlı istakoz kuyruğu, Aquila safranı ve limon kabuğu rendesi.",
    enDesc: "Aged Carnaroli rice, poached buttered lobster tail, Abruzzo saffron reduction, preserved Amalfi lemon zest.",
    itDesc: "Risotto Carnaroli mantecato allo zafferano D.O.P., astice poché al burro salato, profumo di limone.",
    price: "1.280 ₺",
    tags: ["Şefin İmzası", "Deniz Mahsulü", "Glutensiz"],
    winePairing: "Franciacorta Brut DOCG",
    image: null
  },

  // SECONDI PIATTI (Ana Yemekler)
  {
    id: "secondi-1",
    category: "secondi",
    name: "Filetto di Manzo al Chianti e Foie Gras",
    subtitle: "Chianti Soslu Dana Bonfile & Kaz Ciğeri",
    enName: "Beef Tenderloin with Chianti Glaze & Foie Gras",
    desc: "Kömür ateşinde mühürlenmiş dana bonfile, tavada kızarmış kaz ciğeri madalyonu, Chianti şarap redüksiyonu, ipeksi kereviz püresi.",
    enDesc: "Wood-charred prime beef fillet, pan-seared foie gras medallion, Chianti Classico jus, velvety celeriac purée.",
    itDesc: "Filetto di manzo al carbone, scaloppa di fegato grasso, riduzione al Chianti, purè di sedano rapa.",
    price: "1.450 ₺",
    tags: ["Şefin İmzası", "Glutensiz"],
    winePairing: "Amarone della Valpolicella DOCG",
    image: null
  },
  {
    id: "secondi-2",
    category: "secondi",
    name: "Branzino Mediterraneo in Guazzetto di Zafferano",
    subtitle: "Safran Soslu Levrek Fileto",
    enName: "Pan-Seared Sea Bass with Saffron Emulsion",
    desc: "Tavada derisi çıtır levrek fileto, safranlı deniz suyu emülsiyonu, karamelize rezene kökü, bebek havuçlar ve taze dağ kekiği.",
    enDesc: "Pan-crisped Mediterranean sea bass, golden saffron broth, braised baby fennel, glazed heirloom carrots.",
    itDesc: "Filetto di branzino all'amo scottato, brodetto allo zafferano, finocchio brasato e timo selvatico.",
    price: "1.150 ₺",
    tags: ["Deniz Mahsulü", "Glutensiz"],
    winePairing: "Greco di Tufo DOCG",
    image: "/assets/secondi.jpg"
  },
  {
    id: "secondi-3",
    category: "secondi",
    name: "Costolette d'Agnello alle Erbe di Montagna",
    subtitle: "Dağ Kekikli Kuzu Pirzola",
    enName: "Herb-Crusted Rack of Lamb",
    desc: "Pistachio ve biberiyeli ekmek kırıntısıyla kaplanmış süt kuzusu pirzola, fırınlanmış patates terrine, taze nane jus.",
    enDesc: "Pistachio and rosemary crusted lamb chops, layered potato terrine, mint-infused lamb reduction.",
    itDesc: "Costolette d'agnello in crosta di pistacchi ed erbe aromatiche, terrina di patate al timo.",
    price: "1.320 ₺",
    tags: ["Şefin Tavsiyesi"],
    winePairing: "Primitivo di Manduria DOC",
    image: null
  },

  // DOLCI (Tatlılar)
  {
    id: "dolci-1",
    category: "dolci",
    name: "Tiramisù Tradizionale 'La Gabbia'",
    subtitle: "İmza Tiramisu La Gabbia",
    enName: "Signature Deconstructed Tiramisu",
    desc: "Geleneksel Savoyardi bisküvileri, özel kavrulmuş İtalyan espresso infüzyonu, havalandırılmış hafif mascarpone kreması ve altın varaklı tuile.",
    enDesc: "Handcrafted savoiardi soaked in house-roasted Italian espresso, light-as-air mascarpone cream, Valrhona dark cocoa cloud.",
    itDesc: "Savoiardi morbidi fatti in casa, bagnati all'espresso arabica, soffice crema al mascarpone, foglia d'oro.",
    price: "460 ₺",
    tags: ["İmza Tatlı", "Vejetaryen"],
    winePairing: "Passito di Pantelleria DOC",
    image: "/assets/dessert.jpg"
  },
  {
    id: "dolci-2",
    category: "dolci",
    name: "Panna Cotta alla Vaniglia del Madagascar",
    subtitle: "Madagaskar Vanilyalı Panna Cotta",
    enName: "Madagascar Vanilla Bean Panna Cotta",
    desc: "İpeksi kıvamda vanilya çekirdekli panna cotta, taze orman meyveleri çektirmesi, fesleğen şerbeti çıtırı.",
    enDesc: "Silky cooked cream with real Madagascar vanilla caviar, wild berry coulis, basil sugar crisp.",
    itDesc: "Panna cotta vellutata alla vaniglia bourbon, composta di frutti di bosco caldi.",
    price: "420 ₺",
    tags: ["Glutensiz", "Vejetaryen"],
    winePairing: "Moscato d'Asti DOCG",
    image: null
  },
  {
    id: "dolci-3",
    category: "dolci",
    name: "Cannoli Siciliani Croccanti al Pistacchio",
    subtitle: "Antep Fıstıklı Çıtır Sicilya Cannoli",
    enName: "Crisp Sicilian Cannoli with Bronte Pistachio",
    desc: "Geleneksel kıtır cannoli kabuğu, tatlandırılmış manda ricottası, Bronte antep fıstığı kaplaması ve bitter çikolata damlaları.",
    enDesc: "Hand-rolled crispy cannoli shell, sweet sheep's milk ricotta, crushed Bronte pistachios, dark chocolate chips.",
    itDesc: "Cannolo siciliano classico fritto a mano, ricotta fresca, granella di pistacchio di Bronte.",
    price: "440 ₺",
    tags: ["Geleneksel", "Vejetaryen"],
    winePairing: "Marsala Superiore Riserva",
    image: null
  },

  // BEVANDE & VINI (Şaraplar & Kokteyller)
  {
    id: "bevande-1",
    category: "bevande",
    name: "Negroni Riserva 'La Gabbia'",
    subtitle: "Meşe Fıçıda Dinlendirilmiş Negroni",
    enName: "Oak-Aged Signature Negroni",
    desc: "Tanqueray No. TEN, Campari, Antica Formula Vermouth, kiraz meşesi dumanı, kristal tek buz kalıbı ve portakal esansı.",
    enDesc: "Tanqueray No. TEN, Campari, Carpano Antica Formula, cherry wood smoke, artisanal hand-cut clear ice block.",
    itDesc: "Gin premium, Campari Bitter, Vermouth Antica Formula, affinato in botti di rovere, zeste d'arancia.",
    price: "560 ₺",
    tags: ["İmza Kokteyl"],
    winePairing: "Antipasti ve et yemekleri ile mükemmel",
    image: "/assets/cocktail.jpg"
  },
  {
    id: "bevande-2",
    category: "bevande",
    name: "Aperol Spritz Veneziano",
    subtitle: "Venedik Usulü Aperol Spritz",
    enName: "Venetian Aperol Spritz",
    desc: "Aperol, Prosecco Superiore Valdobbiadene DOCG, soda, taze Akdeniz portakalı ve zeytin.",
    enDesc: "Aperol, premium DOCG Prosecco, sparkling soda, Mediterranean orange slice & olive.",
    itDesc: "Aperol, Prosecco Superiore di Valdobbiadene, soda, fetta d'arancia.",
    price: "490 ₺",
    tags: ["Klasik Aperitif"],
    winePairing: null,
    image: null
  },
  {
    id: "bevande-3",
    category: "bevande",
    name: "Barolo DOCG - Pio Cesare (Piemonte)",
    subtitle: "Nebbiolo Üzümü | Kırmızı Şarap Kadeh & Şişe",
    enName: "Barolo DOCG - Pio Cesare (Red Wine)",
    desc: "Zarif menekşe, trüf, kuru vişne ve baharat tonları. 36 ay meşe fıçılarda dinlendirilmiş efsanevi İtalyan kırmızısı.",
    enDesc: "Complex notes of dried violet, truffles, ripe cherries and refined tannins. 36 months in oak.",
    itDesc: "100% Nebbiolo, grande struttura, tannini vellutati, sentori di sottobosco e spezie.",
    price: "Kadeh: 750 ₺ / Şişe: 3.800 ₺",
    tags: ["Özel Şarap Kavı", "Piemonte"],
    winePairing: "Trüflü makarnalar ve dana bonfile için ideal",
    image: null
  },
  {
    id: "bevande-4",
    category: "bevande",
    name: "Brunello di Montalcino DOCG - Banfi (Toscana)",
    subtitle: "Sangiovese Grosso | Kırmızı Şarap",
    enName: "Brunello di Montalcino DOCG (Red Wine)",
    desc: "Koyu yakut rengi, vanilya, tütün ve olgun böğürtlen notaları. Güçlü ve son derece dengeli gövde.",
    enDesc: "Deep ruby red, aromas of vanilla, cured tobacco and wild blackberries with a long velvet finish.",
    itDesc: "Sangiovese in purezza, affinato in botte grande di rovere, eccellenza toscana.",
    price: "Kadeh: 820 ₺ / Şişe: 4.200 ₺",
    tags: ["Özel Şarap Kavı", "Toscana"],
    winePairing: "Kuzu pirzola ve olgun peynirler ile uyumlu",
    image: null
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "La Gabbia Salonu",
    subtitle: "Sade beyaz mimari, altın kemerler ve samimi loş ışık.",
    image: "/assets/interior.jpg",
    tag: "Ambiyans"
  },
  {
    id: 2,
    title: "Tagliolini al Tartufo",
    subtitle: "Her sabah taze açılan el yapımı makarna ve taze siyah trüf mantarı.",
    image: "/assets/pasta.jpg",
    tag: "Taze Makarna"
  },
  {
    id: 3,
    title: "Burrata di Puglia",
    subtitle: "Puglia'dan özel gelen taze burrata, yadigâr domatesler ve balzamik havyarı.",
    image: "/assets/antipasti.jpg",
    tag: "Antipasti"
  },
  {
    id: 4,
    title: "Branzino con Zafferano",
    subtitle: "Kızarmış çıtır Akdeniz levreği ve safran sosu zarafeti.",
    image: "/assets/secondi.jpg",
    tag: "Secondi"
  },
  {
    id: 5,
    title: "Tiramisù La Gabbia",
    subtitle: "Hafif mascarpone kreması, özel kavrum espresso ve kakao sanatı.",
    image: "/assets/dessert.jpg",
    tag: "Dolci"
  },
  {
    id: 6,
    title: "Meşe Fıçı Negroni & Şarap Kavı",
    subtitle: "Klasik İtalyan kokteylleri ve seçkin Toskana & Piemonte şarapları.",
    image: "/assets/cocktail.jpg",
    tag: "Bar & Kav"
  }
];
