[Versión en chino →](../../../zh/projects/project-03-multi-session-continuity/)

> Related lecciones: [Lección 05. Keep contexto alive across sesións](./../../lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md) · [Lección 06. Initialize before every agent sesión](./../../lectures/lecture-06-why-initialization-needs-its-own-phase/index.md)
> Plantilla archivos: [plantillas/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 03. Keep the Agent Working Across Session Restarts

## What You Do

Añadir alcance control and verificación gates to the agent. Implement document chunking, metadata extraction, indexing progress display, and citation-based Q&A flow. Usar `feature_list.json` to track feature status — one feature at a time, no marking as "pass" without verificación evidence.

You ejecutar it twice: first without constraints, second with strict enforcement.

## Herramientas

- Claude Código or Codex
- Git
- Node.js + Electron

## Harness Mechanism

Progress log + sesión traspaso + multi-sesión continuity
