# SOP: Configuración de DNS en Ionos (Taithon Professional)

## Objetivo
Configurar los registros A y CNAME en el panel de Ionos para el dominio `taithon.com`.

## Lógica de Configuración
1.  **Entrar en Ionos:** Abrir `https://login.ionos.es`.
2.  **Gestionar DNS:** Navegar a "Dominios y SSL" -> "taithon.com" -> pestaña "DNS".
3.  **Registro A (@):**
    *   **Host:** `@` (o vacío).
    *   **Tipo:** `A`.
    *   **Puntos a (IPv4):** `76.76.21.21`.
    *   **TTL:** Por defecto (ej. 1 hora).
4.  **Registro CNAME (www):**
    *   **Host:** `www`.
    *   **Tipo:** `CNAME`.
    *   **Alias de:** `cname.vercel-dns.com`.
    *   **TTL:** Por defecto.

## Restricciones y Casos Borde
- **Registros Existentes:** Si existen registros A para `@` que apunten a otra IP, editarlos o borrarlos.
- **Registros CNAME Existentes:** El registro `www` CNAME no debe entrar en conflicto con el alias del dominio principal.

## Trampas Conocidas (Aprendizaje)
- *Nota:* Ionos permite crear registros rápida pero la actualización del panel puede tardar un par de minutos en reflejar el estado real de la zona DNS.
- *Nota:* Siempre preferir `cname.vercel-dns.com` para el subdominio `www` si es posible.
