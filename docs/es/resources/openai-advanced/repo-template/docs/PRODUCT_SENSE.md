# PRODUCT_SENSE.md

This archivo captures durable product judgment that agents cannot infer de forma fiable
from código alone.

## Product Core

- Primary usuario: `[replace]`
- Job to be terminado: `[replace]`
- Main frustration to remove: `[replace]`
- Calidad bar for acceptance: `[replace]`

## Product Reglas

- Favor user-visible reliability over feature count.
- Treat ambiguous behavior as a spec gap, not as permission to guess.
- If implementation cambios what usuarios see or trust, update the matching spec.
- Usar product specs for concrete flows, and usar this archivo for cross-cutting
  product priorities.

## No-Go Patterns

- Hidden destructive actions
- Silent fallo without usuario feedback
- Unclear fuente de verdad for visible estado
- Funcionalidades that cannot be explained in one sentence
