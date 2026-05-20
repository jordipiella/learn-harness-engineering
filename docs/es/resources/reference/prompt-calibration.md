# Prompt Calibration

Root instrucciones should define the operating frame, not every possible move.

## Keep In The Root Archivo

- repositorio purpose and alcance
- startup ruta
- verificación ruta
- non-negotiable constraints
- required estado artifacts
- end-of-sesión reglas

## Move Out Of The Root Archivo

- long historical edge cases
- topic-specific implementation details
- local arquitectura notes that belong near the código
- ejemplos that only apply to one subsystem

## Working Rule

The root archivo should help a fresh sesión orient itself quickly. If the archivo is
becoming a dumping ground for every past fallo, split the detail into smaller
documents and link to them instead.
