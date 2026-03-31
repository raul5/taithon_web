import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Terminal, Calendar, Activity, Cpu, CircleDashed } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// MAGNETIC BUTTON COMPONENT
const MagneticButton = ({ children, className, href, onClick, variant = 'primary' }) => {
  const buttonRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.2;
    const y = (e.clientY - top - height / 2) * 0.2;
    
    gsap.to(buttonRef.current, { x, y, duration: 0.3, ease: 'power2.out' });
  };
  
  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
  };

  const Component = href ? 'a' : 'button';
  const targetObj = href && href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  
  return (
    <Component
      ref={buttonRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...targetObj}
      className={cn(
        "btn-magnetic relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[2rem] font-data text-sm tracking-widest uppercase font-bold",
        variant === 'primary' && "bg-accent text-white",
        variant === 'outline' && "border border-dark text-dark hover:text-white",
        className
      )}
    >
      {variant === 'outline' && (
        <span className="absolute inset-0 bg-dark transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
};

// NAVBAR COMPONENT
const Navbar = () => {
  const navRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -100',
        onToggle: (self) => {
          const classes = ['bg-background/80', 'backdrop-blur-xl', 'border-dark/10', 'shadow-lg'];
          if (self.isActive) {
            navRef.current?.classList.add(...classes);
          } else {
            navRef.current?.classList.remove(...classes);
          }
        }
      });
      ScrollTrigger.create({
        start: 'top -100',
        end: 99999,
        toggleClass: { className: 'text-dark', targets: '.nav-text' }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <div 
        ref={navRef} 
        className="pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full border border-transparent transition-all duration-500 w-full max-w-5xl text-white nav-text"
      >
        <span className="font-heading font-bold text-xl tracking-tighter">TAITHON</span>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-heading font-medium">
          <a href="#features" className="hover:opacity-60 transition-opacity">Servicios</a>
          <a href="#metodologia" className="hover:opacity-60 transition-opacity">Metodología</a>
          <a href="#proceso" className="hover:opacity-60 transition-opacity">Proceso</a>
        </div>
        
        <MagneticButton href="https://cal.com/raul-velazquez-taithon" className="px-5 py-2 text-xs uppercase bg-white text-dark nav-btn hover:bg-accent hover:text-white transition-colors">
          Agendar Sesión <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </nav>
  );
};

// FEATURE CARDS
const ShufflerCard = () => {
  const items = [
    { title: "Atención Ininterrumpida", desc: "Respuestas al instante, sin descanso." },
    { title: "Conversión Diaria", desc: "Transforma cada chat en una oportunidad de venta." },
    { title: "Escalabilidad Global", desc: "Soporte multi-idioma a gran escala y simultáneo." }
  ];
  const [activeItems, setActiveItems] = useState(items);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItems(prev => {
        const next = [...prev];
        const last = next.pop();
        next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-full overflow-hidden interactive-lift">
      <div className="mb-8">
        <h3 className="text-2xl font-heading font-bold mb-2">Atención & Ventas</h3>
        <p className="opacity-70 font-data text-sm">Agentes IA Atendiendo 24/7</p>
      </div>
      <div className="relative flex-1 mt-auto h-[160px] min-h-[160px]">
        {activeItems.map((item, idx) => (
          <div 
            key={item.title}
            className="absolute left-0 right-0 rounded-xl bg-white border border-dark/5 p-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              top: `${idx * 16}px`,
              opacity: 1 - idx * 0.3,
              transform: `scale(${1 - idx * 0.05})`,
              zIndex: 10 - idx
            }}
          >
            <div className="font-heading font-bold text-sm leading-tight">{item.title}</div>
            <div className="font-data text-xs mt-1 opacity-60 leading-snug">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TypewriterCard = () => {
  const [text, setText] = useState('');
  const fullText = "> system.optimize()\n> Desbloqueando cuellos de botella...\n> Eliminando tareas repetitivas...\n> Reduciendo costes operacionales...\n> STATUS: Rendimiento Maximizado.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) i = 0; // Loop simple
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-full interactive-lift">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold mb-2">Automatización de Procesos</h3>
        <p className="opacity-70 font-data text-sm">Escalado Ágil y Sostenible</p>
      </div>
      <div className="flex-1 bg-dark text-primary rounded-xl p-5 font-data text-sm flex flex-col relative overflow-hidden min-h-[180px]">
        <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-2">
          <Terminal size={14} />
          <span className="text-xs uppercase tracking-widest opacity-60 flex items-center gap-2">
            Live Feed <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </span>
        </div>
        <div className="flex-1 whitespace-pre-wrap leading-relaxed opacity-90 relative z-10">
          {text}<span className="inline-block w-2 bg-accent ml-0.5 animate-pulse">&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

const SchedulerCard = () => {
  const days = ['S','M','T','W','T','F','S'];
  const [activeDay, setActiveDay] = useState(2);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, active: false });
  const containerRef = useRef(null);
  
  // Custom simple animation for the cursor
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to({}, { duration: 1 })
      .add(() => setCursorPos({ x: 60, y: 40, active: false }))
      .to({}, { duration: 0.8 })
      .add(() => { setCursorPos({ x: 60, y: 40, active: true }); setActiveDay(2); })
      .to({}, { duration: 0.3 })
      .add(() => setCursorPos({ x: 85, y: 80, active: false }))
      .to({}, { duration: 0.8 })
      .add(() => setCursorPos({ x: 85, y: 80, active: true }))
      .to({}, { duration: 0.3 })
      .add(() => setCursorPos({ x: 0, y: 0, active: false }))
      .to({}, { duration: 1.5 });
    return () => tl.kill();
  }, []);

  return (
    <div className="bg-background border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-full interactive-lift">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold mb-2">Consultoría Estratégica</h3>
        <p className="opacity-70 font-data text-sm">Auditoría y Plan de Acción</p>
      </div>
      <div className="flex-1 flex flex-col relative" ref={containerRef}>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {days.map((d, i) => (
             <div key={i} className="text-center font-data text-xs mb-1 opacity-50">{d}</div>
          ))}
          {[...Array(14)].map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "aspect-square rounded-md border flex items-center justify-center transition-colors duration-300",
                i === activeDay ? "bg-accent border-accent text-white" : "border-dark/10 hover:border-dark/30"
              )}
            />
          ))}
        </div>
        <div className="mt-auto pointer-events-none relative w-full h-[40px] border border-dark/10 rounded-lg flex items-center justify-center font-data text-xs uppercase tracking-widest bg-white">
          Aplicar Estrategia
        </div>

        {/* Cursor SVG */}
        <div 
          className="absolute z-20 pointer-events-none transition-all duration-700 ease-in-out"
          style={{ 
            left: `${cursorPos.x}%`, 
            top: `${cursorPos.y}%`,
            transform: `translate(-50%, -50%) scale(${cursorPos.active ? 0.9 : 1})`
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.78 6.74 21.32L10.3 17.76C10.66 17.4 11.16 17.2 11.68 17.2H18.59C19.24 17.2 19.57 16.43 19.1 15.96L6.5 3.36C6.04 2.9 5.5 3.23 5.5 3.21Z" fill="#111111" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

// PRESET C: BRUTALIST SIGNAL APP
const App = () => {
  const heroRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });

      // Philosophy Animation
      gsap.from('.phil-line', {
        scrollTrigger: {
          trigger: '.phil-container',
          start: 'top 75%'
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
      
      // Protocol Stacking Archive
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, i) => {
        if(i === 0) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onToggle: self => {
            if(self.isActive) {
              gsap.to(cards[i-1], { scale: 0.9, filter: 'blur(10px)', opacity: 0.5, duration: 0.5 });
            } else {
              gsap.to(cards[i-1], { scale: 1, filter: 'blur(0px)', opacity: 1, duration: 0.5 });
            }
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Noise Overlay */}
      <div className="noise-overlay">
        <svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg'>
          <filter id='noiseFilter'>
            <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/>
          </filter>
          <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
        </svg>
      </div>

      <Navbar />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-[100dvh] bg-dark flex flex-col justify-end overflow-hidden pb-16 md:pb-32 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
            alt="Arquitectura moderna de concreto" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl hero-text">
            <h1 className="flex flex-col text-white">
              <span className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none">
                Sistematiza tu{" "}
              </span>
              <span className="font-drama italic text-6xl md:text-9xl text-primary leading-[0.85] mt-2">
                Operación.
              </span>
            </h1>
            <p className="font-data text-primary/80 mt-8 max-w-lg text-sm md:text-base leading-relaxed hero-text">
              Implementamos Automatizaciones y Agentes de Inteligencia Artificial diseñados a medida para empresas que buscan escalar.
            </p>
          </div>
          <div className="hero-text shrink-0 pb-2">
            <MagneticButton href="https://cal.com/raul-velazquez-taithon" variant="primary">
              Iniciar Transformación <ArrowUpRight className="w-5 h-5" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-32 px-6 bg-primary rounded-t-[3rem] -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[400px]">
            <ShufflerCard />
            <TypewriterCard />
            <SchedulerCard />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="metodologia" className="py-32 md:py-48 px-6 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1590483736622-398541ce04ec?q=80&w=2070&auto=format&fit=crop" 
            alt="Raw material texture" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 phil-container">
          <p className="font-heading font-medium text-xl md:text-3xl text-white/50 mb-12 phil-line tracking-tight">
            La mayoría de empresas operan con: <br className="hidden md:block"/>
            <span className="text-white">tareas manuales, ineficiencias ocultas y cuellos de botella constantes.</span>
          </p>
          <p className="font-drama italic text-4xl md:text-7xl leading-tight phil-line">
            Nosotros construimos ecosistemas corporativos basados en <span className="text-accent underline decoration-accent/40 underline-offset-8">precisión autónoma</span>.
          </p>
        </div>
      </section>

      {/* PROTOCOL (STACKING) */}
      <section id="proceso" className="bg-primary px-6" ref={triggerRef}>
        <div className="max-w-4xl mx-auto py-24 pb-48">
          <div className="mb-24 flex items-center gap-4">
            <div className="h-[2px] w-12 bg-accent"></div>
            <h2 className="font-heading font-bold uppercase tracking-widest text-sm">El Protocolo Taithon</h2>
          </div>

          <div className="space-y-0 relative">
            {/* Card 1 */}
            <div className="protocol-card sticky top-[15vh] bg-background border border-dark rounded-[2.5rem] p-10 md:p-16 min-h-[50vh] flex flex-col justify-between shadow-2xl mb-8 transform-origin-top">
              <div className="flex justify-between items-start mb-16">
                <span className="font-data text-accent font-bold text-4xl">01</span>
                <div className="w-16 h-16 rounded-full border border-dark flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <Activity size={24} className="opacity-50" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl md:text-5xl tracking-tight mb-6">Consultoría y Auditoría</h3>
                <p className="font-data opacity-70 leading-relaxed max-w-xl text-sm md:text-base">
                  Analizamos tus procesos actuales y diseñamos un plan de acción a medida para integrar la IA exactamente donde sea más rentable para el negocio.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="protocol-card sticky top-[20vh] bg-[#F9F8F5] border border-dark rounded-[2.5rem] p-10 md:p-16 min-h-[50vh] flex flex-col justify-between shadow-2xl mb-8 transform-origin-top">
              <div className="flex justify-between items-start mb-16">
                <span className="font-data text-accent font-bold text-4xl">02</span>
                <div className="w-16 h-16 border border-dark flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-accent/10 translate-y-[-100%] animate-[slideDown_3s_ease-in-out_infinite]" />
                  <Cpu size={24} className="opacity-50" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl md:text-5xl tracking-tight mb-6">Desarrollo y Automatización</h3>
                <p className="font-data opacity-70 leading-relaxed max-w-xl text-sm md:text-base">
                  Transformamos la forma en que tu empresa opera mediante automatizaciones y agentes diseñados a medida para eliminar tareas repetitivas y duplicar tu productividad.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="protocol-card sticky top-[25vh] bg-white border border-dark rounded-[2.5rem] p-10 md:p-16 min-h-[50vh] flex flex-col justify-between shadow-2xl transform-origin-top">
              <div className="flex justify-between items-start mb-16">
                <span className="font-data text-accent font-bold text-4xl">03</span>
                <div className="w-16 h-16 rounded-full border border-dark flex items-center justify-center relative">
                  <div className="absolute inset-0 border border-accent rounded-full animate-ping opacity-30" style={{ animationDuration: '3s' }} />
                  <CircleDashed size={24} className="opacity-50 animate-[spin_4s_linear_infinite]" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl md:text-5xl tracking-tight mb-6">Despliegue y Conversión</h3>
                <p className="font-data opacity-70 leading-relaxed max-w-xl text-sm md:text-base">
                  Desplegamos y monitorizamos sistemas de IA integrados que transforman tus operaciones al completo, permitiendo que tu negocio escale de forma inteligente, autónoma y eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-background py-32 px-6 relative z-20 pb-48">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-data text-xs uppercase tracking-widest opacity-60">Casos de Éxito</span>
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-6xl tracking-tight">
                Productividad <br/><span className="font-drama italic font-normal text-accent">demostrada.</span>
              </h2>
            </div>
            <div className="max-w-xs md:max-w-sm font-data text-sm opacity-70 leading-relaxed border-l border-dark/20 pl-6">
              Empresas que ya han transformado sus operaciones y escalado sus resultados con nuestros sistemas.
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white border border-dark/10 rounded-[2.5rem] p-10 flex flex-col justify-between h-full interactive-lift shadow-sm">
              <div className="mb-12">
                <p className="font-drama italic text-2xl md:text-3xl leading-snug">
                  "No es solo automatización, es transformación estructural. Eliminaron el caos de nuestro flujo en semanas."
                </p>
              </div>
              <div className="border-t border-dark/10 pt-6">
                <p className="font-heading font-bold text-lg mb-1">John Duque</p>
                <p className="font-data text-xs opacity-50 uppercase tracking-widest">CEO, APPOLO</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-dark text-white border border-dark/10 rounded-[2.5rem] p-10 flex flex-col justify-between h-full interactive-lift shadow-xl transform md:-translate-y-4">
              <div className="mb-12">
                <p className="font-drama italic text-2xl md:text-3xl leading-snug text-background">
                  "Desde que integramos los agentes de Taithon, hemos recuperado cientos de horas mensuales. El sistema simplemente funciona."
                </p>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="font-heading font-bold text-lg mb-1 text-white">David Alcaide</p>
                <p className="font-data text-xs uppercase tracking-widest text-accent">CEO, JAG Alcaide</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-dark/10 rounded-[2.5rem] p-10 flex flex-col justify-between h-full interactive-lift shadow-sm transform md:translate-y-4">
              <div className="mb-12">
                <p className="font-drama italic text-2xl md:text-3xl leading-snug">
                  "Un antes y un después. Nuestra tasa de conversión se ha duplicado gracias a los sistemas de respuesta inmediata."
                </p>
              </div>
              <div className="border-t border-dark/10 pt-6">
                <p className="font-heading font-bold text-lg mb-1">Alessandro Zanardi</p>
                <p className="font-data text-xs opacity-50 uppercase tracking-widest">CEO, CODEWORKS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-accent text-white py-32 px-6 rounded-t-[3rem] -mt-10 relative z-30">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="font-drama italic text-5xl md:text-8xl mb-8 leading-[0.9]">
            Es hora de escalar.
          </h2>
          <p className="font-heading text-lg max-w-lg mb-12 opacity-90">
            Reserva una sesión estratégica gratuita y descubre exactamente qué procesos automatizaremos en las próximas 4 semanas.
          </p>
          <MagneticButton href="https://cal.com/raul-velazquez-taithon" className="bg-dark text-white hover:bg-white hover:text-dark px-10 py-5 text-base shadow-2xl">
            Agendar Sesión Gratuita
          </MagneticButton>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white pt-24 pb-8 px-6 rounded-t-[4rem] -mt-10 relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-sm">
            <h2 className="font-heading font-black text-3xl uppercase tracking-tighter mb-4">Taithon</h2>
            <p className="font-data text-sm opacity-50 mb-8">
              Implementamos Automatizaciones y Agentes de Inteligencia Artificial para empresas.
            </p>
            <div className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full font-data text-xs uppercase cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              Sistema Operacional
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12 font-heading text-sm font-medium">
            <div className="flex flex-col gap-4">
              <span className="font-data opacity-40 uppercase tracking-widest text-xs mb-2">Navegación</span>
              <a href="#features" className="hover:text-accent transition-colors">Servicios</a>
              <a href="#metodologia" className="hover:text-accent transition-colors">Metodología</a>
              <a href="#proceso" className="hover:text-accent transition-colors">Proceso</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-data opacity-40 uppercase tracking-widest text-xs mb-2">Legal</span>
              <a href="#" className="hover:text-accent transition-colors">Privacidad</a>
              <a href="#" className="hover:text-accent transition-colors">Términos</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex justify-between items-center font-data text-xs opacity-40">
          <span>&copy; {new Date().getFullYear()} Taithon.</span>
          <span>Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
