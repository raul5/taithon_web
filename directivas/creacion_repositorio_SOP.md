# SOP: Creación de Repositorio en GitHub

## Objetivo
Configurar el control de versiones local y subir el código al repositorio remoto `taithon-landing` en GitHub del usuario `raulvelazquez555@gmail.com`.

## Lógica de Configuración
1.  **Inicialización Local:** Ejecutar `git init`.
2.  **Configuración de .gitignore:** Asegurarse de excluir `node_modules`, `.vercel`, `.env`.
3.  **Primer Commit:** Añadir todos los archivos y realizar un commit inicial (`git add .`, `git commit -m "Initial commit"`).
4.  **Creación Remota:** Utilizar el navegador para crear el repositorio `taithon-landing` en GitHub.
5.  **Vínculo Remoto:** Ejecutar `git remote add origin https://github.com/raulvelazquez555/taithon-landing.git`.
6.  **Push:** Subir la rama `main` (`git push -u origin main`).

## Restricciones y Casos Borde
- **Autenticación:** El push fallará si no hay sesión activa en el entorno de desarrollo. Se requerirá un Token (PAT) o login via browser.
- **Rama por Defecto:** Asegurarse de que la rama se llame `main`.

## Trampas Conocidas (Aprendizaje)
- *Nota:* Si el repositorio ya tiene un README, el primer push puede requerir un `--force` o un `pull` previo. Se recomienda crear el repo vacío.
