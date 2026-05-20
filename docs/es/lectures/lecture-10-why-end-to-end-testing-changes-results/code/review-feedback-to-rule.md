# Ejemplo: Turning Revisión Feedback into a Rule

Repeated revisión comment:

> Do not call filesystem utilities from the renderer. Usar the preload bridge.

Promoted harness rule:

- añadir a lint or import rule preventing `fs` usage in renderer código
- añadir remediation text explaining the preload boundary
