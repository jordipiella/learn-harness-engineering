# Proyecto 01: Baseline vs Minimal Harness

Compara cómo un harness débil (solo prompt) y un harness explícito (archivos de reglas más mecanismos de verificación) afectan a la tasa de finalización de tareas con AI coding agents.

## Guía de directorios

| Directorio | Significado |
|------|------|
| `starter/` | **Punto de partida**: solo un `task-prompt.md` vago, sin `AGENTS.md` ni `feature_list.json`. Esta es la versión de "harness débil" que entregas al agent. |
| `solution/` | **Implementación de referencia**: el mismo código de aplicación, pero con archivos de harness completos (`AGENTS.md`, `feature_list.json`, `init.sh`, `claude-progress.md`). Esta es la versión de "harness explícito". |

## Cómo usarlo

```sh
# 1. Ejecuta la tarea del agent una vez con starter (harness débil)
cd starter
npm install
# Entrega el contenido de task-prompt.md como prompt a Claude Code / Codex
# Pide al agent completar: arranque de ventana, lista de documentos, panel QA, directorio de datos

# 2. Ejecuta la misma tarea con solution (harness explícito)
cd ../solution
npm install
# Pide al agent leer AGENTS.md y seguir las reglas para la misma tarea

# 3. Compara los dos resultados
# - ¿Se completó la tarea?
# - ¿Cuántos reintentos hicieron falta?
# - ¿El agent declaró "terminado" demasiado pronto?
```

## Funcionalidades cubiertas

- La ventana de Electron arranca correctamente
- La UI muestra el área de lista de documentos
- La UI muestra el panel QA
- La app crea y usa un directorio local de datos

## Lecciones relacionadas

- [Lección 01: Por qué los agents capaces siguen fallando](../../docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md)
- [Lección 02: Qué es realmente un harness](../../docs/es/lectures/lecture-02-what-a-harness-actually-is/index.md)
