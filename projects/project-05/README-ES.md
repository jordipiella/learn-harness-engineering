# Proyecto 05: Bucles de evaluador y mejoras de tres roles

Mide cómo la separación de roles (rol único, generator más evaluator, planner más generator más evaluator) cambia la calidad de implementación.

## Guía de directorios

| Directorio | Significado |
|------|------|
| `starter/` | **Punto de partida**: basado en la solución de P4, con historial QA multi-turn todavía por implementar. |
| `solution/single-role/` | **Variante A**: un solo agent hace todo el trabajo: planificación, implementación y autorrevisión. Calidad base. |
| `solution/gen-eval/` | **Variante B**: patrón generator más evaluator. Mayor calidad, con evidencia de revisión. |
| `solution/plan-gen-eval/` | **Variante C**: planner más generator más evaluator. Máxima calidad, con sprint contract y criterios de puntuación. |

## Cómo usarlo

```sh
# Ejecuta cada una de las tres variantes de forma independiente
cd solution/single-role && npm install  # modo single-role
cd solution/gen-eval && npm install     # modo generator plus evaluator
cd solution/plan-gen-eval && npm install # modo completo de tres roles

# Compara las tres variantes:
# - Calidad del código (puntuación en evaluator-rubric.md)
# - Número de defectos encontrados
# - Cantidad de retrabajo requerido
```

## Funcionalidades cubiertas

- Historial QA multi-turn (UI conversacional)
- Sprint contract
- Ajuste de rúbrica de evaluator

## Lecciones relacionadas

- [Lección 09: Por qué los agents declaran victoria demasiado pronto](../../docs/es/lectures/lecture-09-why-agents-declare-victory-too-early/index.md)
- [Lección 10: Por qué las pruebas end-to-end cambian los resultados](../../docs/es/lectures/lecture-10-why-end-to-end-testing-changes-results/index.md)
