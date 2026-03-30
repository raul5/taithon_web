# SOP: Despliegue en Vercel (Taithon Professional)

## Objetivo
Configurar y ejecutar el despliegue del proyecto `taithon-landing` en la plataforma Vercel de forma determinista y reproducible.

## Entradas
- Código fuente del proyecto (Vite + React).
- Vercel CLI (vía `npx`).
- Credenciales de Vercel (el usuario debe estar logueado localmente o tener tokens configurados).

## Lógica de Despliegue
1. Verificar que existen los archivos base (`package.json`, `index.html`).
2. Ejecutar `npx vercel` para vincular y desplegar el proyecto.
3. Usar el flag `--yes` para saltar prompts interactivos si es posible.
4. Identificar la URL de salida para validación.

## Restricciones y Casos Borde
- **Interactividad:** La primera vez que se ejecuta `npx vercel` en un proyecto nuevo, puede pedir vinculación manual. El script debe intentar manejar esto o informar al usuario.
- **Entorno:** Asegurarse de que `node_modules` esté actualizado si se requiere construir localmente (aunque Vercel suele construir en la nube).
- **Producción vs Preview:** Por defecto se usará un deployment de preview. Para producción total se requiere el flag `--prod`.

## Trampas Conocidas (Aprendizaje)
- **Error de Política en Windows:** Si PowerShell bloquea `npx`, ejecutar: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`.
- **Restricción de Nombres:** Vercel exige nombres en minúsculas. Si la carpeta tiene mayúsculas, se debe usar `--name <nombre-en-minusculas>`.
- **Falta de Login:** Si el comando falla por falta de login, el usuario debe ejecutar `npx vercel login` manualmente una vez.
- **Configuración de Vite:** Vite requiere que el `root` esté bien configurado en Vercel si no se detecta automáticamente.
