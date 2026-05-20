# PLANS.md

This archivo defines how execution plans are created, updated, completed, and
archived.

## When A Plan Is Required

Crear an execution plan when work:

- spans more than one sesión
- cambios more than one subsystem
- has non-trivial verificación or rollout risk
- depends on open decisions that should be logged

## Plan Locations

- `docs/exec-plans/active/`: plans currently driving work
- `docs/exec-plans/completed/`: terminado plans kept for future agent contexto
- `docs/exec-plans/tech-debt-tracker.md`: deferred work and follow-ups

## Minimum Plan Secciones

- objective
- alcance and out-of-alcance
- verificación ruta
- risks and blockers
- progress log
- open decisions

## Operating Reglas

- One active plan should have one clearly owned current paso.
- Update the plan as work progresses; do not treat it as static prose.
- If a decision cambios implementation direction, record it in the plan.
- Move terminado plans to `completed/` so agents can still discover prior contexto.
