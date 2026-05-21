[中文版本 →](../../../zh/projects/project-04-incremental-indexing/)

> Lecciones relacionadas: [Lección 07. Dibuja límites claros de tarea para agents](./../../lectures/lecture-07-why-agents-overreach-and-under-finish/index.md) · [Lección 08. Usa listas de funcionalidades para limitar lo que hace el agent](./../../lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 04. Usa feedback en runtime para corregir el comportamiento del agent

## Qué haces

Añades observabilidad en runtime (logs de arranque, logs de importación/indexación y estados de error) y restricciones arquitectónicas para prevenir violaciones entre capas. Siembras un bug de runtime para que el agent lo corrija.

Lo ejecutas dos veces: primero sin logs ni restricciones y después con herramientas y reglas adecuadas.

## Herramientas

- Claude Code o Codex
- Git
- Node.js + Electron

## Mecanismo de harness

Feedback en runtime + control de alcance + indexación incremental
