# SOP avanzados de OpenAI

Estos SOP traducen los patrones operativos del artículo en playbooks concretos que puedes seguir o adaptar.

## SOP incluidos

- [`layered-domain-architecture.md`](./layered-domain-architecture.md): establece capas explícitas y límites transversales.
- [`encode-knowledge-into-repo.md`](./encode-knowledge-into-repo.md): mueve conocimiento invisible desde chat, docs y memoria a archivos locales del repo.
- [`observability-feedback-loop.md`](./observability-feedback-loop.md): da a los agents logs, métricas, trazas y un bucle de depuración repetible.
- [`chrome-devtools-validation-loop.md`](./chrome-devtools-validation-loop.md): usa automatización de navegador y snapshots para validar comportamiento de UI hasta que esté limpio.

## Cómo usarlos

1. Elige el SOP que coincida con tu cuello de botella actual.
2. Usa la checklist para configurar los artefactos o tooling faltantes.
3. Codifica las reglas resultantes en los documentos de tu `repo-template/` copiado.
4. Convierte comentarios repetidos de revisión en checks, scripts o guardrails.

No están pensados para seguirse a ciegas. Están pensados para hacer que el harness sea más legible, exigible y repetible.
