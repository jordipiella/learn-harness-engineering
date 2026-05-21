[中文版本 →](../../../zh/projects/project-02-agent-readable-workspace/)

> Lecciones relacionadas: [Lección 03. Haz del repositorio tu fuente de verdad](./../../lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md) · [Lección 04. Divide las instrucciones entre archivos](./../../lectures/lecture-04-why-one-giant-instruction-file-fails/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 02. Haz que el proyecto sea legible y retomable

## Qué haces

Añades "legibilidad" al repo para que un agent nuevo pueda entender rápidamente la estructura del proyecto, conocer el progreso actual y retomar el trabajo. En concreto: implementas importación de documentos, vista de detalle y persistencia local, repartidas en dos sesiones.

Lo ejecutas dos veces: primero sin ayuda, después con `ARCHITECTURE.md`, `PRODUCT.md` y `session-handoff.md` colocados previamente en el repo.

## Herramientas

- Claude Code o Codex
- Git
- Node.js + Electron

## Mecanismo de harness

Workspace legible por agents + archivos de estado persistentes
