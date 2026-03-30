# SOP: Configuración de Dominio Oficial (Ionos -> Vercel)

## Objetivo
Asociar el dominio `taithon.com` adquirido en Ionos con el despliegue de Vercel del proyecto `taithon-landing`.

## Lógica de Configuración
1.  **Solicitud en Vercel:** Ejecutar `npx vercel domains add taithon.com`.
2.  **Identificación de Registros:** Extraer los valores DNS (A o CNAME) y TXT que Vercel proporcione.
3.  **Configuración en Ionos:** El usuario debe entrar en el panel de control de Ionos -> Dominios -> taithon.com -> DNS.
4.  **Actualización:** Añadir los registros indicados por Vercel.
5.  **Verificación:** Vercel comprobará automáticamente la propagación (puede tardar de 5 minutos a 48 horas).

## Restricciones y Casos Borde
- **Propagación:** Los cambios de DNS no son instantáneos. Mantener la calma.
- **SSL:** Vercel genera el certificado SSL (HTTPS) automáticamente una vez que el dominio está verificado. No es necesario configurarlo en Ionos.
- **Conflictos:** Asegurarse de que no haya otros registros A apuntando a antiguos servidores.

## Trampas Conocidas (Aprendizaje)
- *Nota:* Ionos a veces tiene registros por defecto o parkings de dominio que deben ser eliminados antes de apuntar a Vercel.
