import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const AvisoLegal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-dark px-6 py-12 md:py-24 font-data">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[2.5rem] border border-dark/10 shadow-lg relative">
        <Link to="/" className="inline-flex mb-12 sm:mb-8 sm:absolute top-8 right-8 text-sm uppercase tracking-widest font-bold items-center gap-2 hover:text-accent transition-colors">
          Volver al Inicio <ArrowUpRight className="w-4 h-4" />
        </Link>
        <h1 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tight mb-8">Aviso Legal</h1>
        
        <div className="space-y-6 text-sm md:text-base leading-relaxed opacity-80">
          <section>
            <h2 className="font-heading font-bold text-lg mb-2">1. Datos Identificativos</h2>
            <p>En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), a continuación se reflejan los siguientes datos del titular del sitio web:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Titular:</strong> Raúl Velazquez Carrasco</li>
              <li><strong>NIF:</strong> 47923599V</li>
              <li><strong>Dirección:</strong> Calle Valencia 169, 08011 Barcelona, España</li>
              <li><strong>Contacto:</strong> raul@taithon.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-lg mb-2">2. Usuarios</h2>
            <p>El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-lg mb-2">3. Propiedad Intelectual e Industrial</h2>
            <p>El Titular por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Raúl Velazquez Carrasco o bien de sus licenciantes.</p>
            <p className="mt-2">Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización expresa del Titular.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-lg mb-2">4. Exclusión de Garantías y Responsabilidad</h2>
            <p>El Titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;
