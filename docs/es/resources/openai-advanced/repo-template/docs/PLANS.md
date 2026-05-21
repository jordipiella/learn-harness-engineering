# PLANS.md

Este archivo define cómo se crean, actualizan, completan y archivan los planes de ejecución.

## Cuándo se requiere un plan

Crea un plan de ejecución cuando el trabajo:

- atraviesa más de una sesión
- cambia más de un subsistema
- tiene verificación no trivial o riesgo de rollout
- depende de decisiones abiertas que deben registrarse

## Ubicaciones de planes

- `docs/exec-plans/active/`: planes que actualmente guían trabajo.
- `docs/exec-plans/completed/`: planes terminados conservados para contexto futuro de agents.
- `docs/exec-plans/tech-debt-tracker.md`: trabajo pospuesto y follow-ups.

## Secciones mínimas de un plan

- objetivo
- scope y fuera de scope
- ruta de verificación
- riesgos y bloqueos
- log de progreso
- decisiones abiertas

## Reglas operativas

- Un plan activo debería tener un único paso actual claramente asignado.
- Actualiza el plan a medida que avanza el trabajo; no lo trates como prosa estática.
- Si una decisión cambia la dirección de implementación, regístrala en el plan.
- Mueve planes terminados a `completed/` para que los agents puedan descubrir contexto previo.
