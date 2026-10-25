---
title: Bot RPA para empresas de grúas
summary: Un bot que vigila la plataforma donde las aseguradoras publican servicios, acepta en segundos los que encajan con las reglas de la empresa y asigna la grúa adecuada. El gerente lo controla todo desde un panel web.
status: terminado
order: 1
area: Automatización (RPA)
featured: true
stack: [Python, Playwright, SQLite, FastAPI, Docker, Telegram API, pytest]
repo: https://github.com/Ismaelsg2003/rpa-gruas-bot
video: /media/rpa-gruas-demo.mp4
poster: /media/rpa-gruas-poster.jpg
metrics:
  - { value: "2-4 s", label: "desde que se publica un servicio hasta que el bot lo acepta" }
  - { value: "24/7", label: "sin nadie vigilando la pantalla" }
  - { value: "44", label: "tests automatizados" }
---

Versión pública y genérica de un sistema que desarrollé en producción para una empresa de grúas. La plataforma, las aseguradoras, los conductores y los servicios de la demo son ficticios: no contiene código ni datos del cliente.

## El problema

Las aseguradoras publican los servicios de asistencia (arrastres, baterías, pinchazos…) en plataformas web. Se los queda la primera empresa que los acepta, y si nadie lo hace a tiempo pasan a otra. Hacerlo a mano obliga a tener a alguien pegado a la pantalla día y noche, decidiendo en segundos si el servicio compensa y qué grúa está libre.

## Cómo funciona

- **Plataforma de asistencia (simulada).** Publica servicios con expediente, vehículo, ubicación, kilómetros, importe y una cuenta atrás.
- **Bot RPA.** Entra en la plataforma con Playwright como lo haría una persona. Lee los servicios, los evalúa con las reglas de la empresa, elige la grúa, la escribe en la plataforma y pulsa «Aceptar». Cada decisión queda registrada con su motivo y se avisa por Telegram.
- **Panel del gerente.** Muestra en directo los servicios aceptados y descartados, la flota con sus colas y las métricas del día. Desde ahí se cambian las reglas, se pausa el bot o se retira una grúa, sin tocar código.

## Decisiones técnicas

- **Asignación con colas.** Si todas las grúas adecuadas están ocupadas, el bot acepta igualmente y pone el servicio en cola de la que antes quede libre, como haría una empresa real. Solo lo deja pasar si la espera supera el máximo configurado.
- **Coste por grúa.** Se combinan los segundos de espera, la distancia entre zonas y lo «adecuado» del vehículo. Así no se manda la única grúa pesada a cambiar una batería.
- **Reglas en base de datos.** Zonas, importe mínimo, kilómetros, aseguradoras o tipos de servicio se activan y editan desde el panel, y el bot las aplica en el siguiente ciclo.
- **Preparado para producción.** Docker Compose, Caddy con HTTPS automático, migraciones de base de datos y un modo demo pública que se restablece solo.
