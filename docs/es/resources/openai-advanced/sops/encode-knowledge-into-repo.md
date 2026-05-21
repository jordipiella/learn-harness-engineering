# SOP: codificar conocimiento invisible dentro del repo

Usa este SOP cuando el contexto importante todavía vive en Google Docs, hilos de chat, tickets o la cabeza de las personas.

## Objetivo

Hacer que el conocimiento invisible para el agent sea descubrible en el codebase para que una sesión fresca pueda actuar sobre él sin depender de conversación previa.

## Señales de activación

- El agent sigue preguntando cómo funciona el sistema.
- Humanos dicen "esto lo decidimos en Slack" o "sigue lo que dijo X la semana pasada".
- Las revisiones hacen referencia a reglas de producto o seguridad que no están escritas en el repo.
- Las sesiones nuevas repiten trabajo de descubrimiento que ya debería estar resuelto.

## SOP de ejecución

1. Lista las fuentes de conocimiento invisible: docs, chats, reglas tácitas de equipo, decisiones verbales.
2. Para cada fuente, pregunta: ¿es arquitectura, comportamiento de producto, política de seguridad, expectativa de fiabilidad, contexto de plan o material de referencia?
3. Codifícalo en el artefacto de repo correspondiente:
   - arquitectura -> `ARCHITECTURE.md`
   - comportamiento de producto -> `docs/product-specs/`
   - rationale de diseño -> `docs/design-docs/`
   - estado de ejecución -> `docs/exec-plans/`
   - referencias externas repetidas -> `docs/references/`
   - expectativas de calidad o fiabilidad -> `docs/QUALITY_SCORE.md` o `docs/RELIABILITY.md`
4. Sustituye frases vagas por redacción operativamente útil.
5. Elimina o depreca copias obsoletas para que el repo mantenga una única verdad descubrible.

## Buenas reglas de codificación

- Escribe para descubribilidad, no para completitud literaria.
- Prefiere documentos cortos con nombres de archivo claros.
- Enlaza artefactos relacionados.
- Almacena reglas duraderas, no transcripciones de reuniones.
- Actualiza el repo en la misma sesión en la que se toma la decisión.

## Definition Of Done

- Un agent fresco puede descubrir la regla relevante sin preguntar a un humano.
- El mismo hecho no está disperso en varios archivos contradictorios.
- El nuevo artefacto vive cerca del código o workflow que gobierna.
