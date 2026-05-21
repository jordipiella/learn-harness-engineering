# Ejemplo: convertir feedback de revisión en una regla

Comentario de revisión repetido:

> Do not call filesystem utilities from the renderer. Use the preload bridge.

Promoted harness rule:

- add a lint or import rule preventing `fs` usage in renderer code
- add remediation text explaining the preload boundary
