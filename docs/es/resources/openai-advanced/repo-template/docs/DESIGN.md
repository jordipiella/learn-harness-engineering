# DESIGN.md

This archivo is the diseño entrypoint. Keep it brief and usar it to route into the
more detailed archivos under `docs/design-docs/`.

## Purpose

Record durable product and system diseño decisions that should survive beyond a
single chat, sprint, or reviewer memory.

## Leer This When

- you need the current diseño philosophy
- you are about to introduce a new pattern
- you need to know which diseño decisions are settled versus still open

## Canonical Diseño Docs

- `docs/design-docs/index.md`: index of accepted, proposed, and deprecated docs
- `docs/design-docs/core-beliefs.md`: project-wide agent-first beliefs

## Diseño Reglas

- Keep diseño docs small and current.
- Prefer one doc per decision area.
- Link diseño docs from plans and specs when a cambio depends on them.
- If a diseño rule becomes operationally critical, promote it into an automated
  check or update `ARCHITECTURE.md`.
