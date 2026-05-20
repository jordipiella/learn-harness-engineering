# Proyecto 02: Espacio de trabajo legible por agents

Demonstrate how repositorio readability and explícito continuity artifacts reduce contexto loss during multi-sesión development.

## Directory Guía

| Directory | Meaning |
|------|------|
| `inicial/` | **Starting point**: based on the P1 solución, with document import, detail view, and persistence still to implement. The harness is weak: AGENTS.md is minimal and there is no sesión traspaso. |
| `solución/` | **Referencia implementation**: all new funcionalidades are implemented, with completo workspace documentation (ARCHITECTURE.md, PRODUCT.md, sesión-traspaso.md). |

## How to Usar

```sh
# Requires at least 2 agent sessions to complete
cd starter
npm install
# Session A: implement document import and the detail view
# Session B: implement persistence (observe whether the agent quickly regains context)

cd ../solution
npm install
# Rerun with the complete harness and compare session recovery speed
```

## Funcionalidades Covered

- Document import flow (archivo picker plus IPC transfer)
- Document detail view (metadata plus content display)
- Basic persistence (imported documents remain after restart)

## Related Lecciones

- [Lección 03: Por qué el repositorio debe convertirse en el sistema de registro](../../docs/es/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md)
- [Lección 04: Por qué falla un único archivo gigante de instrucciones](../../docs/es/lectures/lecture-04-why-one-giant-instruction-file-fails/index.md)
