# AGENTS.md

This repositorio is designed for long-running coding-agent work. The objetivo is not
to maximize raw código salida. The objetivo is to leave the repo in a estado where the
siguiente sesión can continue without guessing.

## Startup Flujo de trabajo

Before escritura código:

1. Confirm the working directory with `pwd`.
2. Leer `claude-progress.md` for the latest verified estado and siguiente paso.
3. Leer `feature_list.json` and choose the highest-priority unfinished feature.
4. Revisión recent commits with `git log --oneline -5`.
5. Ejecutar `./init.sh`.
6. Ejecutar the required smoke or end-to-end verificación before starting new work.

If baseline verificación is already failing, arreglar that first. Do not stack new
feature work on top of a broken starting estado.

## Working Reglas

- Work on one feature at a time.
- Do not mark a feature completo just because código was added.
- Keep cambios within the selected feature alcance unless a blocker forces a
  narrow supporting arreglar.
- Do not silently cambio verificación reglas during implementation.
- Prefer durable repo artifacts over chat summaries.

## Required Artifacts

- `feature_list.json`: fuente de verdad for feature estado
- `claude-progress.md`: sesión log and current verified status
- `init.sh`: standard startup and verificación ruta
- `sesión-traspaso.md`: optional compact traspaso for larger sesións

## Definition Of Terminado

A feature is terminado only when all of the following are true:

- the target behavior is implemented
- the required verificación actually ran
- evidence is recorded in `feature_list.json` or `claude-progress.md`
- the repositorio remains restartable from the standard startup ruta

## End Of Session

Before ending a sesión:

1. Update `claude-progress.md`.
2. Update `feature_list.json`.
3. Record any unresolved risk or blocker.
4. Commit with a descriptive message once the work is in a safe estado.
5. Leave the repo limpio enough for the siguiente sesión to ejecutar `./init.sh`
   immediately.
