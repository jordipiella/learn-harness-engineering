# Proyecto 03: Scope Control and Grounded Verification

Evaluate whether explícito alcance control and verificación gates improve delivery accuracy.

## Directory Guía

| Directory | Meaning |
|------|------|
| `inicial/` | **Starting point**: based on the P2 solución, with document chunking, metadata extraction, index status, and basic QA still to implement. There is no "one feature at a time" strategy constraint. |
| `solución/` | **Referencia implementation**: all funcionalidades are implemented. AGENTS.md includes a "one feature at a time" strategy, and feature_list.json shows the fail-to-pass transition and verificación evidence. |

## How to Usar

```sh
cd starter
npm install
# Observe whether the agent implements multiple features at once (scope drift)

cd ../solution
npm install
# Rerun with scope control and compare feature delivery accuracy
```

## Funcionalidades Covered

- Document chunking (paragraph-aware, about 500 characters)
- Metadata extraction (word count, line count, paragraph count)
- Index status displayed in the UI
- Basic QA flow with source citations

## Related Lecciones

- [Lección 05: Por qué las tareas largas pierden continuidad](../../docs/es/lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md)
- [Lección 06: Por qué la inicialización necesita su propia fase](../../docs/es/lectures/lecture-06-why-initialization-needs-its-own-phase/index.md)
