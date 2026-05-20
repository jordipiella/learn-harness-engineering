[Versión en chino →](../../../zh/projects/project-06-runtime-observability-and-debugging/)

> Related lecciones: [Lección 11. Hacer the agent's runtime observable](./../../lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md) · [Lección 12. Limpio traspaso at the end of every sesión](./../../lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md)
> Plantilla archivos: [plantillas/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 06. Construir a Completo Agent Harness (Capstone)

## What You Do

This is the capstone proyecto. Assemble everything learned in the first five proyectos, ejecutar a full benchmark, then do a cleanup pass to verificar calidad is maintainable.

Usar a fixed multi-feature tarea set covering the completo product slice: document import, indexing, citation-based Q&A, runtime observabilidad, and readable restartable repo estado. First ejecutar with weak harness baseline, then with your strongest harness, then a cleanup and re-run. Finally, do a harness ablation experiment — remove one component at a time and see which ones actually matter.

## Herramientas

- Claude Código or Codex
- Git
- Node.js + Electron
- Calidad document plantilla
- Evaluador rúbrica
- All harness components accumulated from the first five proyectos

## Harness Mechanism

Completo harness: all mechanisms + observabilidad + ablation study
