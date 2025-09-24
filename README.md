# Mi Blog — Actividad 1 (HTML + CSS + JS)

Proyecto estático sin dependencias. Abre `index.html` en tu navegador o publícalo en GitHub Pages.

## Funcionalidades
- Lista de posts generada desde `posts.json`
- Búsqueda por texto y filtro por etiquetas
- Paginación
- Guardados (★) y Me gusta (❤) persistidos en `localStorage`
- Modo claro/oscuro con CSS variables
- Lectura del post en página dedicada `/posts/[slug]` con comentarios por post (persistidos en `localStorage`)
- Accesibilidad: semántica, foco visible, `aria-*`, skip link, `aria-live`

## Ejecutar en local
1. Descarga el ZIP y descomprímelo.
2. Haz doble clic en `index.html` (no necesita servidor). Nota: al abrir directamente con `file://`, los enlaces a artículos usan `posts/index.html?id=SLUG` por compatibilidad.

## Despliegue en GitHub Pages
1. Crea un repositorio nuevo en GitHub y sube todos los archivos.
2. Ve a **Settings → Pages** y selecciona **Deploy from a branch**, rama `main`, carpeta `/root`.
3. Guarda. Tu blog quedará disponible en una URL del estilo: `https://usuario.github.io/nombre-repo/`.

## Estructura
```
blog-actividad-1/
  index.html
  styles.css
  app.js
  posts.json
  favicon.svg
  README.md
```
