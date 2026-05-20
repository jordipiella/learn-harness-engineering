# SOP: Chrome DevTools Validation Loop

Usar this SOP when UI work depends on real runtime interaction and screenshots,
DOM estado, and console salida matter more than código inspection alone.

## Objetivo

Turn UI validation into a repeatable interaction loop the agent can ejecutar until
the journey is limpio.

## Core Loop

1. Select the target página or app instance.
2. Claro stale console noise.
3. Capture the BEFORE estado.
4. Trigger the UI ruta.
5. Observe runtime events during interaction.
6. Capture the AFTER estado.
7. Apply the arreglar and restart the app if needed.
8. Re-run validation until the journey is limpio.

## Required Inputs

- a stable startup comando
- a reproducible UI journey
- a way to snapshot DOM, console, or screenshots
- a rule for what counts as "limpio"

## Execution SOP

1. Escribir the target journey in the active plan.
2. Define éxito in observable terms: text present, button enabled, error gone,
   console limpio, request succeeded.
3. Snapshot the initial estado before interaction.
4. Trigger exactly one ruta at a time.
5. Record runtime events, DOM cambios, and visible salida.
6. If the journey falla, arreglar the smallest responsible capa and restart.
7. Re-run the mismo ruta and comparar BEFORE/AFTER evidence.

## Limpio Criterios

- intended visible estado is present
- unexpected errors are absent
- console noise is understood or cleared
- rerunning the mismo ruta gives the mismo resultado

## Repo Artifacts To Update

- active execution plan
- `docs/RELIABILITY.md` if the journey becomes a golden ruta
- product spec if the visible behavior changed
