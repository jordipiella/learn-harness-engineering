# Proyecto 01: Baseline vs Minimal Harness

Comparar how a weak harness (prompt only) and an explícito harness (rule archivos plus verificación mechanisms) affect the finalización rate of AI coding-agent tareas.

## Directory Guía

| Directory | Meaning |
|------|------|
| `inicial/` | **Starting point**: only a vago `task-prompt.md`, with no AGENTS.md and no feature_list.json. This is the "weak harness" version you give to the agent. |
| `solución/` | **Referencia implementation**: the mismo application código, but with completo harness archivos (AGENTS.md, feature_list.json, init.sh, claude-progress.md). This is the "explícito harness" version. |

## How to Usar

```sh
# 1. Run the agent task once with starter (weak harness)
cd starter
npm install
# Give the contents of task-prompt.md as the prompt to Claude Code / Codex
# Ask the agent to complete: window startup, document list, QA panel, data directory

# 2. Run the same task with solution (explicit harness)
cd ../solution
npm install
# Ask the agent to read AGENTS.md and follow the rules for the same task

# 3. Compare the two results
# - Was the task completed?
# - How many retries were needed?
# - Did the agent claim "done" too early?
```

## Funcionalidades Covered

- Electron window starts successfully
- UI shows the document-list area
- UI shows the QA panel
- App crea and uses a local datos directory

## Related Lecciones

- [Lección 01: Por qué los agents capaces siguen fallando](../../docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md)
- [Lección 02: Qué es realmente un harness](../../docs/es/lectures/lecture-02-what-a-harness-actually-is/index.md)
