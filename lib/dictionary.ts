export type Language = 'sv' | 'en';

export interface ServiceCardData {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  href: string;
}

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface FeatureData {
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

export interface PartnerSchool {
  name: string;
  location: string;
  url: string;
  email?: string;
  phone?: string;
}

export interface DictionaryContent {
  nav: {
    home: string;
    risk2bil: string;
    risk2mc: string;
    ykb: string;
    gallery: string;
    partners: string;
    about: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustStat1: string;
    trustStat1Sub: string;
    trustStat2: string;
    trustStat2Sub: string;
    trustStat3: string;
    trustStat3Sub: string;
  };
  services: {
    title: string;
    subtitle: string;
    bookButton: string;
    learnMore: string;
    cards: ServiceCardData[];
  };
  whyUs: {
    title: string;
    subtitle: string;
    features: FeatureData[];
  };
  video: {
    title: string;
    subtitle: string;
    badge: string;
  };
  disclaimer: {
    topBadge: string;
    topTag: string;
    readMore: string;
    footerTitle: string;
    footerText: string;
    layoutNotice: string;
  };
  risk2bilPage: {
    categoryBadge: string;
    title: string;
    intro1: string;
    intro2: string;
    durationTag: string;
    reportingTag: string;
    bookButton: string;
    processTitle: string;
    processSubtitle: string;
    theoryBadge: string;
    theoryLoc: string;
    theoryTitle: string;
    theoryDesc: string;
    theoryItems: string[];
    practicalBadge: string;
    practicalLoc: string;
    practicalTitle: string;
    practicalDesc: string;
    practicalItemsTitle: string;
    practicalItems: string[];
    practicalNotice: string;
    includedTitle: string;
    includedDesc1: string;
    includedDesc2: string;
    importantTitle: string;
    idTitle: string;
    idDesc: string;
    timeTitle: string;
    timeDesc: string;
    alcoholTitle: string;
    alcoholDesc: string;
    carsTitle: string;
    carsDesc: string;
    cancelTitle: string;
    cancelDesc: string;
    faqTitle: string;
    faqItems: FaqItemData[];
  };
  risk2mcPage: {
    categoryBadge: string;
    title: string;
    intro1: string;
    intro2: string;
    durationTag: string;
    mcTag: string;
    bookButton: string;
    whatIsTitle: string;
    whatIsDesc1: string;
    focusTitle: string;
    focusItems: string[];
    whatIsDesc2: string;
    reqBadge: string;
    reqTitle: string;
    reqItems: string[];
    cancelNotice: string;
    videoBadge: string;
    videoTitle: string;
    videoSubtitle: string;
    partnerTitle: string;
    partnerSubtitle: string;
    faqTitle: string;
    faqItems: FaqItemData[];
  };
  ykbPage: {
    categoryBadge: string;
    title: string;
    intro: string;
    durationTag: string;
    priceTag: string;
    bookButton: string;
    card1Title: string;
    card1Desc1: string;
    card1Desc2: string;
    card1Badge: string;
    card2Title: string;
    card2Desc1: string;
    card2Desc2: string;
    card2Badge: string;
    card3Title: string;
    card3Desc1: string;
    card3Desc2: string;
    card3Badge: string;
    categoriesTitle: string;
    categoriesSubtitle: string;
    categories: { title: string; desc: string; button: string }[];
    syllabusTitle: string;
    syllabusSub: string;
    syllabusItems: { title: string; text: string }[];
    corpTitle: string;
    corpDesc: string;
    corpContact: string;
    validityTitle: string;
    validityDesc: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    images: GalleryImage[];
  };
  partners: {
    title: string;
    subtitle: string;
    institutionalTitle: string;
    institutionalDesc: string;
    schools: PartnerSchool[];
  };
  bookingCta: {
    title: string;
    subtitle: string;
    buttonText: string;
    notice: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItemData[];
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submitButton: string;
    successMessage: string;
    mapTitle: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    legal: string;
    copyright: string;
  };
}

export const DICTIONARY: Record<Language, DictionaryContent> = {
  sv: {
    nav: {
      home: "Hem",
      risk2bil: "Risk 2 Bil",
      risk2mc: "Risk 2 MC",
      ykb: "YKB Utbildning",
      gallery: "Galleri",
      partners: "Trafikskolor",
      about: "Om oss",
      contact: "Kontakt",
      bookNow: "Boka Halkbana",
    },
    hero: {
      badge: "Godkänd av Transportstyrelsen",
      title: "Säkerhet & Kontroll på Halkbanan i Piteå",
      subtitle: "Officiell utbildare för Riskutbildning 2 (Risktvåan) för Personbil, Motorcykel och YKB i Norrbotten. Professionell och trygg utbildning med sikte på nollvisionen.",
      ctaPrimary: "Boka utbildning nu",
      ctaSecondary: "Utforska våra kurser",
      trustStat1: "100% Godkänd",
      trustStat1Sub: "Transportstyrelsen certifierad",
      trustStat2: "Piteå Halkbana",
      trustStat2Sub: "Modern halkbana med säkra fordon",
      trustStat3: "Direktbekräftelse",
      trustStat3Sub: "Smidig bokning via Bokningskoll",
    },
    services: {
      title: "Våra Utbildningar",
      subtitle: "Välj den utbildning du behöver för ditt körkort eller din yrkesförarkompetens.",
      bookButton: "Boka Riskutbildning 2",
      learnMore: "Läs mer om kursen",
      cards: [
        {
          id: "risk-2-bil",
          title: "Riskutbildning 2 Bil (Risktvåan)",
          category: "Personbil (B)",
          description: "Obligatorisk halkbaneutbildning för dig som ska ta B-körkort. Praktiska övningar på halkbana där du lär dig hantera fordonet under extrema förhållanden.",
          duration: "ca 3.5 timmar",
          price: "Kontakta / Se bokning",
          features: [
            "Praktisk körning på halkbana",
            "Förståelse för bromssträckor och hastighet",
            "Säkerhetssystem och sladdstyrenhet",
            "Direkt rapportering till Transportstyrelsen",
          ],
          href: "/risk-2-bil",
        },
        {
          id: "risk-2-mc",
          title: "Riskutbildning 2 MC",
          category: "Motorcykel (A1, A2, A)",
          description: "Specialanpassad riskutbildning för motorcykelförare. Uppleva bromsning, balans, svängteknik och riskfyllda situationer i kontrollerad miljö.",
          duration: "ca 4 timmar",
          price: "Se lediga tider",
          features: [
            "Fokus på MC-specifika risker",
            "Bromsteknik och undanmanöver",
            "Erfarna instruktörer med MC-licens",
            "Utrustning och fordon tillgängliga",
          ],
          href: "/risk-2-mc",
        },
        {
          id: "ykb",
          title: "YKB Utbildning",
          category: "Yrkesförare (C & D)",
          description: "Yrkeskompetensutbildning för tung trafik. Återkommande fortbildning samt grundutbildningar för yrkesförare på lastbil och buss.",
          duration: "Delkurs / Heltid",
          price: "Företag / Privat",
          features: [
            "Uppfyller Transportstyrelsens YKB-krav",
            "Alla delkurser 1-5 tillgängliga",
            "Erfarna utbildare inom tung trafik",
            "Anpassat för transportföretag & enskilda",
          ],
          href: "/ykb-utbildning",
        },
      ],
    },
    whyUs: {
      title: "Varför välja Norra Halkbanan?",
      subtitle: "Vi erbjuder en av Norrlands mest moderna och välskötta halkbanor.",
      features: [
        {
          title: "Erfarna & Engagerade Instruktörer",
          description: "Våra godkända instruktörer ger dig en pedagogisk och trygg upplevelse anpassad efter din kunskapsnivå.",
        },
        {
          title: "Säkra & Moderna Utbildningsbilar",
          description: "Våra bilar är utrustade med dubbelkommando och modern säkerhetsteknik för maximal trygghet under halkkörningen.",
        },
        {
          title: "Centralt Beläget i Piteå",
          description: "Lättillgänglig halkbana på Fordonsvägen 2 i Piteå med goda parkeringsmöjligheter och komfortabla lokaler.",
        },
        {
          title: "Snabb Rapportering",
          description: "När du genomfört utbildningen rapporterar vi direkt digitalt till Transportstyrelsen så att du kan gå vidare mot körkortet.",
        },
      ],
    },
    video: {
      title: "Sveriges Trafikövningsplatser & Norra Halkbanan",
      subtitle: "Se filmen om vår anläggning, halkbana och hur våra praktiska säkerhetsutbildningar går till.",
      badge: "Presentationsfilm",
    },
    disclaimer: {
      topBadge: "DEMO-WEBBPLATS:",
      topTag: "Byggd enbart för marknadsföring och utvärdering.",
      readMore: "Läs Ansvarsfriskrivning",
      footerTitle: "Ansvarsfriskrivning & Demomeddelande:",
      footerText: "Denna webbplats (driving-school-demo-nine.vercel.app) är enbart en demonstration skapad i marknadsförings- och utvärderingssyfte. Den gör inga anspråk på originalinnehållet på norrahalkbanan.se och är inte avsedd att inkräkta på upphovsrätt. Alla varumärken och logotyper tillhör sina respektive ägare.",
      layoutNotice: "Ansvarsfriskrivning: Inofficiell redesign-demonstration för presentation och utvärdering. Originalwebbplats:",
    },
    risk2bilPage: {
      categoryBadge: "Personbil (Körkort B) — Obligatorisk Risktvåan",
      title: "Risk 2 bil i Piteå",
      intro1: "Välkommen till Risk 2, även kallad riskutbildning 2 eller halkbanan, som är den andra praktiska och obligatoriska delen av riskutbildningen för B-körkort. Du kan inte göra körprovet utan en godkänd riskutbildning.",
      intro2: "På Norra halkbanan kan du via trafikskolor i Norrbotten eller själv boka Risk 2 utbildning. Vi har trafikskolor som regelbundet använder sig av halkbanan i Piteå. Hos oss genomför du utbildningen i en trygg och realistisk miljö med intro och praktisk körning i olika moment.",
      durationTag: "ca 3,5 - 4 timmar",
      reportingTag: "Direktrapportering till Transportstyrelsen",
      bookButton: "Riskutbildning 2 bokning",
      processTitle: "Hur går Risk 2 till?",
      processSubtitle: "Utbildningen är uppdelad i två sammankopplade delmoment: Teori och Praktisk Övning.",
      theoryBadge: "Delmoment 1",
      theoryLoc: "Inne i lektionssal",
      theoryTitle: "Teori & Introduktion",
      theoryDesc: "Risk 2 utbildningen börjar med en teoretisk genomgång med övningar och diskussioner om risksituationer som kan uppstå i trafiken på Norra halkbanan i Piteå.",
      theoryItems: [
        "Legitimationskontroll: Obligatorisk kontroll av giltig ID-handling.",
        "Alkoholtest: Obligatorisk blåsning, introduktion, syfte och mål.",
        "Krocksläde (7 km/h): Testa hur det känns att krocka i låg hastighet genom att åka i en stol ner för en ramp (frivilligt).",
        "Voltbil: Upplev hur det är att sitta fastspänd i en upp- och nedvänd bil (frivilligt).",
        "Reflektion: Avslutande diskussioner kring mänskliga begränsningar.",
      ],
      practicalBadge: "Delmoment 2",
      practicalLoc: "Ute på Halkbanan",
      practicalTitle: "Praktisk Körning på Banan",
      practicalDesc: "Själva körningen utförs med två elever i bilen och instruktioner via komradio från körskolläraren på banan.",
      practicalItemsTitle: "Praktiska övningsmoment på banan:",
      practicalItems: [
        "Manövrering mellan koner",
        "Undanmanöver vid plötsliga hinder",
        "Bromsövningar och bromssträckor på halt väglag",
      ],
      practicalNotice: "OBS! All praktisk körning sker på egen risk.",
      includedTitle: "Vad ingår i riskutbildning del 2?",
      includedDesc1: "Under riskutbildningen del 2 får du uppleva hur bilen reagerar på halt väglag, hög hastighet och plötsliga hinder. Syftet med momenten är att ge en bättre förståelse för sambandet mellan hastighet, vägunderlag och säkerhet samt hur riskfyllda situationer kan förebyggas.",
      includedDesc2: "Du får även kunskap om andra vanliga riskfaktorer som trötthet, mobilanvändning och bristande uppmärksamhet bakom ratten. Målet är att skapa större riskmedvetenhet och ge dig bättre förståelse för hur olika situationer kan påverka både dig själv och andra trafikanter.",
      importantTitle: "Viktig information inför Risk 2",
      idTitle: "Giltig Legitimation",
      idDesc: "För att du ska kunna genomföra riskutbildningen måste du ta med giltig fysisk legitimation. Saknas giltig legitimation kan registrering ej ske.",
      timeTitle: "Kom i God Tid",
      timeDesc: "Kom i god tid innan utbildningen startar. Vid sen ankomst kan du bli nekad att delta eftersom utbildningen genomförs enligt fasta säkerhetstider.",
      alcoholTitle: "Obligatoriskt Blåstest",
      alcoholDesc: "Innan utbildningen startar genomförs en obligatorisk alkoholblåsning. Utbildningen får inte genomföras under påverkan av alkohol eller droger.",
      carsTitle: "Utbildningsbilar Tillhandahålls",
      carsDesc: "Utbildningen sker med våra specialutrustade utbildningsbilar på halkbanan. Du behöver inte ta med egen bil.",
      cancelTitle: "Om- & Avbokningsregler",
      cancelDesc: "Avbokning eller ombokning måste ske senast 3 arbetsdagar i förväg. Vid sen avbokning eller utebliven närvaro kan avgift debiteras.",
      faqTitle: "Vanliga frågor om Risk 2 Bil",
      faqItems: [
        {
          question: "Hur lång tid tar Risk 2?",
          answer: "Riskutbildning del 2 tar ungefär 3-4 timmar totalt på Norra halkbanan i Piteå.",
        },
        {
          question: "Hur länge gäller Risk 2?",
          answer: "Riskutbildningen är giltig i 5 år från det datum du genomför den, eller tills du tar ditt körkort.",
        },
        {
          question: "Måste man göra Risk 2 innan uppkörning?",
          answer: "Ja, det är obligatoriskt att ha en godkänd riskutbildning (både del 1 och del 2) registrerad hos Transportstyrelsen innan du genomför ditt körprov (uppkörning).",
        },
        {
          question: "Kan man kugga Risk 2?",
          answer: "Risk 2 är en deltagandeutbildning utan formellt prov, men du måste delta aktivt under hela kursen, följa instruktörens säkerhetsanvisningar och behärska grundläggande bilkörning.",
        },
        {
          question: "Kan man göra Risk 2 före Risk 1?",
          answer: "Ja, det finns inget krav på i vilken ordning del 1 och del 2 genomförs. Båda måste dock vara godkända innan du gör teoriprov och uppkörning.",
        },
      ],
    },
    risk2mcPage: {
      categoryBadge: "Motorcykel (Behörighet A1, A2, A)",
      title: "Risk 2 MC i Piteå",
      intro1: "Välkommen till oss på Norra Halkbanan i Piteå! Vi erbjuder Riskutbildning del 2 för MC, även kallad Risktvåan MC, för dig som tar MC-kort. Den här utbildningen är obligatorisk för dig som vill ta körkort för motorcykel (A, A1 eller A2).",
      intro2: "Att ta motorcykelkörkort är ett stort steg mot frihet och äventyr på två hjul. Men det handlar också om ansvar, säkerhet och rätt kunskap. På Norra Halkbanan i Piteå erbjuder vi denna utbildning till privatpersoner och trafikskoleelever från hela Norrbotten och Västerbotten.",
      durationTag: "ca 4 timmar",
      mcTag: "Motorcyklar finns att låna på plats",
      bookButton: "Boka Risk 2 MC",
      whatIsTitle: "Vad är Risktvåan MC?",
      whatIsDesc1: "Risktvåan MC är en praktisk utbildning som är framtagen för att öka din förståelse för hur olika riskfaktorer påverkar dig som förare och hur du på bästa sätt undviker farliga situationer. Till skillnad från Risk 1 (som är teoretisk) fokuserar Risk 2 MC på praktiska övningar i verklig körning.",
      focusTitle: "Huvudfokus i utbildningen:",
      focusItems: [
        "Hastighet och säkerhetsmarginaler",
        "Riskbeteenden i trafiken",
        "Körning under särskilda väg- och väderförhållanden",
        "Manövrering och bromsövningar",
      ],
      whatIsDesc2: "Du får bland annat uppleva hur hastighet, underlag och din egen reaktionstid samspelar. Målet är inte att testa din gräns, utan att göra dig medveten om var den går så att du kan hålla dig innanför den och bli en säkrare MC-förare.",
      reqBadge: "Krav för deltagande",
      reqTitle: "Vad krävs för att delta?",
      reqItems: [
        "Du måste vara i slutskedet av din MC-utbildning.",
        "Du ska kunna hantera motorcykeln obehindrat.",
        "Medtag giltig fysisk legitimation.",
        "Du måste vara helt nykter (0,0‰ alkohol) – alkomätare används före kursstart.",
        "Vi tillhandahåller motorcyklar på plats, men du får gärna ta med egen godkänd MC-utrustning.",
      ],
      cancelNotice: "Avbokning eller ombokning måste ske senast 3 arbetsdagar i förväg.",
      videoBadge: "Presentationsfilm Haraholmen",
      videoTitle: "Se Norra Halkbanan Haraholmen i Action",
      videoSubtitle: "Upplev anläggningen och banan i Piteå där våra riskutbildningar genomförs.",
      partnerTitle: "Samarbetande Trafikskolor för MC-Bokning",
      partnerSubtitle: "Vid bokning av Risk 2 MC kan du också kontakta någon av våra samarbetande trafikskolor:",
      faqTitle: "Vanliga frågor om Risk 2 MC",
      faqItems: [
        {
          question: "Vad ingår i Risk 2 MC hos Norra Halkbanan?",
          answer: "Utbildningen omfattar praktiska övningar där du tränar på hastighet, bromsning, manövrering och hur olika väder- och vägförhållanden påverkar din körning. Syftet är att ge dig en ökad förståelse för risker i trafiken och hur du kan undvika dem som MC-förare.",
        },
        {
          question: "Vem kan gå Risk 2 MC?",
          answer: "Risk 2 MC är obligatorisk för alla som tar MC-körkort, oavsett om det gäller A, A1 eller A2. Du behöver vara i slutskedet av din utbildning och kunna hantera motorcykeln obehindrat innan du deltar.",
        },
        {
          question: "Var hålls Risk 2 MC i Piteå?",
          answer: "Utbildningen genomförs på Norra Halkbanan, Fordonsvägen 2 i Piteå. Vi samarbetar med flera trafikskolor i regionen, bland annat Centrala Trafikskolan och MK / Håkans Trafikskola, för bokning och planering av kursen.",
        },
        {
          question: "Vad behöver jag ta med till Risk 2 MC?",
          answer: "Alltid giltig legitimation. Du får gärna ta med egen MC-utrustning, men motorcyklar finns att låna på plats. Observera att du måste vara nykter (0,0‰ alkohol) – alkomätning sker före kursstart.",
        },
      ],
    },
    ykbPage: {
      categoryBadge: "Yrkesförare (Tung trafik C, CE, D, DE)",
      title: "YKB Utbildning i Piteå",
      intro: "Vi erbjuder Yrkeskompetensutbildning (YKB) för tung trafik. Fortbildningen består av fem delkurser som behandlar bland annat trafiksäkerhet, miljökörning, lagar och regler samt service och kundbemötande.",
      durationTag: "35 timmar totalt (5 dagar × 7 timmar)",
      priceTag: "1 280 kr exkl moms / delkurs",
      bookButton: "YKB bokning (Bokningskoll)",
      card1Title: "Vad kostar YKB Utbildning?",
      card1Desc1: "Priset för varje delkurs är 1 280 kr exkl. moms.",
      card1Desc2: "Kurserna har fem delmoment, så totalt kostar en hel utbildning 6 400 kr exkl. moms.",
      card1Badge: "1 280 kr / delkurs (6 400 kr totalt ex moms)",
      card2Title: "Hur lång är utbildningen?",
      card2Desc1: "Totalt är vår fortbildningskurs 35 timmar.",
      card2Desc2: "Varje dag innehåller 7 timmars utbildning, så det blir 5 dagar totalt som kan spridas ut enligt önskemål, upp till ett 5-årsspann.",
      card2Badge: "5 dagar à 7 timmar (upp till 5 års spann)",
      card3Title: "Vilka krav finns för YKB?",
      card3Desc1: "Du behöver ha ett giltigt körkort med rätt behörighet för det fordon du kör (t.ex. C, CE, D eller DE).",
      card3Desc2: "Utbildningen riktar sig till yrkesförare som vill uppfylla lagkravet på fortbildning enligt YKB-lagen.",
      card3Badge: "Kräver giltigt körkort (C, CE, D, DE)",
      categoriesTitle: "Utbildningskategorier inom Tung Trafik",
      categoriesSubtitle: "Oavsett om du kör godstransport med tung lastbil eller persontransport med buss ger vi dig rätt kompetens och certifiering.",
      categories: [
        {
          title: "YKB Godstransport (C / CE)",
          desc: "Fortbildning och delkurser anpassade för yrkesförare på tung lastbil.",
          button: "YKB bokning (Lastbil & Buss)",
        },
        {
          title: "YKB Persontransport (D / DE)",
          desc: "Kompetensutbildning för förare inom persontransport och busstrafik.",
          button: "YKB bokning (Lastbil & Buss)",
        },
        {
          title: "Flexibel Utbildning & Distans",
          desc: "Fortbildning fördelad på 5 delmoment som kan spridas ut under 5 år.",
          button: "YKB bokning (Lastbil & Buss)",
        },
      ],
      syllabusTitle: "Vad innehåller YKB-fortbildningen?",
      syllabusSub: "Fem delkurser för ökad säkerhet och professionalism",
      syllabusItems: [
        { title: "Delkurs 1: Sparsam körning & Miljö", text: "Optimering av drivlina, bränslebesparing och miljöanpassad körning." },
        { title: "Delkurs 2: Godstransporter / Persontransporter", text: "Godssäkring, surrning samt specifik persontransportsäkerhet." },
        { title: "Delkurs 3: Lagar och regler", text: "Kör- och vilotider, färdskrivare och transportbestämmelser." },
        { title: "Delkurs 4: Ergonomi, Hälsa & Kundbemötande", text: "Arbetsmiljö, hälsa, trafiksäkerhet och service inriktad mot kund." },
        { title: "Delkurs 5: Trafiksäkerhet & Nödsituationer", text: "Riskmedvetenhet, första hjälpen och agerande vid olyckssituationer." },
      ],
      corpTitle: "Boka din YKB-utbildning online",
      corpDesc: "Välj ledigt datum för lastbil och buss i vår officiella bokningsportal.",
      corpContact: "För åkerier & företag: Vi anordnar även företagsanpassade YKB-utbildningar.",
      validityTitle: "Information om Giltighet",
      validityDesc: "Ett Yrkeskompetensbevis (YKB) är giltigt i 5 år. För att förnya beviset genomgår yrkesföraren 35 timmars fortbildning fördelat på 5 delkurser innan beviset löper ut.",
    },
    gallery: {
      title: "Galleri & Bilder från Banan",
      subtitle: "Se bilder från vår halkbana, övningsfordon, lektionssal och säkerhetsutrustning.",
      images: [
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2018/08/galleri-korsningen.jpg",
          title: "Övningskorsning på Halkbanan",
          category: "Banöversikt",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/IMG_1021-scaled-1.jpg",
          title: "Norra Halkbanan Anläggning",
          category: "Anläggning",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/Norra-Halkbanan-4-scaled.jpg",
          title: "Körövningar & Halkkörning",
          category: "Utbildning",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/Norra-Halkbanan-5-scaled.jpg",
          title: "Moderna Utbildningsfordon",
          category: "Fordon",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/galleri-reception-ute.webp",
          title: "Reception & Entré",
          category: "Lokaler",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2018/08/galleri-voltbil.jpg",
          title: "Voltbil Säkerhetsövning",
          category: "Säkerhetsutrustning",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2018/08/galleri-lektionssal-2.jpg",
          title: "Komfortabel Lektionssal",
          category: "Lokaler",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/Overblick-pa-verksamheten.webp",
          title: "Överblick på Verksamheten",
          category: "Anläggning",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/galleri-krockslade.webp",
          title: "Krocksläde Säkerhetstest",
          category: "Säkerhetsutrustning",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/galleri-nack-slade.webp",
          title: "Nacksläde Demonstration",
          category: "Säkerhetsutrustning",
        },
      ],
    },
    partners: {
      title: "Trafikskolor som nyttjar banan",
      subtitle: "Följande godkända trafikskolor och organisationer nyttjar regelbundet Norra Halkbanan för sina elever:",
      institutionalTitle: "Myndigheter & Organisationer",
      institutionalDesc: "Även Försvarsmakten, Migrationsverket och Arbetsmiljöverket nyttjar tidvis banan för sina förar- och säkerhetsutbildningar.",
      schools: [
        { name: "Roberts Trafikskola", location: "Luleå, Piteå, Boden", url: "https://www.robertstrafikskola.se/om-oss/pitea/" },
        { name: "Expansa Trafikskola", location: "Boden & Luleå", url: "https://www.expansa.se/" },
        { name: "3050 Din Trafikskola", location: "Piteå", url: "https://www.3050.se/" },
        { name: "Po’s Trafikskola", location: "Luleå", url: "https://www.pos-trafikskola.se/lulea/" },
        { name: "Vågelinds Trafikskola", location: "Luleå", url: "https://www.vagelindstrafikskola.se/" },
        { name: "MT Trafikskola", location: "Luleå", url: "http://www.mttrafikskola.se/" },
        { name: "AHA Trafikskola", location: "Skellefteå", url: "https://aha-trafikskola.se/" },
        { name: "Staans Trafikskola", location: "Skellefteå", url: "https://www.staanstrafikskola.se/" },
        { name: "MK Trafikskola", location: "Skellefteå", url: "https://www.mk-trafikskola.se/hakans-trafikskola/" },
        { name: "City Trafikskola", location: "Skellefteå", url: "https://citytrafikskola.wordpress.com/" },
        { name: "Ranheimers Trafikskola", location: "Luleå & Boden", url: "https://www.ranheimers.se/" },
        { name: "Centrala Trafikskolan", location: "Piteå", url: "https://centralainorr.se/" },
        { name: "Norra Trafikskolan", location: "Luleå", url: "https://www.norratrafikskolan.se/17/19/kontakt/" },
      ],
    },
    bookingCta: {
      title: "Redo att boka din platser på halkbanan?",
      subtitle: "Bokning sker enkelt och direkt via Bokningskoll. Välj ett datum som passar dig och få omedelbar bekräftelse.",
      buttonText: "Riskutbildning 2 bokning (Bokningskoll)",
      notice: "Du skickas säkert vidare till vår officiella bokningsportal på bokningskoll.se/norra",
    },
    faq: {
      title: "Vanliga frågor om Risktvåan",
      subtitle: "Har du frågor inför din halkbaneutbildning? Här hittar du svaren.",
      items: [
        {
          question: "Vad behöver jag ta med mig till utbildningen?",
          answer: "Du måste ha med dig en giltig legitimation (t.ex. ID-kort, pass eller godkänt körkort). Kom även klädd i bekväma kläder och skor anpassade efter rådande väder.",
        },
        {
          question: "Vilka förkunskaper krävs för Riskutbildning 2?",
          answer: "Du bör vara i slutet av din körkortsutbildning och behärska grundläggande manövrering av bilen (växling, start, stopp, styrning) för att få ut mesta möjliga av utbildningen.",
        },
        {
          question: "Hur länge är Riskutbildning 2 giltig?",
          answer: "Utbildningen är giltig i 5 år från det datum du genomför den, eller tills du tar ditt körkort.",
        },
        {
          question: "Hur bokar jag min tid?",
          answer: "Du bokar enkelt online via vår bokningsportal Bokningskoll genom att klicka på 'Boka Halkbana' eller gå till bokningskoll.se/norra.",
        },
        {
          question: "Erbjuder ni utbildning på engelska?",
          answer: "Ja, vi kan erbjuda utbildningstillfällen med engelskspråkiga instruktörer eller tolkhjälp. Kontakta oss vid bokning om du önskar detta.",
        },
      ],
    },
    contact: {
      title: "Kontakta Norra Halkbanan",
      subtitle: "Har du frågor om kurser, tider eller företagsbokningar? Vi hjälper dig gärna!",
      infoTitle: "Kontaktinformation",
      addressLabel: "Adress",
      phoneLabel: "Telefon",
      emailLabel: "E-post",
      hoursLabel: "Öppettider",
      formTitle: "Skicka ett meddelande",
      namePlaceholder: "Ditt namn",
      emailPlaceholder: "Din e-postadress",
      phonePlaceholder: "Ditt telefonnummer (valfritt)",
      messagePlaceholder: "Skriv ditt meddelande här...",
      submitButton: "Skicka meddelande",
      successMessage: "Tack för ditt meddelande! Vi återkommer så snart som möjligt.",
      mapTitle: "Hitta till Norra Halkbanan i Piteå",
    },
    footer: {
      tagline: "Din trygga halkbana i Piteå & Norrbotten.",
      quickLinks: "Snabblänkar",
      legal: "Godkänd av Transportstyrelsen för riskutbildning 2 bil, MC och YKB.",
      copyright: "© Norra Halkbanan i Piteå AB. Alla rättigheter förbehållna.",
    },
  },
  en: {
    nav: {
      home: "Home",
      risk2bil: "Risk 2 Car",
      risk2mc: "Risk 2 MC",
      ykb: "YKB Training",
      gallery: "Gallery",
      partners: "Driving Schools",
      about: "About Us",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      badge: "Approved by the Swedish Transport Agency",
      title: "Safety & Vehicle Control at Piteå Skid Track",
      subtitle: "Official training provider for Risk Education 2 (Risktvåan) for Passenger Cars, Motorcycles, and Professional Driver CPC in Norrbotten. Safe, practical training built for Swedish winter & summer road safety.",
      ctaPrimary: "Book Training Now",
      ctaSecondary: "Explore Courses",
      trustStat1: "100% Certified",
      trustStat1Sub: "Transportstyrelsen Approved",
      trustStat2: "Piteå Track",
      trustStat2Sub: "Modern skid track with safe dual-control cars",
      trustStat3: "Instant Confirmation",
      trustStat3Sub: "Easy booking via Bokningskoll",
    },
    services: {
      title: "Our Training Programs",
      subtitle: "Choose the training course required for your driver's license or professional qualification.",
      bookButton: "Book Risk Education 2",
      learnMore: "Learn More About Course",
      cards: [
        {
          id: "risk-2-bil",
          title: "Risk Education 2 Car (Risktvåan)",
          category: "Passenger Car (Category B)",
          description: "Mandatory practical skid training course for getting your Swedish car driver's license. Hands-on exercises on a wet/icy track to handle loss of control and emergency braking.",
          duration: "approx. 3.5 hours",
          price: "Check Booking Portal",
          features: [
            "Practical skid track driving experience",
            "Braking distance & speed perception exercises",
            "Vehicle stability systems & skid recovery",
            "Direct digital reporting to Transportstyrelsen",
          ],
          href: "/risk-2-bil",
        },
        {
          id: "risk-2-mc",
          title: "Risk Education 2 Motorcycle",
          category: "Motorcycle (A1, A2, A)",
          description: "Specialized risk education for motorcycle riders. Practice high-speed emergency maneuvers, leaning stability, and hazard perception in a controlled environment.",
          duration: "approx. 4 hours",
          price: "View Available Times",
          features: [
            "Focus on motorcycle-specific hazards",
            "Advanced braking & avoidance maneuvers",
            "Experienced licensed MC instructors",
            "Gear & motorcycles available on site",
          ],
          href: "/risk-2-mc",
        },
        {
          id: "ykb",
          title: "Professional Driver CPC (YKB)",
          category: "Heavy Vehicles (Truck & Bus)",
          description: "Professional Driver Certificate of Professional Competence (YKB) training for heavy traffic. Periodic training modules 1-5 for truck and bus drivers.",
          duration: "Module / Full-time",
          price: "Corporate / Individual",
          features: [
            "Complies with Transportstyrelsen YKB standards",
            "All periodic modules 1-5 available",
            "Experienced commercial transport trainers",
            "Custom corporate packages available",
          ],
          href: "/ykb-utbildning",
        },
      ],
    },
    whyUs: {
      title: "Why Choose Norra Halkbanan?",
      subtitle: "We operate one of Northern Sweden's most modern and well-maintained skid tracks.",
      features: [
        {
          title: "Experienced & Dedicated Instructors",
          description: "Our certified instructors guide you through a clear, educational, and reassuring experience tailored to your driving skill level.",
        },
        {
          title: "Safe & Modern Training Vehicles",
          description: "Our cars feature dual pedal controls and modern active safety systems for ultimate peace of mind during skid maneuvering.",
        },
        {
          title: "Convenient Location in Piteå",
          description: "Easily accessible track on Fordonsvägen 2 in Piteå with ample free parking and comfortable indoor lecture facilities.",
        },
        {
          title: "Instant Digital Reporting",
          description: "Upon course completion, we immediately submit your registration digitally to Transportstyrelsen so you can proceed to your practical driving test.",
        },
      ],
    },
    video: {
      title: "Swedish Traffic Safety Centers & Norra Halkbanan",
      subtitle: "Watch the video presentation highlighting our track facilities, vehicles, and practical risk training programs.",
      badge: "Video Presentation",
    },
    disclaimer: {
      topBadge: "DEMO WEBSITE:",
      topTag: "Built strictly for marketing & demonstration purposes.",
      readMore: "Read Disclaimer",
      footerTitle: "Disclaimer & Demo Notice:",
      footerText: "This website (driving-school-demo-nine.vercel.app) is an unofficial demonstration created solely for marketing and evaluation purposes. It makes no claim over the original content on norrahalkbanan.se and is not intended to infringe on copyright. All trademarks and logos belong to their respective owners.",
      layoutNotice: "Legal Disclaimer: Unofficial Redesign Demo created for presentation & evaluation only. Original site:",
    },
    risk2bilPage: {
      categoryBadge: "Passenger Car (Category B) — Mandatory Risk 2",
      title: "Risk 2 Car in Piteå",
      intro1: "Welcome to Risk 2, also known as Risk Education 2 or the Skid Track (Halkbanan), which is the second practical mandatory part of risk education for a Category B car license. You cannot take your practical driving test without completing Risk 2.",
      intro2: "At Norra Halkbanan in Piteå, you can book Risk 2 training individually or through partner driving schools across Norrbotten. We offer a safe and realistic environment combining classroom intro with practical skid driving.",
      durationTag: "approx. 3.5 - 4 hours",
      reportingTag: "Direct Digital Reporting to Transportstyrelsen",
      bookButton: "Book Risk 2 Car",
      processTitle: "How Does Risk 2 Work?",
      processSubtitle: "The course is divided into two connected modules: Classroom Theory and Practical Skid Driving.",
      theoryBadge: "Module 1",
      theoryLoc: "In Classroom",
      theoryTitle: "Theory & Introduction",
      theoryDesc: "Risk 2 begins with classroom exercises and discussions regarding traffic hazards, speed perception, and human limitations at Norra Halkbanan in Piteå.",
      theoryItems: [
        "Identity Check: Mandatory physical ID verification.",
        "Alcohol Test: Mandatory breathalyzer test, introduction, goals and objectives.",
        "Crash Simulator Sled (7 km/h): Experience a low-speed impact impact test (optional).",
        "Rollover Simulator Car: Experience being strapped inside a flipped vehicle (optional).",
        "Reflection: Closing discussions on human physical and psychological limitations.",
      ],
      practicalBadge: "Module 2",
      practicalLoc: "On Skid Track",
      practicalTitle: "Practical Track Driving",
      practicalDesc: "Driving is performed with two students per car and live radio instructions from the certified instructor.",
      practicalItemsTitle: "Practical Track Exercises:",
      practicalItems: [
        "Slalom maneuvering between cones",
        "Evasive maneuvers around sudden obstacles",
        "Emergency braking exercises & stopping distances on wet/icy surfaces",
      ],
      practicalNotice: "NOTE: All practical track driving is performed at your own risk.",
      includedTitle: "What is Included in Risk 2 Car?",
      includedDesc1: "During Risk 2, you will experience firsthand how a car reacts to slippery road surfaces, high speeds, and sudden hazards. The objective is to give you a deep understanding of speed, road friction, and safety margins.",
      includedDesc2: "You will also gain insights into driver fatigue, mobile phone distractions, and loss of attention behind the wheel. The goal is to build risk awareness and make you a safer driver.",
      importantTitle: "Important Information Before Course Start",
      idTitle: "Valid Photo ID Required",
      idDesc: "You must bring a physical valid photo ID (passport, national ID, or approved license). Without valid ID, registration cannot be performed.",
      timeTitle: "Arrive on Time",
      timeDesc: "Please arrive well ahead of schedule. Late arrivals will be denied entry due to fixed safety briefing schedules.",
      alcoholTitle: "Mandatory Breathalyzer",
      alcoholDesc: "A zero-tolerance (0.0‰) alcohol test is conducted before start. Training under influence of alcohol or drugs is strictly prohibited.",
      carsTitle: "Training Cars Provided",
      carsDesc: "Exercises are conducted using our dual-control training cars. You do not need to bring your own vehicle.",
      cancelTitle: "Cancellation Policy",
      cancelDesc: "Cancellations or reschedules must be submitted at least 3 business days in advance.",
      faqTitle: "Frequently Asked Questions — Risk 2 Car",
      faqItems: [
        {
          question: "How long does Risk 2 take?",
          answer: "Risk Education part 2 takes approximately 3 to 4 hours in total at Norra Halkbanan in Piteå.",
        },
        {
          question: "How long is Risk 2 valid?",
          answer: "The certificate is valid for 5 years from completion date or until you obtain your driver's license.",
        },
        {
          question: "Must Risk 2 be completed before the driving test?",
          answer: "Yes, both Risk 1 and Risk 2 must be registered as completed with Transportstyrelsen before taking your practical driving test.",
        },
        {
          question: "Can you fail Risk 2?",
          answer: "Risk 2 is a participation-based practical course. There is no pass/fail exam, but active participation and basic vehicle maneuverability are required.",
        },
        {
          question: "Can Risk 2 be taken before Risk 1?",
          answer: "Yes, there is no mandatory sequence between Risk 1 and Risk 2. Both must be completed before taking your tests.",
        },
      ],
    },
    risk2mcPage: {
      categoryBadge: "Motorcycle (Category A1, A2, A)",
      title: "Risk 2 Motorcycle in Piteå",
      intro1: "Welcome to Norra Halkbanan in Piteå! We offer Risk Education Part 2 for Motorcycles (Risktvåan MC), a mandatory course for anyone obtaining a motorcycle driver's license (A1, A2, or A).",
      intro2: "Getting your motorcycle license is a major step toward freedom on two wheels. However, it requires safety, responsibility, and proper skills. We offer this course to individuals and driving school students across Norrbotten and Västerbotten.",
      durationTag: "approx. 4 hours",
      mcTag: "Motorcycles provided on site",
      bookButton: "Book Risk 2 MC",
      whatIsTitle: "What is Risk 2 Motorcycle?",
      whatIsDesc1: "Risk 2 MC is a practical risk training course designed to increase your understanding of hazard factors and how to avoid dangerous traffic situations. Unlike Risk 1 (which is theoretical), Risk 2 MC focuses on practical riding exercises.",
      focusTitle: "Main Focus Areas:",
      focusItems: [
        "Speed control & safety margins",
        "Risk behaviors in traffic",
        "Riding under challenging road & weather conditions",
        "Maneuvering & emergency braking drills",
      ],
      whatIsDesc2: "You will experience how speed, road grip, and reaction time interact. The goal is not to test your limits, but to make you aware of where they lie so you can stay safe on the road.",
      reqBadge: "Participation Requirements",
      reqTitle: "Course Requirements:",
      reqItems: [
        "You must be in the final stage of your motorcycle training.",
        "You must be able to operate a motorcycle unassisted.",
        "Bring a valid physical photo ID.",
        "Zero-tolerance alcohol level (0.0‰) — breathalyzer test conducted before start.",
        "Motorcycles are provided on site, but you may bring your own approved riding gear.",
      ],
      cancelNotice: "Cancellations or reschedules must be submitted at least 3 business days in advance.",
      videoBadge: "Video Presentation Haraholmen",
      videoTitle: "Watch Norra Halkbanan Haraholmen in Action",
      videoSubtitle: "Experience our track facility in Piteå where motorcycle risk training takes place.",
      partnerTitle: "Partner Driving Schools for MC Booking",
      partnerSubtitle: "You can also reserve Risk 2 MC through our partner driving schools:",
      faqTitle: "Frequently Asked Questions — Risk 2 MC",
      faqItems: [
        {
          question: "What is included in Risk 2 MC?",
          answer: "The course includes practical exercises focusing on speed, braking, leaning stability, and handling adverse weather conditions to make you a safer rider.",
        },
        {
          question: "Who can take Risk 2 MC?",
          answer: "Risk 2 MC is mandatory for all motorcycle license categories (A1, A2, A). You must be near the end of your driving lessons and able to operate an MC unassisted.",
        },
        {
          question: "Where is Risk 2 MC held in Piteå?",
          answer: "The course takes place at Norra Halkbanan, Fordonsvägen 2 in Piteå. We partner with local driving schools including Centrala Trafikskolan and MK / Håkans Trafikskola for booking.",
        },
        {
          question: "What do I need to bring?",
          answer: "Bring valid photo ID. Approved riding gear is recommended, but motorcycles are provided on site. Zero alcohol (0.0‰) requirement applies.",
        },
      ],
    },
    ykbPage: {
      categoryBadge: "Professional Driver (Heavy Traffic C, CE, D, DE)",
      title: "YKB Training in Piteå",
      intro: "We provide Professional Driver Qualification (YKB) training for heavy traffic. Periodic training consists of 5 modules covering road safety, eco-driving, regulations, and customer service.",
      durationTag: "35 hours total (5 days × 7 hours)",
      priceTag: "1,280 SEK ex. VAT per module",
      bookButton: "Book YKB Training",
      card1Title: "What Does YKB Cost?",
      card1Desc1: "The price for each module is 1,280 SEK ex. VAT.",
      card1Desc2: "The course consists of 5 modules, totaling 6,400 SEK ex. VAT for the complete qualification.",
      card1Badge: "1,280 SEK / module (6,400 SEK total ex VAT)",
      card2Title: "How Long is the Training?",
      card2Desc1: "Total periodic training duration is 35 hours.",
      card2Desc2: "Each day consists of 7 hours of training across 5 total days, which can be spread out over up to a 5-year period.",
      card2Badge: "5 days à 7 hours (spread over up to 5 years)",
      card3Title: "What Are the YKB Requirements?",
      card3Desc1: "You must hold a valid driver's license for heavy vehicles (e.g. Category C, CE, D, or DE).",
      card3Desc2: "The training is targeted at commercial drivers needing to meet mandatory European YKB periodic requirements.",
      card3Badge: "Requires valid C, CE, D, or DE license",
      categoriesTitle: "Commercial Vehicle Training Categories",
      categoriesSubtitle: "Whether you operate freight trucks or passenger buses, we provide accredited certification.",
      categories: [
        {
          title: "YKB Freight Transport (C / CE)",
          desc: "Periodic training modules tailored for heavy truck and trailer drivers.",
          button: "Book YKB (Truck & Bus)",
        },
        {
          title: "YKB Passenger Transport (D / DE)",
          desc: "Professional qualification training for bus and coach operators.",
          button: "Book YKB (Truck & Bus)",
        },
        {
          title: "Flexible Training & Distance Options",
          desc: "Periodic modules 1-5 spread flexibly across your 5-year certificate cycle.",
          button: "Book YKB (Truck & Bus)",
        },
      ],
      syllabusTitle: "What Does YKB Fortbildning Include?",
      syllabusSub: "Five comprehensive modules for safety and professionalism",
      syllabusItems: [
        { title: "Module 1: Eco-Driving & Environment", text: "Powertrain optimization, fuel saving, and environmentally responsible driving." },
        { title: "Module 2: Freight / Passenger Regulations", text: "Cargo securing, strapping, and passenger transport safety." },
        { title: "Module 3: Driving & Resting Hours Regulations", text: "Tachograph compliance, EU driving rules, and transport legislation." },
        { title: "Module 4: Ergonomics, Health & Service", text: "Work environment, driver health, road safety, and customer service." },
        { title: "Module 5: Road Safety & Emergency Response", text: "Risk awareness, first aid, and emergency scenario management." },
      ],
      corpTitle: "Book Your YKB Course Online",
      corpDesc: "Select available dates for truck and bus courses via our official booking portal.",
      corpContact: "For transport companies & fleets: We arrange custom group YKB training packages.",
      validityTitle: "Validity Information",
      validityDesc: "A YKB Driver Qualification Card is valid for 5 years. Drivers must complete 35 hours of periodic training (modules 1-5) before expiry to renew their card.",
    },
    gallery: {
      title: "Galleri & Bilder från Banan",
      subtitle: "Se bilder från vår halkbana, övningsfordon, lektionssal och säkerhetsutrustning.",
      images: [
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2018/08/galleri-korsningen.jpg",
          title: "Övningskorsning på Halkbanan",
          category: "Banöversikt",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/IMG_1021-scaled-1.jpg",
          title: "Norra Halkbanan Anläggning",
          category: "Anläggning",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/Norra-Halkbanan-4-scaled.jpg",
          title: "Körövningar & Halkkörning",
          category: "Utbildning",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/Norra-Halkbanan-5-scaled.jpg",
          title: "Moderna Utbildningsfordon",
          category: "Fordon",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/galleri-reception-ute.webp",
          title: "Reception & Entré",
          category: "Lokaler",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2018/08/galleri-voltbil.jpg",
          title: "Voltbil Säkerhetsövning",
          category: "Säkerhetsutrustning",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2018/08/galleri-lektionssal-2.jpg",
          title: "Komfortabel Lektionssal",
          category: "Lokaler",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/Overblick-pa-verksamheten.webp",
          title: "Överblick på Verksamheten",
          category: "Anläggning",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/galleri-krockslade.webp",
          title: "Krocksläde Säkerhetstest",
          category: "Säkerhetsutrustning",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/galleri-nack-slade.webp",
          title: "Nacksläde Demonstration",
          category: "Säkerhetsutrustning",
        },
      ],
    },
    partners: {
      title: "Trafikskolor som nyttjar banan",
      subtitle: "Följande godkända trafikskolor och organisationer nyttjar regelbundet Norra Halkbanan för sina elever:",
      institutionalTitle: "Myndigheter & Organisationer",
      institutionalDesc: "Även Försvarsmakten, Migrationsverket och Arbetsmiljöverket nyttjar tidvis banan för sina förar- och säkerhetsutbildningar.",
      schools: [
        { name: "Roberts Trafikskola", location: "Luleå, Piteå, Boden", url: "https://www.robertstrafikskola.se/om-oss/pitea/" },
        { name: "Expansa Trafikskola", location: "Boden & Luleå", url: "https://www.expansa.se/" },
        { name: "3050 Din Trafikskola", location: "Piteå", url: "https://www.3050.se/" },
        { name: "Po’s Trafikskola", location: "Luleå", url: "https://www.pos-trafikskola.se/lulea/" },
        { name: "Vågelinds Trafikskola", location: "Luleå", url: "https://www.vagelindstrafikskola.se/" },
        { name: "MT Trafikskola", location: "Luleå", url: "http://www.mttrafikskola.se/" },
        { name: "AHA Trafikskola", location: "Skellefteå", url: "https://aha-trafikskola.se/" },
        { name: "Staans Trafikskola", location: "Skellefteå", url: "https://www.staanstrafikskola.se/" },
        { name: "MK Trafikskola", location: "Skellefteå", url: "https://www.mk-trafikskola.se/hakans-trafikskola/" },
        { name: "City Trafikskola", location: "Skellefteå", url: "https://citytrafikskola.wordpress.com/" },
        { name: "Ranheimers Trafikskola", location: "Luleå & Boden", url: "https://www.ranheimers.se/" },
        { name: "Centrala Trafikskolan", location: "Piteå", url: "https://centralainorr.se/" },
        { name: "Norra Trafikskolan", location: "Luleå", url: "https://www.norratrafikskolan.se/17/19/kontakt/" },
      ],
    },
    bookingCta: {
      title: "Redo att boka din platser på halkbanan?",
      subtitle: "Bokning sker enkelt och direkt via Bokningskoll. Välj ett datum som passar dig och få omedelbar bekräftelse.",
      buttonText: "Riskutbildning 2 bokning (Bokningskoll)",
      notice: "Du skickas säkert vidare till vår officiella bokningsportal på bokningskoll.se/norra",
    },
    faq: {
      title: "Vanliga frågor om Risktvåan",
      subtitle: "Har du frågor inför din halkbaneutbildning? Här hittar du svaren.",
      items: [
        {
          question: "Vad behöver jag ta med mig till utbildningen?",
          answer: "Du måste ha med dig en giltig legitimation (t.ex. ID-kort, pass eller godkänt körkort). Kom även klädd i bekväma kläder och skor anpassade efter rådande väder.",
        },
        {
          question: "Vilka förkunskaper krävs för Riskutbildning 2?",
          answer: "Du bör vara i slutet av din körkortsutbildning och behärska grundläggande manövrering av bilen (växling, start, stopp, styrning) för att få ut mesta möjliga av utbildningen.",
        },
        {
          question: "Hur länge är Riskutbildning 2 giltig?",
          answer: "Utbildningen är giltig i 5 år från det datum du genomför den, eller tills du tar ditt körkort.",
        },
        {
          question: "Hur bokar jag min tid?",
          answer: "Du bokar enkelt online via vår bokningsportal Bokningskoll genom att klicka på 'Boka Halkbana' eller gå till bokningskoll.se/norra.",
        },
        {
          question: "Erbjuder ni utbildning på engelska?",
          answer: "Ja, vi kan erbjuda utbildningstillfällen med engelskspråkiga instruktörer eller tolkhjälp. Kontakta oss vid bokning om du önskar detta.",
        },
      ],
    },
    contact: {
      title: "Kontakta Norra Halkbanan",
      subtitle: "Har du frågor om kurser, tider eller företagsbokningar? Vi hjälper dig gärna!",
      infoTitle: "Kontaktinformation",
      addressLabel: "Adress",
      phoneLabel: "Telefon",
      emailLabel: "E-post",
      hoursLabel: "Öppettider",
      formTitle: "Skicka ett meddelande",
      namePlaceholder: "Ditt namn",
      emailPlaceholder: "Din e-postadress",
      phonePlaceholder: "Ditt telefonnummer (valfritt)",
      messagePlaceholder: "Skriv ditt meddelande här...",
      submitButton: "Skicka meddelande",
      successMessage: "Tack för ditt meddelande! Vi återkommer så snart som möjligt.",
      mapTitle: "Hitta till Norra Halkbanan i Piteå",
    },
    footer: {
      tagline: "Din trygga halkbana i Piteå & Norrbotten.",
      quickLinks: "Snabblänkar",
      legal: "Godkänd av Transportstyrelsen för riskutbildning 2 bil, MC och YKB.",
      copyright: "© Norra Halkbanan i Piteå AB. Alla rättigheter förbehållna.",
    },
  },
};
