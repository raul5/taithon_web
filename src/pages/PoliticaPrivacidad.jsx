import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const PoliticaPrivacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-dark px-6 py-12 md:py-24 font-data">
      <div className="max-w-4xl mx-auto bg-dark text-white p-8 md:p-16 rounded-[2.5rem] border border-white/10 shadow-xl relative">
        <Link to="/" className="inline-flex mb-12 sm:mb-8 sm:absolute top-8 right-8 text-sm uppercase tracking-widest font-bold items-center gap-2 hover:text-accent transition-colors">
          Volver al Inicio <ArrowUpRight className="w-4 h-4" />
        </Link>
        <h1 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tight mb-8">Política de Privacidad</h1>
        
        <div className="space-y-8 text-sm md:text-base leading-relaxed opacity-80">
          <section>
            <h2 className="font-heading font-bold text-xl mb-3 text-accent">1. Información General y Responsable del Tratamiento</h2>
            <p>En cumplimiento con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que el responsable del tratamiento de los datos es:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Responsable:</strong> Raúl Velazquez Carrasco</li>
              <li><strong>NIF:</strong> 47923599V</li>
              <li><strong>Dirección:</strong> Calle Valencia 169, 08011 Barcelona, España</li>
              <li><strong>Correo electrónico:</strong> raul@taithon.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl mb-3 text-accent">2. Finalidad del Tratamiento de los Datos</h2>
            <p>Los datos personales que se puedan recoger a través de la web o mediante servicios de terceros (como formularios de reserva) serán tratados con las siguientes finalidades:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Gestión de contactos y clientes:</strong> Atender consultas, enviar presupuestos y gestionar la relación comercial.</li>
              <li><strong>Agendamiento de reuniones:</strong> Al utilizar sistemas de reserva como Cal.com, se recogerán los datos básicos (nombre, correo, mensaje) para coordinar las llamadas y sesiones estratégicas.</li>
            </ul>
            <p className="mt-2">Sus datos no se usarán para enviar correo no deseado (SPAM) salvo que haya brindado su consentimiento expreso para la suscripción a comunicaciones informativas.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl mb-3 text-accent">3. Legitimación para el Tratamiento</h2>
            <p>La base legal para el tratamiento de sus datos es el <strong>consentimiento exppreso</strong> que otorga al confirmar y aceptar de forma activa las condiciones de recogida de datos (p.ej., al reservar una reunión en Cal.com), así como la ejecución de medidas precontractuales o de un eventual contrato entre las partes.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl mb-3 text-accent">4. Proveedores y Destinatarios de los Datos</h2>
            <p>Sus datos no serán cedidos a terceros, salvo obligación legal. Sin embargo, para la prestación de los servicios necesarios para el funcionamiento de la web, compartimos cierta información bajo condiciones estrictas de privacidad con los siguientes encargados de tratamiento:</p>
             <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Servicios de Hosting e Infraestructura:</strong> Vercel Inc. e IONOS SE, con servidores que pueden estar alojados tanto en Europa (cumpliendo normativa) como transferencias internacionales amparadas en cláusulas contractuales tipo.</li>
              <li><strong>Reserva de Citas:</strong> Cal.com, para la gestión de su calendario y llamadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl mb-3 text-accent">5. Derechos de los Usuarios</h2>
            <p>Cualquier persona tiene derecho a obtener confirmación sobre si en Taithon estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Solicitar el acceso a los datos personales relativos al interesado.</li>
              <li>Solicitar su rectificación o supresión.</li>
              <li>Solicitar la limitación de su tratamiento.</li>
              <li>Oponerse al tratamiento.</li>
              <li>Solicitar la portabilidad de los datos.</li>
            </ul>
            <p className="mt-4">Podrá ejercer sus derechos dirigiendo una comunicación por escrito al correo electrónico: <strong>raul@taithon.com</strong>, especificando el derecho que desea ejercer y aportando prueba de su identidad.</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
