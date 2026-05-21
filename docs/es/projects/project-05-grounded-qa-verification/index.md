[中文版本 →](../../../zh/projects/project-05-grounded-qa-verification/)

> Lecciones relacionadas: [Lección 09. Evita que los agents declaren victoria demasiado pronto](./../../lectures/lecture-09-why-agents-declare-victory-too-early/index.md) · [Lección 10. Solo una ejecución de pipeline completo cuenta como verificación real](./../../lectures/lecture-10-why-end-to-end-testing-changes-results/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 05. Haz que el agent verifique su propio trabajo

## Qué haces

Implementas separación de roles: un generator que implementa, un evaluator que revisa y, opcionalmente, un planner. Ejecutas tres veces para medir el efecto de cada rol añadido.

Elige una mejora sustantiva de funcionalidad (historial conversacional multi-turn, rediseño del panel de citas o filtrado de documentos) y mantenla constante en todas las ejecuciones.

## Herramientas

- Claude Code o Codex
- Git
- Node.js + Electron

## Mecanismo de harness

Autoverificación + Q&A fundamentada + finalización basada en evidencia
