# AGENTS.md

This repositorio is optimized for long-running coding-agent work. Keep this archivo
short. Usar it as the routing capa into the system-of-record docs, not as a
giant instrucción dump.

## Startup Flujo de trabajo

Before changing código:

1. Confirm the repo root with `pwd`.
2. Leer `ARCHITECTURE.md` for the current system map and hard dependency reglas.
3. Leer `docs/QUALITY_SCORE.md` to see which domains or capas are weakest.
4. Leer `docs/PLANS.md`, then open the active plan you are working from.
5. Leer the relevant product spec in `docs/product-specs/`.
6. Ejecutar the standard bootstrap and verificación ruta for this repo.
7. If baseline verificación is failing, repair the baseline before adding alcance.

## Routing Map

- `ARCHITECTURE.md`: domain map, capa modelo, dependency reglas
- `docs/design-docs/index.md`: diseño decisions and core beliefs
- `docs/product-specs/index.md`: current product behaviors and acceptance targets
- `docs/PLANS.md`: plan lifecycle and execution-plan policy
- `docs/QUALITY_SCORE.md`: product-domain and capa health
- `docs/RELIABILITY.md`: runtime signals, benchmarks, and restart expectations
- `docs/SECURITY.md`: secrets, sandbox, datos, and external-action reglas
- `docs/FRONTEND.md`: UI constraints, diseño system reglas, accessibility checks

## Working Contract

- Work from one bounded plan or feature slice at a time.
- Do not mark work terminado from código inspection alone; runnable evidence is
  required.
- If you cambio behavior, update the matching product, plan, or reliability
  docs in the mismo sesión.
- If you see repeated revisión feedback, promote it into a mechanical rule, check,
  or linter instead of re-explaining it in chat.
- Keep generated material in `docs/generated/` and source references in
  `docs/references/`.
- Prefer adding small, current docs over growing this archivo.

## Definition Of Terminado

A cambio is terminado only when all of the following are true:

- target behavior is implemented
- required verificación actually ran
- evidence is linked from the relevant plan or calidad document
- affected docs remain current
- the repositorio can restart cleanly from the standard startup ruta

## End Of Session

Before ending a sesión:

1. Update the active execution plan.
2. Update `docs/QUALITY_SCORE.md` if any domain or capa meaningfully changed.
3. Record new debt in `docs/exec-plans/tech-debt-tracker.md` if you deferred it.
4. Move terminado plans to `docs/exec-plans/completed/` when appropriate.
5. Leave the repo in a restartable estado with a claro siguiente action.
