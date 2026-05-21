# SOP: arquitectura de dominio por capas

Usa este SOP cuando el agent siga violando límites, duplicando lógica entre capas o produciendo código que se vuelve difícil de revisar después de unas pocas sesiones.

## Objetivo

Hacer que los límites de dominio sean lo bastante explícitos para que los agents avancen rápido sin degradar silenciosamente la estructura.

## Modelo objetivo

Dentro de un dominio de negocio, prefiere este flujo direccional:

`Types -> Config -> Repo -> Service -> Runtime -> UI`

Las preocupaciones transversales deben entrar mediante providers o adapters explícitos. Los utils compartidos quedan fuera del dominio y no deben acumular lógica de dominio.

## Checklist de configuración

- Define los dominios actuales en `ARCHITECTURE.md`.
- Escribe las direcciones de dependencia permitidas en `ARCHITECTURE.md`.
- Registra interfaces transversales como auth, telemetry y APIs externas.
- Añade una nota corta para la violación de límite actual más difícil.
- Decide qué debe imponerse mecánicamente mediante lint, pruebas o scripts.

## SOP de ejecución

1. Mapea el codebase en dominios antes de tocar estilo de implementación.
2. Para cada dominio, identifica la secuencia de capas permitida.
3. Identifica todas las preocupaciones transversales y enrútalas por providers o adapters.
4. Mueve lógica compartida ambigua al dominio propietario o a utils realmente genéricos.
5. Documenta las reglas en `ARCHITECTURE.md`.
6. Añade un guardrail ejecutable para la violación de mayor coste.
7. Actualiza la puntuación de calidad después del cambio.

## Definition Of Done

- Un agent fresco puede decir qué capa posee un cambio.
- El código de UI ya no alcanza directamente repositorios ni efectos externos.
- Las preocupaciones transversales tienen puntos de entrada nombrados.
- Al menos un límite importante se impone mecánicamente.

## Artefactos del repo a actualizar

- `ARCHITECTURE.md`
- `docs/QUALITY_SCORE.md`
- `docs/design-docs/` cuando cambie el rationale
- `docs/PLANS.md` o el plan de ejecución activo
