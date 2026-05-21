[中文版本 →](../../../zh/projects/project-03-multi-session-continuity/)

> Lecciones relacionadas: [Lección 05. Mantén vivo el contexto entre sesiones](./../../lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md) · [Lección 06. Inicializa antes de cada sesión de agent](./../../lectures/lecture-06-why-initialization-needs-its-own-phase/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 03. Mantén al agent trabajando tras reinicios de sesión

## Qué haces

Añades control de alcance y puertas de verificación al agent. Implementas chunking de documentos, extracción de metadatos, visualización del progreso de indexación y un flujo de Q&A basado en citas. Usas `feature_list.json` para seguir el estado de las funcionalidades: una funcionalidad cada vez y nada de marcar "pass" sin evidencia de verificación.

Lo ejecutas dos veces: primero sin restricciones y después con aplicación estricta de las reglas.

## Herramientas

- Claude Code o Codex
- Git
- Node.js + Electron

## Mecanismo de harness

Registro de progreso + `session-handoff.md` + continuidad entre sesiones
