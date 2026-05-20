# Proyecto 06: Runtime Observability and Debugging (Capstone)

Capstone proyecto: construir and benchmark a completo harness, then ejecutar cleanup loops to verificar calidad and maintainability.

## Directory Guía

| Directory | Meaning |
|------|------|
| `inicial/` | **Starting point**: completo product código, but the harness is intentionally weakened (only basic AGENTS.md, with no feature_list.json, sesión traspaso, or clean-state checklist). |
| `solución/` | **Referencia implementation**: maximum harness, with all artifact archivos present, high quality-document scores, benchmark scripts, and cleanup scanners. |

## How to Usar

```sh
cd starter
npm install
# Run the benchmark suite with the weak harness and record the results

cd ../solution
npm install
# Run the same benchmark with the complete harness
# Execute cleanup loops
# Compare score changes in quality-document.md

# Run benchmark tests
./scripts/benchmark.sh

# Run cleanup scan
./scripts/cleanup-scanner.sh
```

## Funcionalidades Covered

- Import documents
- Construir or refresh the index
- Answer questions with citations
- Runtime feedback
- Readable, restartable repositorio estado

## Related Lecciones

- [Lección 11: Por qué la observabilidad pertenece al interior del harness](../../docs/es/lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md)
- [Lección 12: Por qué cada sesión debe dejar un estado limpio](../../docs/es/lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md)
