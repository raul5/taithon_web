import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cookie } from 'lucide-react';

const PoliticaCookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-dark px-6 py-12 md:py-24 font-data">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[2.5rem] border border-dark/10 shadow-lg relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <Link to="/" className="inline-flex mb-12 sm:mb-8 sm:absolute top-8 right-8 text-sm uppercase tracking-widest font-bold items-center gap-2 hover:text-accent transition-colors z-10">
          Volver al Inicio <ArrowUpRight className="w-4 h-4" />
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-dark flex items-center justify-center text-white">
                <Cookie size={24} />
            </div>
            <h1 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tight">Política de Cookies</h1>
        </div>
        
        <div className="space-y-8 text-sm md:text-base leading-relaxed opacity-80 relative z-10">
          <section>
            <p>En <strong>Taithon</strong> (Raúl Velázquez Carrasco), nos tomamos muy en serio tu privacidad. Esta política tiene como objetivo informarte de forma clara y transparente sobre las cookies que utilizamos en este sitio web.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl mb-3">1. ¿Qué es una Cookie?</h2>
            <p>Una cookie es un pequeño archivo de texto que se almacena en tu navegador cuando visitas casi cualquier página web. Su utilidad es que la web sea capaz de recordar tu visita cuando vuelvas a navegar por esa página, mejorando la experiencia de usuario y proporcionando funcionalidades específicas.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl mb-3">2. Cookies Utilizadas en este Sitio</h2>
            <p>Actualmente, Taithon utiliza un enfoque de <strong>privacidad por diseño</strong>. Esto significa que reducimos el uso de rastreadores al mínimo necesario.</p>
            
            <div className="mt-6 space-y-4">
                <div className="p-5 border border-dark/5 rounded-2xl bg-background/50">
                    <h3 className="font-bold text-accent uppercase tracking-wider text-xs mb-2">Cookies Técnicas (Necesarias)</h3>
                    <p className="text-sm">Son aquellas imprescindibles para el correcto funcionamiento de la web. Incluyen cookies que permiten la navegación y el uso de las diferentes opciones o servicios que en ella existen.</p>
                </div>
                
                <div className="p-5 border border-dark/5 rounded-2xl bg-background/50">
                    <h3 className="font-bold text-accent uppercase tracking-wider text-xs mb-2">Cookies de Terceros (Servicios Externos)</h3>
                    <p className="text-sm">Al utilizar el widget de <strong>Cal.com</strong> para agendar reuniones, este servicio externo puede establecer cookies técnicas propias para gestionar la reserva, recordar tus preferencias de zona horaria o asegurar la sesión de reserva. Taithon no tiene control directo sobre estas cookies de terceros.</p>
                </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl mb-3">3. Desactivación o Eliminación de Cookies</h2>
            <p>En cualquier momento podrás ejercer tu derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que estés usando:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
              <li><strong>Mozilla Firefox:</strong> Ajustes &gt; Privacidad y Seguridad &gt; Cookies y datos del sitio.</li>
              <li><strong>Safari:</strong> Ajustes &gt; Navegación &gt; Cookies y datos de sitios web.</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-dark/5">
            <p className="text-xs opacity-60 italic text-center">Última actualización: Abril de 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PoliticaCookies;
