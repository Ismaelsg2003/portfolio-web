# Portfolio web de Ismael Sánchez

Web personal con mis proyectos de desarrollo Python, automatización (RPA), IA y datos. Hecha con [Astro](https://astro.build): genera una web estática, rápida y sin servidor.

## Ejecutar en local

Necesitas **Node.js 22.12 o superior** (`node --version`).

```bash
npm install
npm run dev        # http://localhost:4321 (se recarga sola al guardar)
npm run build      # genera la web final en dist/
npm run preview    # sirve dist/ para comprobarla
```

## Añadir o actualizar un proyecto

Cada proyecto es un archivo en `src/content/projects/`. Para añadir uno nuevo, copia uno existente y cambia los datos de la cabecera:

```yaml
---
title: Nombre del proyecto
summary: Una o dos frases sobre qué problema resuelve.
status: terminado        # terminado | en-desarrollo | proximamente
order: 2                 # orden en la lista
area: Inteligencia artificial
featured: false          # true = tarjeta grande destacada (solo uno)
stack: [Python, FastAPI]
repo: https://github.com/Ismaelsg2003/...
demo: https://...        # opcional, enlace a la demo online
video: /media/archivo.mp4      # opcional, en public/media/
poster: /media/archivo.jpg     # imagen que se ve antes de reproducir
metrics:
  - { value: "2-4 s", label: "qué mide" }
---

Texto de la ficha en Markdown (## El problema, ## Cómo funciona...).
```

- Solo los proyectos con `status: terminado` tienen ficha propia en `/proyectos/<nombre-del-archivo>/`.
- Los vídeos, las imágenes y el CV van en `public/`.
- Los datos personales, la experiencia, la formación y el stack están en `src/data/profile.ts`.

## Publicar en Vercel (gratis)

1. Sube esta carpeta a un repositorio de GitHub (por ejemplo, `portfolio`).
2. En [vercel.com](https://vercel.com), entra con GitHub, pulsa **Add New → Project** e importa el repositorio. Vercel detecta Astro solo, así que no hay que configurar nada.
3. Cada `git push` vuelve a publicar la web automáticamente.
4. Cuando tengas la dirección definitiva, cámbiala en `site` dentro de `astro.config.mjs`.

## Estructura

```
src/
├── content/projects/   # Un .md por proyecto
├── components/         # Tarjeta de proyecto y vídeo de demo
├── data/profile.ts     # Datos personales, experiencia, formación, stack
├── layouts/Base.astro  # Cabecera, pie y metadatos
├── pages/              # Inicio, ficha de proyecto y 404
├── styles/global.css   # Colores (claro y oscuro), tipografía y estilos comunes
└── assets/avatar.jpg   # Avatar (Astro lo optimiza al compilar)
public/
├── media/              # Vídeos y portadas de las demos
├── cv/                 # CV en PDF
└── favicon.svg
```
