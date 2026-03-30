# SOP: Integración con GitHub (CI/CD -> Vercel)

## Objetivo
Automatizar el flujo de despliegue mediante la conexión con un repositorio de GitHub.

## Lógica de Configuración
1.  **Inicialización Local:** Asegurarse de que el proyecto tiene `git` (usar `git init`).
2.  **Repositorio Remoto:** El usuario crea un repositorio en GitHub.
3.  **Vínculo Local-Remoto:** Añadir el origen remoto (`git remote add origin ...`).
4.  **GitHub Connect:** Ejecutar `npx vercel git connect` para sincronizar las ramas con el entorno de despliegue.

## Restricciones y Casos Borde
- **Acceso:** El usuario debe autenticar ante GitHub si no lo está.
- **Ramas:** Por defecto, la rama `main` despliega en producción.
- **Ignorados:** Asegurarse de que `.gitignore` incluya `.vercel/`, `node_modules/`, y archivos `.env`.

## Trampas Conocidas (Aprendizaje)
- *Nota:* Si el repositorio ya existe, Vercel suele detectarlo automáticamente al ejecutar `git push`.
