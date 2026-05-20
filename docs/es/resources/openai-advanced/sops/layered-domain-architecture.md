# SOP: Layered Domain Arquitectura

Usar this SOP when the agent keeps violating límites, duplicating logic across
capas, or producing código that becomes hard to revisión after a few sesións.

## Objetivo

Hacer domain límites explícito enough that agents can move quickly without
silently degrading estructura.

## Target Modelo

Within a business domain, prefer this directional flow:

`Types -> Config -> Repo -> Service -> Runtime -> UI`

Cross-cutting concerns should enter through explícito providers or adapters.
Shared utils stay outside the domain and should not accumulate domain logic.

## Setup Checklist

- Define the current domains in `ARCHITECTURE.md`.
- Escribir allowed dependency directions in `ARCHITECTURE.md`.
- Record cross-cutting interfaces such as auth, telemetry, and external APIs.
- Añadir one short note for the hardest current boundary violation.
- Decide what should be enforced mechanically by lint, pruebas, or scripts.

## Execution SOP

1. Map the codebase into domains before touching implementation style.
2. For each domain, identify the allowed capa sequence.
3. Identify all cross-cutting concerns and route them through providers or adapters.
4. Move ambiguous shared logic either into the owning domain or into truly generic utils.
5. Document the reglas in `ARCHITECTURE.md`.
6. Añadir one executable guardrail for the highest-cost violation.
7. Update calidad scoring after the cambio.

## Definition Of Terminado

- A fresh agent can tell which capa owns a cambio.
- UI código no longer reaches into repo or external side effects directly.
- Cross-cutting concerns have named entry points.
- At least one important boundary is enforced mechanically.

## Repo Artifacts To Update

- `ARCHITECTURE.md`
- `docs/QUALITY_SCORE.md`
- `docs/design-docs/` when the rationale changed
- `docs/PLANS.md` or the active execution plan
