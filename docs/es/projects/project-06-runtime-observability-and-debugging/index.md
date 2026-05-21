[中文版本 →](../../../zh/projects/project-06-runtime-observability-and-debugging/)

> Lecciones relacionadas: [Lección 11. Haz observable el runtime del agent](./../../lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md) · [Lección 12. Traspaso limpio al final de cada sesión](./../../lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 06. Construye un harness completo para agents (capstone)

## Qué haces

Este es el proyecto final. Ensamblas todo lo aprendido en los cinco primeros proyectos, ejecutas un benchmark completo y luego haces una pasada de limpieza para verificar que la calidad es mantenible.

Usa un conjunto fijo de tareas multi-feature que cubra el corte completo del producto: importación de documentos, indexación, Q&A con citas, observabilidad en runtime y estado de repositorio legible y reiniciable. Primero ejecuta con un baseline de harness débil, luego con tu harness más fuerte, después limpia y vuelve a ejecutar. Por último, haz un experimento de ablación del harness: elimina un componente cada vez y observa cuáles importan realmente.

## Herramientas

- Claude Code o Codex
- Git
- Node.js + Electron
- Plantilla de documento de calidad
- Rúbrica de evaluator
- Todos los componentes de harness acumulados en los cinco primeros proyectos

## Mecanismo de harness

Harness completo: todos los mecanismos + observabilidad + estudio de ablación
