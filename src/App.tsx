import { Star, ArrowRight, CheckCircle2, Clock, Phone, Mail, MapPin, Menu, X, Wrench, Leaf, Snowflake, Sparkles, Trash2, Linkedin, Facebook, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

// Components
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <div className={`pointer-events-auto w-full max-w-5xl bg-white/90 backdrop-blur-md border border-gray-100 rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-green-900/5' : 'shadow-sm'}`}>
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900 tracking-tight text-xl">HSEC</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#leistungen" className="hover:text-green-600 transition-colors">Leistungen</a>
          <a href="#ueber-uns" className="hover:text-green-600 transition-colors">Über uns</a>
          <a href="#kontakt" className="hover:text-green-600 transition-colors">Kontakt</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-md hover:-translate-y-0.5">
            Kostenlose Anfrage
          </button>
          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-4 pointer-events-auto md:hidden">
          <a href="#leistungen" className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Leistungen</a>
          <a href="#ueber-uns" className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Über uns</a>
          <a href="#kontakt" className="p-2 font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
          <button className="w-full bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-medium mt-2">
            Kostenlose Anfrage
          </button>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.1] tracking-tight max-w-4xl mx-auto mb-6 animate-fade-in-up drop-shadow-sm" style={{ animationDelay: '100ms' }}>
          Ihr starker Partner für <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Haus, Garten & Gebäude</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-800 font-medium max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Ob regelmäßige Objektbetreuung, Gartenpflege, Winterdienst oder Kleinreparaturen – wir sorgen dafür, dass Ihre Immobilie stets gepflegt, sicher und funktionsfähig bleibt.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <button className="group relative w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-900/20 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Jetzt Angebot anfordern
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="group w-full sm:w-auto glass hover:bg-white text-slate-900 px-8 py-4 rounded-full font-bold transition-all hover:shadow-xl hover:-translate-y-0.5 border border-white/50">
            Unsere Leistungen
          </button>
        </div>

        {/* Hero Image Container */}
        <div className="relative max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
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
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Hausmeisterservice HSEC – alles aus einer Hand</h2>
          <p className="text-lg text-slate-600">Als zuverlässiger Partner für Privatkunden, Hausverwaltungen und Gewerbe bieten wir Ihnen ein breites Leistungsspektrum rund um Haus, Garten und Objektpflege.</p>
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
                
                <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center text-green-600 font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Mehr erfahren <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
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
            
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
              Lassen Sie uns machen – <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Sie haben den Kopf frei.</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
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

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Contact Info Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-6 shadow-sm">
                <Mail className="w-4 h-4 text-green-600" />
                <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">Kontakt</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                Wir freuen uns auf <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Ihr Projekt.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Haben Sie Fragen zu unseren Leistungen oder wünschen Sie ein unverbindliches Angebot? Kontaktieren Sie uns einfach – wir melden uns umgehend bei Ihnen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl flex flex-col gap-4 group hover:border-green-200 transition-colors h-full">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Anrufen</h3>
                  <p className="text-slate-500 text-xs mb-2">Mo-Fr 08:00-18:00</p>
                  <a href="tel:+49123456789" className="text-lg font-bold text-green-700 hover:text-green-800 transition-colors block truncate">
                    +49 (0) 123 456 789
                  </a>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl flex flex-col gap-4 group hover:border-green-200 transition-colors h-full">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">E-Mail</h3>
                  <p className="text-slate-500 text-xs mb-2">Jederzeit erreichbar</p>
                  <a href="mailto:info@hsec-vohburg.de" className="text-lg font-bold text-green-700 hover:text-green-800 transition-colors block truncate">
                    info@hsec-vohburg.de
                  </a>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl flex flex-col gap-4 group hover:border-green-200 transition-colors h-full">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Standort</h3>
                  <p className="text-slate-500 text-xs mb-2">Besuche nach Termin</p>
                  <address className="text-base font-medium text-slate-700 not-italic leading-tight">
                    Musterstraße 123<br />85088 Vohburg
                  </address>
                </div>
              </div>

              <a href="https://wa.me/49123456789" target="_blank" rel="noopener noreferrer" className="glass-card p-5 rounded-2xl flex flex-col gap-4 group hover:border-green-400 hover:bg-green-50/50 transition-all cursor-pointer h-full">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">WhatsApp</h3>
                  <p className="text-slate-500 text-xs mb-2">Schnell & einfach</p>
                  <span className="text-lg font-bold text-[#25D366] group-hover:underline decoration-2 underline-offset-2 transition-all">
                    Chat starten
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl rotate-1 opacity-10 blur-xl scale-105" />
            <div className="glass-card p-8 md:p-10 rounded-3xl relative shadow-2xl shadow-slate-200/50 border border-white/60">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Kostenloses Angebot anfordern</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all placeholder:text-slate-400"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all placeholder:text-slate-400"
                      placeholder="Ihre Nummer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">E-Mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all placeholder:text-slate-400"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-bold text-slate-700 ml-1">Interesse an</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-slate-600"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="hausmeister">Hausmeisterservice</option>
                    <option value="garten">Gartenpflege</option>
                    <option value="winter">Winterdienst</option>
                    <option value="reinigung">Gebäudereinigung</option>
                    <option value="entrümpelung">Entrümpelung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Nachricht</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all placeholder:text-slate-400 resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                  Nachricht senden
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  Mit dem Absenden erklären Sie sich mit unserer Datenschutzerklärung einverstanden.
                </p>
              </form>
            </div>
          </div>

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
                <span>+49 (0) 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@hsec-vohburg.de</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Musterstraße 123<br/>85088 Vohburg</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-green-600 transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} HSEC Hausmeisterservice. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
