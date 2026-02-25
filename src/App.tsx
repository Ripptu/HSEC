import { Star, ArrowRight, CheckCircle2, Clock, Phone, Mail, MapPin, Menu, X, Wrench, Leaf, Snowflake, Sparkles, Trash2, Linkedin, Facebook, Instagram, ShieldCheck, Award, ThumbsUp, ChevronDown, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Components
const TopBanner = () => (
  <div className="hidden md:flex bg-slate-900 text-white px-4 py-2 text-center text-sm font-medium relative z-50 items-center justify-center gap-2">
    <Snowflake className="w-4 h-4 text-blue-300" />
    <span>Jetzt Winterdienst für die Saison 26/27 sichern – Nur noch wenige Kapazitäten!</span>
    <a href="#kontakt" className="underline underline-offset-2 font-bold ml-2 hover:text-green-400 transition-colors">Jetzt anfragen</a>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header className={`fixed left-0 right-0 z-50 flex justify-end md:justify-center px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300 ${isScrolled ? 'top-0' : 'top-0 md:top-10'}`}>
      
      {/* Desktop Navbar */}
      <div className={`hidden md:flex pointer-events-auto w-full max-w-5xl bg-white/90 backdrop-blur-md border border-gray-100 rounded-full px-6 py-3 items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-green-900/5' : 'shadow-sm'}`}>
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-slate-900 tracking-tight text-xl">HSEC</Link>
        </div>
        
        <nav className="flex items-center gap-8 text-sm font-medium text-slate-600">
          {isHome ? (
            <>
              <a href="#leistungen" className="hover:text-green-600 transition-colors">Leistungen</a>
              <a href="#ueber-uns" className="hover:text-green-600 transition-colors">Über uns</a>
              <a href="#kontakt" className="hover:text-green-600 transition-colors">Kontakt</a>
            </>
          ) : (
            <>
              <Link to="/#leistungen" className="hover:text-green-600 transition-colors">Leistungen</Link>
              <Link to="/#ueber-uns" className="hover:text-green-600 transition-colors">Über uns</Link>
              <Link to="/#kontakt" className="hover:text-green-600 transition-colors">Kontakt</Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#kontakt" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-md hover:-translate-y-0.5">
            Kostenlose Anfrage
          </a>
        </div>
      </div>

      {/* Mobile Hamburger Button (Floating) */}
      <button 
        className="md:hidden pointer-events-auto bg-white/90 backdrop-blur-md shadow-md border border-gray-100 text-slate-900 p-3 rounded-full transition-all" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-4 pointer-events-auto md:hidden">
          {isHome ? (
            <>
              <a href="#leistungen" className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Leistungen</a>
              <a href="#ueber-uns" className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Über uns</a>
              <a href="#kontakt" className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
            </>
          ) : (
            <>
              <Link to="/#leistungen" className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Leistungen</Link>
              <Link to="/#ueber-uns" className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Über uns</Link>
              <Link to="/#kontakt" className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
            </>
          )}
          <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="w-full bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-medium mt-2 text-center">
            Kostenlose Anfrage
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-[102px] pb-16 lg:pt-56 lg:pb-32 overflow-hidden">
      {/* Background Image & Overlays - Placed absolutely behind content */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://s1.directupload.eu/images/260223/emglos9x.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        
        {/* Bottom Gradient for smooth transition to white section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in-up shadow-lg shadow-black/5">
          <Star className="w-4 h-4 text-green-600 fill-green-600" />
          <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">Regional – zuverlässig – sauber</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.15] tracking-tight max-w-4xl mx-auto mb-6 animate-fade-in-up drop-shadow-sm" style={{ animationDelay: '100ms' }}>
          Ihr Hausmeisterservice in Vohburg & Umgebung – <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Haus, Garten & Gebäude</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Ob regelmäßige Objektbetreuung, Gartenpflege, Winterdienst oder Kleinreparaturen – wir sorgen dafür, dass Ihre Immobilie stets gepflegt, sicher und funktionsfähig bleibt.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-0 md:mb-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <a href="#kontakt" className="group relative w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-900/20 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Jetzt Angebot anfordern
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#leistungen" className="group w-full sm:w-auto glass hover:bg-white text-slate-900 px-8 py-4 rounded-full font-bold transition-all hover:shadow-xl hover:-translate-y-0.5 border border-white/50">
            Unsere Leistungen
          </a>
        </div>

        {/* Trust Badges */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-12 mb-20 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
          <div className="flex items-center gap-2 text-slate-700 font-medium bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            Betriebshaftpflichtversichert
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-medium bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50">
            <Award className="w-5 h-5 text-green-600" />
            IHK Mitglied
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-medium bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50">
            <ThumbsUp className="w-5 h-5 text-green-600" />
            100% Kundenzufriedenheit
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="hidden md:block relative max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 relative bg-gray-100 border-4 border-white/50 backdrop-blur-sm">
            <img 
              src="https://images.unsplash.com/photo-1512699355324-f07e3106dae5?auto=format&fit=crop&w=1920" 
              alt="Handwerker bei der Arbeit" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
          </div>

          {/* Floating UI Cards */}
          <div className="absolute -left-4 md:-left-12 top-1/4 glass-card p-4 rounded-2xl flex items-center gap-4 hidden sm:flex animate-fade-in-right hover:scale-105 transition-transform duration-300" style={{ animationDelay: '800ms' }}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">100% Zuverlässigkeit</p>
              <p className="text-xs text-slate-500 font-medium">Persönlicher Einsatz</p>
            </div>
          </div>

          <div className="absolute -right-4 md:-right-12 bottom-1/4 glass-card p-4 rounded-2xl flex items-center gap-4 hidden sm:flex animate-fade-in-left hover:scale-105 transition-transform duration-300" style={{ animationDelay: '1000ms' }}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center shadow-inner">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">Faire Preise</p>
              <p className="text-xs text-slate-500 font-medium">Individuelle Lösungen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Hausmeisterservice & Objektbetreuung",
      desc: (
        <ul className="space-y-3 text-sm mt-4 text-slate-600">
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Regelmäßige Kontrolle von Gebäuden und Außenanlagen</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Überwachung technischer Anlagen (z.B. Beleuchtung, Heizung)</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Kleinreparaturen & Instandhaltung</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Schlüsselservice und Mieterkommunikation</li>
        </ul>
      ),
      icon: <Wrench className="w-8 h-8 text-green-600 group-hover:animate-wiggle" />,
      delay: '0ms',
      className: "md:col-span-2"
    },
    {
      title: "Garten- & Grünanlagenpflege",
      desc: (
        <ul className="space-y-3 text-sm mt-4 text-slate-600">
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Rasen mähen, Hecken schneiden, Unkraut entfernen</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Laubbeseitigung und Saisonpflege</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Pflege von Beeten, Rabatten & Pflasterflächen</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Entsorgung von Grünschnitt</li>
        </ul>
      ),
      icon: <Leaf className="w-8 h-8 text-green-600 group-hover:animate-float" />,
      delay: '100ms',
      className: "md:col-span-1"
    },
    {
      title: "Winterdienst",
      desc: (
        <ul className="space-y-3 text-sm mt-4 text-slate-600">
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Schnee räumen & Streudienst für Gehwege, Zufahrten & Parkflächen</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Einsatz bei Glättegefahr – auch früh morgens oder am Wochenende</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Individuelle Einsatzpläne je nach Objekt</li>
        </ul>
      ),
      icon: <Snowflake className="w-8 h-8 text-green-600 group-hover:animate-spin-slow" />,
      delay: '200ms',
      className: "md:col-span-1"
    },
    {
      title: "Gebäudereinigung",
      desc: (
        <ul className="space-y-3 text-sm mt-4 text-slate-600">
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Treppenhausreinigung & Bodenpflege</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Fenster- und Glasreinigung</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Reinigung von Gemeinschaftsflächen & Kellerbereichen</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Endreinigung bei Mieterwechsel</li>
        </ul>
      ),
      icon: <Sparkles className="w-8 h-8 text-green-600 group-hover:animate-pulse" />,
      delay: '300ms',
      className: "md:col-span-2"
    },
    {
      title: "Entrümpelung & Sonderaufträge",
      desc: (
        <ul className="space-y-3 text-sm mt-4 text-slate-600">
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Keller-, Dachboden- und Wohnungsauflösungen</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Sperrmüllentsorgung</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Besenreine Übergabe</li>
          <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />Individuelle Sonderaufträge auf Anfrage</li>
        </ul>
      ),
      icon: <Trash2 className="w-8 h-8 text-green-600 group-hover:animate-wiggle" />,
      delay: '400ms',
      className: "md:col-span-3"
    }
  ];

  return (
    <section id="leistungen" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full mb-6">
            <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">Unsere Leistungen</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 md:mb-6">Hausmeisterservice HSEC – alles aus einer Hand</h2>
          <p className="text-base md:text-lg text-slate-600">Als zuverlässiger Partner für Privatkunden, Hausverwaltungen und Gewerbe bieten wir Ihnen ein breites Leistungsspektrum rund um Haus, Garten und Objektpflege.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`group glass-card p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/5 animate-fade-in-up flex flex-col h-full relative overflow-hidden ${service.className}`}
              style={{ animationDelay: service.delay }}
            >
              {/* 3D Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shrink-0 shadow-md border border-slate-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">{service.title}</h3>
                <div className="text-slate-600 leading-relaxed flex-grow">{service.desc}</div>
                
                <Link to={`/leistungen/${service.title.toLowerCase().split(' ')[0].replace(/[^a-z0-9]/g, '')}`} className="mt-8 pt-6 border-t border-slate-200/60 flex items-center text-green-600 font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Mehr erfahren <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section id="ueber-uns" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-green-600 fill-green-600" />
              <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">Warum Wir?</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 md:mb-6 leading-tight">
              Lassen Sie uns machen – <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Sie haben den Kopf frei.</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              Als zuverlässiger Partner für Privatkunden, Hausverwaltungen und Gewerbe bieten wir Ihnen ein breites Leistungsspektrum rund um Haus, Garten und Objektpflege. Wir kümmern uns um die Dinge, die Sie entlasten – mit Einsatz, Fachwissen und Liebe zum Detail.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Regional – zuverlässig – sauber",
                "Für Privatkunden, Hausverwaltungen & Gewerbe",
                "Individuelle Lösungen & faire Preise",
                "Alles aus einer Hand"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-green-50 p-1 rounded-full shrink-0 group-hover:bg-green-100 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group">
              Kostenloses Angebot anfordern
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-100 relative group border-4 border-white">
              <img 
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260223_153359_012b5722-4967-4b5a-86ac-f49f7123e7ac.jpeg&w=1280&q=85" 
                alt="Gepflegtes Haus mit Garten" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* White transition at the bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            </div>

            {/* Floating Dashboard Element */}
            <div className="absolute -bottom-8 -left-4 md:-left-12 glass-card p-6 rounded-2xl w-72 animate-fade-in-up z-10 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-slate-900">Objektstatus</span>
                <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-md">Optimal</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500 font-medium">Pflegezustand</span>
                    <span className="font-bold text-slate-900">100%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-full rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500 font-medium">Außenanlagen</span>
                    <span className="font-bold text-slate-900">100%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 w-full rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500 font-medium">Wartung</span>
                    <span className="font-bold text-slate-900">Aktuell</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-teal-400 w-full rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Hausverwaltung Schmidt",
      role: "Gewerbekunde",
      text: "HSEC betreut seit über einem Jahr drei unserer Objekte in Vohburg. Absolut zuverlässig, immer erreichbar und die Mieter sind sehr zufrieden mit der Sauberkeit.",
      rating: 5
    },
    {
      name: "Familie Weber",
      role: "Privatkunde",
      text: "Wir haben den Winterdienst für unser Einfamilienhaus gebucht. Egal wie früh es geschneit hat, der Weg war immer rechtzeitig geräumt. Sehr zu empfehlen!",
      rating: 5
    },
    {
      name: "Thomas M.",
      role: "Privatkunde",
      text: "Die Gartenpflege ist top. Herr Catovic und sein Team arbeiten schnell, sauber und bringen eigene Ideen mit ein. Unser Garten sah noch nie so gut aus.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full mb-6">
            <ThumbsUp className="w-4 h-4 text-green-600" />
            <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">Kundenstimmen</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 md:mb-6">Das sagen unsere Kunden</h2>
          <p className="text-base md:text-lg text-slate-600">Ihre Zufriedenheit ist unser größter Antrieb. Lesen Sie, welche Erfahrungen andere mit unserem Service gemacht haben.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl relative">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Wie schnell sind Sie im Notfall vor Ort?",
      a: "Bei dringenden Fällen wie Wasserrohrbruch oder Heizungsausfall sind wir für unsere Bestandskunden in der Regel innerhalb von 1-2 Stunden vor Ort."
    },
    {
      q: "Bieten Sie auch Winterdienst an Wochenenden an?",
      a: "Ja, unser Winterdienst ist 7 Tage die Woche im Einsatz. Wir räumen und streuen zuverlässig auch an Wochenenden und Feiertagen nach den gesetzlichen Vorgaben."
    },
    {
      q: "Muss ich Reinigungsmittel selbst stellen?",
      a: "Nein, wir bringen alle benötigten, professionellen Reinigungsmittel und Geräte selbst mit. Auf Wunsch verwenden wir auch umweltfreundliche Produkte."
    },
    {
      q: "Arbeiten Sie auch für Privatkunden?",
      a: "Selbstverständlich! Wir betreuen sowohl große Gewerbeobjekte und Hausverwaltungen als auch private Einfamilienhäuser."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 md:mb-6">Häufige Fragen</h2>
          <p className="text-base md:text-lg text-slate-600">Hier finden Sie Antworten auf die wichtigsten Fragen zu unserem Service.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIdx === idx ? 'bg-slate-50 shadow-md' : 'bg-white hover:bg-slate-50'}`}
            >
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-900"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-green-600 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StickyCallButton = () => {
  return (
    <a 
      href="tel:+4917670158467" 
      className="md:hidden fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-900/30 flex items-center justify-center animate-bounce"
      style={{ animationDuration: '2s' }}
    >
      <Phone className="w-6 h-6 fill-white" />
    </a>
  );
};

const Calculator = () => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [area, setArea] = useState(50);

  const handleNext = () => {
    if (step === 1 && service) setStep(2);
    else if (step === 2 && area > 0) setStep(3);
  };

  const calculatePrice = () => {
    let base = 0;
    if (service === 'Winterdienst') base = 1.5;
    if (service === 'Gartenpflege') base = 2.5;
    if (service === 'Treppenhausreinigung') base = 1.2;
    if (service === 'Hausmeisterservice') base = 2.0;
    return (area * base).toFixed(2);
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-4">Was kostet Ihr Projekt?</h2>
        <p className="text-sm md:text-base text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto">Nutzen Sie unseren Schnell-Rechner für eine unverbindliche Kostenschätzung. In 3 einfachen Schritten zum Ergebnis.</p>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl max-w-2xl mx-auto text-left">
          {/* Progress Bar */}
          <div className="flex gap-2 mb-8">
            <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-green-500' : 'bg-white/10'}`} />
            <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-green-500' : 'bg-white/10'}`} />
            <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-green-500' : 'bg-white/10'}`} />
          </div>

          {step === 1 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold mb-6">1. Welche Leistung benötigen Sie?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Winterdienst', 'Gartenpflege', 'Treppenhausreinigung', 'Hausmeisterservice'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setService(s)}
                    className={`p-4 rounded-xl border text-left transition-all ${service === s ? 'border-green-500 bg-green-500/10 text-white' : 'border-white/20 text-slate-300 hover:border-white/40'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <button 
                onClick={handleNext}
                disabled={!service}
                className="mt-8 w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition-colors"
              >
                Weiter
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold mb-6">2. Wie groß ist die Fläche (ca. m²)?</h3>
              <div className="mb-8">
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  step="10"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="text-center mt-6 text-3xl font-bold text-green-400">{area} m²</div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="w-1/3 border border-white/20 hover:bg-white/5 text-white py-4 rounded-xl font-bold transition-colors">Zurück</button>
                <button onClick={handleNext} className="w-2/3 bg-green-600 hover:bg-green-500 text-white py-4 rounded-xl font-bold transition-colors">Ergebnis anzeigen</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in-up text-center py-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ihre Kostenschätzung</h3>
              <p className="text-slate-400 mb-6">Basierend auf Ihren Angaben ({area} m² {service}):</p>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-8">
                ca. {calculatePrice()} € <span className="text-lg text-slate-400 font-normal">/ Monat*</span>
              </div>
              <p className="text-xs text-slate-500 mb-8">*Dies ist nur ein grober Richtwert. Für ein exaktes Angebot kontaktieren Sie uns bitte.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setStep(2)} className="px-8 border border-white/20 hover:bg-white/5 text-white py-4 rounded-xl font-bold transition-colors">Zurück</button>
                <a href="#kontakt" onClick={() => setStep(1)} className="px-8 bg-green-600 hover:bg-green-500 text-white py-4 rounded-xl font-bold transition-colors">Jetzt genaues Angebot anfordern</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <Mail className="w-4 h-4 text-green-600" />
            <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">Kontakt</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 md:mb-6 leading-tight">
            Wir freuen uns auf <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Ihr Projekt.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Haben Sie Fragen zu unseren Leistungen oder wünschen Sie ein unverbindliches Angebot? Kontaktieren Sie uns über Ihren bevorzugten Weg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Phone */}
          <a href="tel:+4917670158467" className="glass-card p-8 rounded-3xl flex flex-col items-center text-center gap-4 group hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 group-hover:scale-110 transition-all">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Anrufen</h3>
              <p className="text-slate-500 text-sm mb-3">Mo-Fr 08:00-18:00 Uhr</p>
              <span className="text-2xl font-bold text-green-700 group-hover:text-green-800 transition-colors">
                0176 / 70158467
              </span>
            </div>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/4917670158467" target="_blank" rel="noopener noreferrer" className="glass-card p-8 rounded-3xl flex flex-col items-center text-center gap-4 group hover:border-[#25D366]/50 hover:shadow-xl hover:shadow-[#25D366]/10 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 group-hover:scale-110 transition-all">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
              <p className="text-slate-500 text-sm mb-3">Schnell & unkompliziert</p>
              <span className="text-2xl font-bold text-[#25D366] group-hover:underline decoration-2 underline-offset-2 transition-all">
                Chat starten
              </span>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:info@hausmeisterhsec.com" className="glass-card p-8 rounded-3xl flex flex-col items-center text-center gap-4 group hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 group-hover:scale-110 transition-all">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">E-Mail</h3>
              <p className="text-slate-500 text-sm mb-3">Jederzeit erreichbar</p>
              <span className="text-xl font-bold text-green-700 group-hover:text-green-800 transition-colors">
                info@hausmeisterhsec.com
              </span>
            </div>
          </a>

          {/* Location */}
          <div className="glass-card p-8 rounded-3xl flex flex-col items-center text-center gap-4 group hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 group-hover:scale-110 transition-all">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Standort</h3>
              <p className="text-slate-500 text-sm mb-3">85088 Vohburg an der Donau</p>
              <address className="text-lg font-medium text-slate-700 not-italic leading-tight">
                Weidenstraße 15a
              </address>
            </div>
          </div>
        </div>

        {/* Google Maps Integration */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-96 relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.123456789!2d11.6186!3d48.7708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQ2JzE0LjkiTiAxMcKwMzcnMDcuMCJF!5e0!3m2!1sde!2sde!4v1610000000000!5m2!1sde!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-500"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-green-500/20 transition-colors rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-slate-900 text-2xl tracking-tight">HSEC</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Ihr starker Partner für Haus, Garten & Gebäude in Vohburg und Umgebung. Hausmeisterservice Emil Catovic.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-green-600 hover:border-green-600 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-green-600 hover:border-green-600 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-green-600 hover:border-green-600 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Kontakt</h4>
            <ul className="space-y-3 text-slate-500">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>0176 / 70158467</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@hausmeisterhsec.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Weidenstraße 15a<br/>85088 Vohburg an der Donau</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-slate-500">
              <li><Link to="/impressum" className="hover:text-green-600 transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-green-600 transition-colors">Datenschutz</Link></li>
              <li><Link to="/agb" className="hover:text-green-600 transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} HSEC Emil Catovic. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="min-h-screen bg-slate-50 pt-32 pb-24">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
      </Link>
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
        <h1 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8">{title}</h1>
        <div className="prose prose-slate prose-green max-w-none text-slate-600">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const Impressum = () => (
  <LegalLayout title="Impressum">
    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">Angaben gemäß § 5 TMG</h3>
    <p className="mb-4">HSEC Emil Catovic<br />Weidenstraße 15a<br />85088 Vohburg an der Donau</p>
    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">Kontakt</h3>
    <p className="mb-4">Telefon: 0176/70158467<br />E-Mail: info@hausmeisterhsec.com</p>
    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">Umsatzsteuer-ID</h3>
    <p className="mb-4">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />[Ihre USt-IdNr. hier einfügen]</p>
    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
    <p className="mb-4">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
  </LegalLayout>
);

const Datenschutz = () => (
  <LegalLayout title="Datenschutzerklärung">
    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">1. Datenschutz auf einen Blick</h3>
    <p className="mb-4">Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h3>
    <p className="mb-4"><strong>Datenschutz</strong><br/>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">3. Datenerfassung auf dieser Website</h3>
    <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
  </LegalLayout>
);

const AGB = () => (
  <LegalLayout title="Allgemeine Geschäftsbedingungen">
    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">§1 Geltungsbereich</h3>
    <p className="mb-4">Für die Geschäftsbeziehung zwischen HSEC Emil Catovic und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Beauftragung gültigen Fassung.</p>
    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">§2 Leistungen</h3>
    <p className="mb-4">Der Hausmeisterservice HSEC übernimmt Dienstleistungen im Bereich Objektbetreuung, Gartenpflege, Winterdienst und Gebäudereinigung gemäß individueller Vereinbarung.</p>
    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">§3 Haftung</h3>
    <p className="mb-4">HSEC haftet für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten entstehen. Eine Betriebshaftpflichtversicherung liegt vor.</p>
  </LegalLayout>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
        <TopBanner />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Trust />
                <Calculator />
                <Testimonials />
                <FAQ />
                <Contact />
              </>
            } />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
            {/* Placeholders for future pages */}
            <Route path="/leistungen/winterdienst" element={<div className="pt-32 text-center h-screen">Winterdienst Seite (In Bearbeitung)</div>} />
            <Route path="/leistungen/gartenpflege" element={<div className="pt-32 text-center h-screen">Gartenpflege Seite (In Bearbeitung)</div>} />
          </Routes>
        </main>
        <Footer />
        <StickyCallButton />
      </div>
    </Router>
  );
}

