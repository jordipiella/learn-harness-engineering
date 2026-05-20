# RELIABILITY.md

This archivo defines how the system proves it is healthy and restartable.

## Standard Paths

- Bootstrap: `[comando]`
- Verification: `[comando]`
- Empezar app or service: `[comando]`
- Depurar or inspect runtime: `[comando]`

## Required Runtime Signals

- estructurado logs for startup and critical flows
- health checks for key services
- trace or timing datos for slow paths when available
- user-visible error states for recoverable fallos

## Golden Journeys

- `[journey 1]`
- `[journey 2]`
- `[journey 3]`

Each golden journey should have a repeatable verificación ruta and claro fallo
signals.

## Reliability Reglas

- No feature is completo if the system cannot restart cleanly afterward.
- Runtime fallos should be diagnosable from repo-local signals.
- If a repeated fallo mode appears, añadir a benchmark or guardrail for it.
- Cleanup is part of reliability, not a separate concern.
