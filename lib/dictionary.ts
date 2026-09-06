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
      risk2mc: "Risk 2 Motorcycle",
      ykb: "Professional Driver (CPC)",
      gallery: "Gallery",
      partners: "Driving Schools",
      about: "About Us",
      contact: "Contact",
      bookNow: "Book Skid Track",
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
    gallery: {
      title: "Facility & Track Gallery",
      subtitle: "Browse photos from our skid track, training cars, classrooms, and safety equipment.",
      images: [
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2018/08/galleri-korsningen.jpg",
          title: "Skid Track Intersection",
          category: "Track Overview",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/IMG_1021-scaled-1.jpg",
          title: "Norra Halkbanan Facility",
          category: "Facility",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/Norra-Halkbanan-4-scaled.jpg",
          title: "Practical Skid Exercises",
          category: "Training",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/12/Norra-Halkbanan-5-scaled.jpg",
          title: "Modern Training Vehicles",
          category: "Vehicles",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/galleri-reception-ute.webp",
          title: "Reception Entrance",
          category: "Premises",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2018/08/galleri-voltbil.jpg",
          title: "Rollover Car Simulator",
          category: "Safety Equipment",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2018/08/galleri-lektionssal-2.jpg",
          title: "Lecture Room",
          category: "Premises",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/Overblick-pa-verksamheten.webp",
          title: "Facility Overview",
          category: "Facility",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/galleri-krockslade.webp",
          title: "Crash Sled Test",
          category: "Safety Equipment",
        },
        {
          src: "https://www.norrahalkbanan.se/wp-content/uploads/2025/11/galleri-nack-slade.webp",
          title: "Whiplash Sled Demonstration",
          category: "Safety Equipment",
        },
      ],
    },
    partners: {
      title: "Partner Driving Schools",
      subtitle: "The following accredited driving schools and organizations regularly use Norra Halkbanan for their students:",
      institutionalTitle: "Government & Authorities",
      institutionalDesc: "The Swedish Armed Forces, Swedish Migration Agency, and Swedish Work Environment Authority also regularly utilize our track facilities.",
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
      title: "Ready to Book Your Skid Track Training?",
      subtitle: "Booking is fast and easy via Bokningskoll. Select your preferred date and receive instant email confirmation.",
      buttonText: "Riskutbildning 2 bokning (Bokningskoll)",
      notice: "You will be securely redirected to our official booking portal at bokningskoll.se/norra",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Have questions before booking your Risk 2 skid training? Find answers here.",
      items: [
        {
          question: "What do I need to bring to the course?",
          answer: "You must bring a valid physical ID (e.g. Swedish ID card, valid passport, or approved license). Wear comfortable clothes and shoes suitable for weather conditions.",
        },
        {
          question: "What driving skills are required beforehand?",
          answer: "You should be near the end of your driving lessons and able to comfortably operate basic car controls (gear shifting, starting, stopping, steering) to benefit fully from the course.",
        },
        {
          question: "How long is Risk Education 2 valid?",
          answer: "The certificate is valid for 5 years from the date of completion, or until you receive your driver's license.",
        },
        {
          question: "How do I reserve a slot?",
          answer: "You can easily book online via our official portal Bokningskoll by clicking 'Book Skid Track' or visiting bokningskoll.se/norra.",
        },
        {
          question: "Do you offer courses in English?",
          answer: "Yes! We can arrange sessions with English-speaking instructors or translation support. Please specify your preference when booking.",
        },
      ],
    },
    contact: {
      title: "Contact Norra Halkbanan",
      subtitle: "Have questions about course dates, requirements, or group bookings? Reach out to us!",
      infoTitle: "Contact Information",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Opening Hours",
      formTitle: "Send Us a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email Address",
      phonePlaceholder: "Your Phone Number (optional)",
      messagePlaceholder: "Write your message here...",
      submitButton: "Send Message",
      successMessage: "Thank you for your message! We will get back to you shortly.",
      mapTitle: "Find Norra Halkbanan in Piteå",
    },
    footer: {
      tagline: "Your trusted skid track in Piteå & Norrbotten.",
      quickLinks: "Quick Links",
      legal: "Approved by the Swedish Transport Agency for Risk Education 2 Car, MC, and YKB.",
      copyright: "© Norra Halkbanan i Piteå AB. All rights reserved.",
    },
  },
};
