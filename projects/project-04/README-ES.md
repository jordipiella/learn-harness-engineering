# Proyecto 04: Runtime Observability and Structural Control

Introduce runtime observabilidad and structural boundary checks while debugging a seeded runtime defect.

## Directory Guía

| Directory | Meaning |
|------|------|
| `inicial/` | **Starting point**: based on the P3 solución, with logging and structural boundary funcionalidades still to implement. `IndexingService` contains a hidden seeded bug: archivos longer than 1000 characters produce empty chunks. There is no architecture-check script. |
| `solución/` | **Referencia implementation**: estructurado logging module, arquitectura boundary-check script, and the seeded bug fixed. |

## How to Usar

```sh
cd starter
npm install
# 1. Observe whether the agent can locate the bug through logs
# 2. Import a large file and check whether chunking behaves incorrectly

cd ../solution
npm install
# Compare how structured logs speed up diagnosis
```

## Funcionalidades Covered

- Startup logs
- Import and indexing logs
- Visible QA fallo ruta
- Explícito límites between main, preload, renderer, and services capas
- Debugging a seeded runtime defect

## Related Lecciones

- [Lección 07: Por qué los agents se exceden y no terminan](../../docs/es/lectures/lecture-07-why-agents-overreach-and-under-finish/index.md)
- [Lección 08: Por qué las listas de funcionalidades son primitivas del harness](../../docs/es/lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md)
