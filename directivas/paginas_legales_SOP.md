# Directiva: Añadir Páginas Legales (SOP)

## Objetivo
Implementar los textos legales obligatorios para cumplir con la LSSI-CE y el RGPD en la landing page de Taithon. Esto incluye:
- Aviso Legal
- Política de Privacidad
- Política de Cookies (y banner de consentimiento si aplica)

## Entradas y Dependencias
- Información fiscal/mercantil de la empresa (Razón social, CIF/NIF, domicilio, registro mercantil, email, etc.).
- Descripción del tratamiento de datos (Formularios, herramientas de analítica, proveedores de hosting, etc.).
- Herramientas de rastreo/cookies empleadas en el sitio (ej. Vercel web analytics, Google Analytics, píxeles).

## Lógica y Pasos a Seguir
1. **Recopilación de Datos:** Obtener del usuario/cliente la información empresarial y los sistemas de tracking que se usarán en la web.
2. **Generación de Textos:**
   - Crear el componente `AvisoLegal`.
   - Crear el componente `PoliticaPrivacidad`.
   - Crear el componente `PoliticaCookies` y configurar un Cookie Banner funcional en caso de usar cookies no esenciales.
3. **Integración en la Navegación:**
   - Dado que el proyecto base es una single-page construida con React (sin `react-router-dom` por defecto), evaluar la instalación de React Router o el uso de modales/vistas condicionales. Se priorizará un enrutamiento estándar (React Router) para poder enlazar directamente a `/aviso-legal`, etc., ya que es mejor para la accesibilidad y el cumplimiento legal.
4. **Actualización del Footer:**
   - Añadir los enlaces a las políticas en el pie de página de la página principal.

## Restricciones y Casos Borde
- *Trampa conocida:* No se deben insertar textos legales de relleno (Lorem Ipsum) en producción. Si faltan datos, se dejará constancia y se bloqueará el despliegue a producción hasta completarse.
- *Responsividad:* Los textos legales suelen ser largos. Asegurar que las clases de Tailwind apliquen un ancho de lectura cómodo (ej. `max-w-3xl`, `prose`, etc.) y buen contraste.

## Seguimiento del Estado
- [x] Información legal recabada.
- [x] Textos legales generados.
- [x] Sistema de rutas (o vistas) implementado.
- [ ] Cookie banner configurado (Descartado temporalmente por decisión del cliente).
- [x] Enlaces en el footer integrados.
