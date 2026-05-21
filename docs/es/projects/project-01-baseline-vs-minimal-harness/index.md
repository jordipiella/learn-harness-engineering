[中文版本 →](../../../zh/projects/project-01-baseline-vs-minimal-harness/)

> Lecciones relacionadas: [Lección 01. Modelos potentes no significan ejecución fiable](./../../lectures/lecture-01-why-capable-agents-still-fail/index.md) · [Lección 02. Qué significa realmente un harness](./../../lectures/lecture-02-what-a-harness-actually-is/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 01. Prompt-only frente a reglas primero: cuánto cambia el resultado

## Qué haces

Construyes una shell mínima de app Electron tipo base de conocimiento: una ventana con lista de documentos a la izquierda, un panel de Q&A a la derecha y un directorio local de datos. La tarea no es compleja. Lo complejo es cómo consigues que el agent la complete.

La ejecutas dos veces. Primera vez: solo un prompt, sin preparación. Segunda vez: con `AGENTS.md`, `init.sh` y `feature_list.json` colocados previamente en el repo. Luego comparas.

El núcleo del proyecto no es escribir código, sino medir la diferencia entre "dedicar 15 minutos a preparar reglas primero" y "dejar que el agent arranque sin más".

## Herramientas

- Claude Code o Codex (elige uno y úsalo en ambas ejecuciones)
- Git (para gestionar ramas y comparar)
- Node.js + Electron (stack del proyecto)
- Un temporizador (para registrar la duración de cada ejecución)

## Mecanismo de harness

Harness mínimo: `AGENTS.md` + `init.sh` + `feature_list.json`
