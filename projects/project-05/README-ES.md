# Proyecto 05: Evaluador Loops and Three-Role Upgrades

Measure how role separation (single role, generador plus evaluador, planificador plus generador plus evaluador) cambios implementation calidad.

## Directory Guía

| Directory | Meaning |
|------|------|
| `inicial/` | **Starting point**: based on the P4 solución, with multi-turn QA history still to implement. |
| `solución/single-role/` | **Variant A**: one agent does all work (planning, implementation, and self-review). Baseline calidad. |
| `solución/gen-eval/` | **Variant B**: generador plus evaluador pattern. Higher calidad, with revision evidence. |
| `solución/plan-gen-eval/` | **Variant C**: planificador plus generador plus evaluador. Highest calidad, with a sprint contract and scoring criterios. |

## How to Usar

```sh
# Run each of the three variants independently
cd solution/single-role && npm install  # single-role mode
cd solution/gen-eval && npm install     # generator plus evaluator mode
cd solution/plan-gen-eval && npm install # full three-role mode

# Compare the three variants:
# - Code quality (evaluator-rubric.md score)
# - Number of defects found
# - Amount of rework required
```

## Funcionalidades Covered

- Multi-turn QA history (conversational UI)
- Sprint contract
- Evaluador rúbrica tuning

## Related Lecciones

- [Lección 09: Por qué los agents declaran victoria demasiado pronto](../../docs/es/lectures/lecture-09-why-agents-declare-victory-too-early/index.md)
- [Lección 10: Por qué las pruebas end-to-end cambian los resultados](../../docs/es/lectures/lecture-10-why-end-to-end-testing-changes-results/index.md)
