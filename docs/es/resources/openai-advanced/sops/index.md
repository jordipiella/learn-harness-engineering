# OpenAI Avanzado SOPs

These SOPs translate the article's operating patterns into concrete execution
playbooks you can follow or adapt.

## Included SOPs

- [`layered-domain-architecture.md`](./layered-domain-architecture.md):
  establish explícito capas and cross-cutting límites
- [`encode-knowledge-into-repo.md`](./encode-knowledge-into-repo.md):
  move invisible knowledge from chat, docs, and memory into repo-local archivos
- [`observability-feedback-loop.md`](./observability-feedback-loop.md):
  give agents logs, metrics, traces, and a repeatable depurar loop
- [`chrome-devtools-validation-loop.md`](./chrome-devtools-validation-loop.md):
  usar browser automation and snapshots to validate UI behavior until limpio

## How To Usar Them

1. Pick the SOP that matches your current bottleneck.
2. Usar the checklist to set up the faltante artifacts or tooling.
3. Encode the resulting reglas into your copied `repo-template/` docs.
4. Convert repeated revisión comments into checks, scripts, or guardrails.

These are not meant to be followed blindly. They are meant to hacer the harness
more legible, enforceable, and repeatable.
