# SOP: Observability Feedback Loop

Usar this SOP when debugging is slow, agents keep claiming éxito without
evidence, or runtime behavior is harder to inspect than the código itself.

## Objetivo

Give the agent a local feedback loop over logs, metrics, traces, and runnable
workloads so it can reason from execution, not only from código inspection.

## Minimum Stack

- application emits estructurado logs
- application emits metrics and traces when feasible
- local fan-out or collection capa
- query interfaces for logs, metrics, and traces
- repeatable workload or usuario journey to rerun after each cambio

## Execution SOP

1. Define the golden runtime journeys that matter most.
2. Añadir estructurado logs to startup and the critical ruta.
3. Añadir metrics for latency, fallo counts, or queue depth where useful.
4. Añadir traces or timing markers for slow or multi-step flows.
5. Hacer the signals queryable from the local dev entorno.
6. Give the agent one repeatable workload or scenario to rerun.
7. Require the loop: query -> correlate -> reason -> implement -> restart ->
   rerun -> verificar.

## Depurar Session Checklist

- What falló?
- Which signal proves the fallo?
- Which capa owns the fallo?
- What changed after the arreglar?
- Did the app restart cleanly?
- Did the mismo workload pass after rerun?

## Definition Of Terminado

- The agent can explain a fallo mode from runtime evidence.
- The mismo workload can be rerun after each cambio.
- Restart and rerun are part of the normal tarea loop.
- Reliability signals are documented in `docs/RELIABILITY.md`.
