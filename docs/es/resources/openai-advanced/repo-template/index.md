# Plantilla avanzada de repo

Copia este inicial en un repositorio real cuando quieras una superficie de documentación agent-first al estilo OpenAI en vez de solo un harness mínimo.

## Orden de copia

1. Copia `AGENTS.md` y `ARCHITECTURE.md` a la raíz del repo.
2. Copia todo el árbol `docs/`.
3. Rellena primero `docs/PRODUCT_SENSE.md`, `docs/QUALITY_SCORE.md` y `docs/RELIABILITY.md`.
4. Añade tu primer plan activo bajo `docs/exec-plans/active/`.
5. Mantén cortos los archivos de entrada y enruta el detalle hacia los documentos enlazados.

## Qué optimiza esta plantilla

- contexto duradero local al repo
- divulgación progresiva en vez de un único archivo gigante de instrucciones
- ciclo de vida explícito de planes
- seguimiento de calidad a lo largo del tiempo
- límites legibles para agents y humanos

Trata cada archivo como punto de partida. Sustituye placeholders, ejemplos y comandos de muestra por los detalles reales de tu proyecto antes de depender de él.
