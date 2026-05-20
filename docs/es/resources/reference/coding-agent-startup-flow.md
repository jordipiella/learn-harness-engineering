# Coding Agent Startup Flow

Usar this at the beginning of every sesión after inicialización is completo.

## Fixed Startup Plantilla

1. Ejecutar `pwd` and confirm the repositorio root.
2. Leer `claude-progress.md`.
3. Leer `feature_list.json`.
4. Revisión recent commits with `git log --oneline -5`.
5. Ejecutar `./init.sh`.
6. Ejecutar a baseline smoke or end-to-end ruta.
7. If the baseline is broken, arreglar that first.
8. Select the highest-priority unfinished feature.
9. Work only on that feature until it is verified or explicitly blocked.

## Why This Order Matters

- `pwd` prevents accidental work in the incorrecto directory.
- progress and feature archivos recover durable estado before new edits begin.
- recent commits explain what changed most recently.
- `init.sh` standardizes startup instead of relying on memory.
- baseline verificación catches broken starting states before new work hides
  them.

## End-Of-Session Mirror

The mismo sesión should end by:

1. recording progress
2. updating feature estado
3. escritura a traspaso if needed
4. committing safe work
5. leaving a limpio restart ruta
