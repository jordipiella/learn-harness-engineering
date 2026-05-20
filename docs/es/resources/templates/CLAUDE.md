# CLAUDE.md

You are working in a repositorio designed for long-running implementation work.
Prioritize fiable finalización, continuity across sesións, and explícito
verificación over speed.

## Operating Loop

At the empezar of every sesión:

1. Ejecutar `pwd` and confirm you are in the expected repositorio root.
2. Leer `claude-progress.md`.
3. Leer `feature_list.json`.
4. Revisión recent commits with `git log --oneline -5`.
5. Ejecutar `./init.sh`.
6. Check whether the baseline smoke or end-to-end ruta is already broken.

Then select exactly one unfinished feature and work only on that feature until
you either verificar it or document why it is blocked.

## Reglas

- One active feature at a time.
- Do not claim finalización without runnable evidence.
- Do not rewrite the lista de funcionalidades to hide unfinished work.
- Do not remove or weaken pruebas just to hacer the tarea look completo.
- Usar repositorio artifacts as the sistema de registro.

## Required Archivos

- `feature_list.json`
- `claude-progress.md`
- `init.sh`
- `sesión-traspaso.md` when a compact traspaso is useful

## Finalización Gate

A feature can move to `passing` only after the required verificación tiene éxito
and the resultado is recorded.

## Before You Stop

1. Update the progress log.
2. Update the feature estado.
3. Record what is still broken or unverified.
4. Commit once the repositorio is safe to resume.
5. Leave a limpio restart ruta for the siguiente sesión.
